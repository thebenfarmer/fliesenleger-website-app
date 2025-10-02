import { NextRequest, NextResponse } from 'next/server';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'gemma3';
const OLLAMA_ENABLED = process.env.OLLAMA_ENABLED !== 'false';

const SYSTEM_PROMPT = `Du bist der KI-Assistent für einen professionellen Fliesenleger-Meisterbetrieb in München.

UNTERNEHMENSINFORMATIONEN:
- Name: Fliesenleger Meisterbetrieb München
- Gegründet: 1998 (über 25 Jahre Erfahrung)
- Telefon: 089 / 123 456
- E-Mail: info@fliesenleger-muenchen.de
- Adresse: Musterstraße 123, 80331 München

LEISTUNGEN & PREISE:
- Bodenfliesen: ab 45€/m² (inkl. Material und Verlegung)
- Wandfliesen: ab 38€/m²
- Naturstein (Marmor, Granit, Schiefer): ab 85€/m²
- Mosaik: ab 65€/m²
- Badezimmer Komplettsanierung: Auf Anfrage
- Außenbereich (Terrasse, Balkon): ab 52€/m²

MATERIALIEN:
- Feinsteinzeug (35-85€/m²): Extrem hart, frostbeständig, pflegeleicht
- Marmor (85-250€/m²): Edler Naturstein, einzigartige Maserung
- Granit (75-180€/m²): Sehr robust, kratzfest, langlebig
- Glasmosaik (45-95€/m²): Lichtreflexion, brillante Farben
- Großformat XXL bis 320x160cm (65-150€/m²): Minimale Fugen, moderne Optik
- Schiefer (65-120€/m²): Rutschfest, frostbeständig

GARANTIEN & SERVICES:
- 5 Jahre Garantie auf alle Arbeiten
- Kostenlose Erstberatung vor Ort
- Festpreis-Garantie (keine versteckten Kosten)
- Zufriedenheitsgarantie (kostenlose Nachbesserung innerhalb 30 Tage)
- Durchschnittliche Projektdauer Badezimmer: 5-7 Werktage
- Vorlaufzeit für Termine: 3-6 Wochen (bei Dringlichkeit auch kürzer)

PROZESS:
1. Kontaktaufnahme (< 24h Rückmeldung)
2. Kostenloser Vor-Ort-Termin mit Beratung
3. Detailliertes Festpreis-Angebot
4. Professionelle Umsetzung durch Meister-Team
5. Gemeinsame Abnahme mit 5 Jahren Garantie

TONALITÄT:
- Professionell und kompetent
- Hilfsbereit und kundenorientiert
- Klar und verständlich (keine Fachbegriffe ohne Erklärung)
- Beantworte Fragen direkt und konkret
- Bei komplexen Anfragen: Empfehle persönliche Beratung
- Biete aktiv an, einen Termin zu vereinbaren

Antworte auf Deutsch und halte deine Antworten präzise (2-4 Sätze). Bei Preisanfragen nenne die Spannen und erkläre, dass genaue Preise vom Projekt abhängen.`;

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Fallback responses wenn Ollama nicht verfügbar ist
const getFallbackResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes('preis') || lowerMessage.includes('kosten') || lowerMessage.includes('badezimmer')) {
    return 'Unsere Preise variieren je nach Material:\n\n• Bodenfliesen: ab 45€/m²\n• Wandfliesen: ab 38€/m²\n• Naturstein: ab 85€/m²\n• Mosaik: ab 65€/m²\n\nFür ein genaues Angebot empfehle ich eine kostenlose Vor-Ort-Beratung. Soll ich einen Termin für Sie vereinbaren?';
  }
  if (lowerMessage.includes('termin') || lowerMessage.includes('beratung') || lowerMessage.includes('besuch')) {
    return 'Gerne vereinbare ich einen Termin für Sie! Bitte füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an unter 089 / 123 456. Wir melden uns innerhalb von 24 Stunden bei Ihnen.';
  }
  if (lowerMessage.includes('material') || lowerMessage.includes('fliese') || lowerMessage.includes('naturstein')) {
    return 'Wir arbeiten mit verschiedenen hochwertigen Materialien:\n\n• Feinsteinzeug - sehr hart und pflegeleicht\n• Marmor - edle Naturstein-Optik\n• Granit - extrem robust\n• Glasmosaik - brillante Lichteffekte\n\nWelches Material interessiert Sie besonders?';
  }
  if (lowerMessage.includes('referenz') || lowerMessage.includes('projekt') || lowerMessage.includes('beispiel')) {
    return 'Gerne zeige ich Ihnen unsere Referenzen! Schauen Sie sich unsere Projektgalerie an oder besuchen Sie die Referenzen-Seite. Über 500 zufriedene Kunden sprechen für unsere Qualität.';
  }

  return 'Das ist eine interessante Frage. Für eine detaillierte Beratung zu Ihrem spezifischen Anliegen empfehle ich ein persönliches Gespräch. Möchten Sie einen Termin vereinbaren?';
};

interface ChatMessage {
  sender: 'user' | 'bot';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || '';

    // Versuche Ollama zu verwenden, falls aktiviert
    if (OLLAMA_ENABLED) {
      try {
        const ollamaMessages: Message[] = [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map((msg: ChatMessage) => ({
            role: (msg.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
            content: msg.content,
          })),
        ];

        const ollamaResponse = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: OLLAMA_MODEL,
            messages: ollamaMessages,
            stream: false,
          }),
          signal: AbortSignal.timeout(30000), // 30 second timeout
        });

        if (ollamaResponse.ok) {
          const data = await ollamaResponse.json();
          const assistantMessage = data.message?.content || getFallbackResponse(lastUserMessage);

          return NextResponse.json({
            message: assistantMessage,
            source: 'ollama',
          });
        }
      } catch (ollamaError) {
        console.error('Ollama error:', ollamaError);
        // Fall through to fallback
      }
    }

    // Fallback zu keyword-basierten Antworten
    const fallbackMessage = getFallbackResponse(lastUserMessage);
    return NextResponse.json({
      message: fallbackMessage,
      source: 'fallback',
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
