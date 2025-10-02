'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickActions = [
  'Preise für Badezimmer',
  'Termin vereinbaren',
  'Materialberatung',
  'Referenzen ansehen',
];

const botResponses = {
  greeting: 'Hallo! Ich bin Ihr virtueller Assistent. Wie kann ich Ihnen bei Ihrem Fliesenprojekt helfen?',
  preise: 'Unsere Preise variieren je nach Material:\n\n• Bodenfliesen: ab 45€/m²\n• Wandfliesen: ab 38€/m²\n• Naturstein: ab 85€/m²\n• Mosaik: ab 65€/m²\n\nFür ein genaues Angebot empfehle ich eine kostenlose Vor-Ort-Beratung. Soll ich einen Termin für Sie vereinbaren?',
  termin: 'Gerne vereinbare ich einen Termin für Sie! Bitte füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an unter 089 / 123 456. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  material: 'Wir arbeiten mit verschiedenen hochwertigen Materialien:\n\n• Feinsteinzeug - sehr hart und pflegeleicht\n• Marmor - edle Naturstein-Optik\n• Granit - extrem robust\n• Glasmosaik - brillante Lichteffekte\n\nWelches Material interessiert Sie besonders?',
  referenzen: 'Gerne zeige ich Ihnen unsere Referenzen! Schauen Sie sich unsere Projektgalerie an oder besuchen Sie die Referenzen-Seite. Über 500 zufriedene Kunden sprechen für unsere Qualität.',
  default: 'Das ist eine interessante Frage. Für eine detaillierte Beratung zu Ihrem spezifischen Anliegen empfehle ich ein persönliches Gespräch. Möchten Sie einen Termin vereinbaren?',
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: botResponses.greeting,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('preis') || lowerMessage.includes('kosten') || lowerMessage.includes('badezimmer')) {
      return botResponses.preise;
    }
    if (lowerMessage.includes('termin') || lowerMessage.includes('beratung') || lowerMessage.includes('besuch')) {
      return botResponses.termin;
    }
    if (lowerMessage.includes('material') || lowerMessage.includes('fliese') || lowerMessage.includes('naturstein')) {
      return botResponses.material;
    }
    if (lowerMessage.includes('referenz') || lowerMessage.includes('projekt') || lowerMessage.includes('beispiel')) {
      return botResponses.referenzen;
    }

    return botResponses.default;
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(content),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-all hover:scale-110 hover:shadow-xl md:bottom-6',
          isOpen && 'scale-0'
        )}
        aria-label="Chat öffnen"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end md:inset-auto md:bottom-6 md:right-4">
          {/* Mobile Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Container */}
          <div className="relative flex h-full w-full flex-col bg-background shadow-2xl md:h-[600px] md:w-[400px] md:rounded-2xl">
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-6 py-4 md:rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">KI-Assistent</h3>
                  <p className="text-xs text-white/80">Immer für Sie da</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Chat schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex',
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm',
                      message.sender === 'user'
                        ? 'bg-primary-100 text-primary-800 border border-primary-200'
                        : 'bg-muted text-foreground'
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <span className="mt-1 block text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('de-DE', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-muted px-4 py-2.5">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: '0ms' }} />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: '150ms' }} />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="border-t border-border px-4 py-3">
                <p className="mb-2 text-xs font-medium text-muted-foreground">Schnellaktionen:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      onClick={() => handleQuickAction(action)}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Nachricht eingeben..."
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Nachricht senden"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                KI-Assistent • Powered by Fliesenleger München
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
