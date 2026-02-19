# UX Audit Report: Fliesenleger München Website

**Datum:** 2026-02-19
**Auditor:** UX Auditor
**Plattform:** Web (Next.js / React, Tailwind CSS v4)
**Audit-Scope:** Gesamte Landing-Page inkl. aller Sektionen, Subpages (Kontakt), UI-Komponenten, API-Route, Accessibility-Infrastruktur und Design-System

---

## Executive Summary

Die Website ist ein technisch solider, conversion-orientierter Auftritt eines Fliesenleger-Meisterbetriebs. Das Design-System ist gut durchdacht, die Markensprache konsistent und die Mobile-First-Struktur vorhanden. Es gibt jedoch kritische Probleme bei der Formularfehlerbehandlung, potenzielle UX-Katastrophen durch Platzhalterdaten und mehrere Major-Issues bei Accessibility und User-Flow.

- **Gesamtzahl Findings:** 28
- **Severity 4 (Katastrophal):** 3
- **Severity 3 (Major):** 8
- **Severity 2 (Minor):** 11
- **Severity 1 (Kosmetisch):** 6
- **Gesamtbewertung:** Problematisch (muss vor Go-Live adressiert werden)

---

## Findings

---

### [F-001] Kontaktformular zeigt keine Fehlermeldungen bei API-Fehler

- **Severity:** 4
- **Heuristik:** H1 (Sichtbarkeit des Systemstatus), H9 (Fehlererkennung und -behebung)
- **Plattform:** Web
- **Location:** `src/components/sections/Contact.tsx`, Zeilen 44-49, handleSubmit()
- **Beschreibung:** Wenn der API-Aufruf an `/api/contact` fehlschlaegt (Netzwerkfehler, 500er, 400er), wird der Fehler nur in der Browserkonsole geloggt (`console.error`). Es gibt keinen `submitError`-State und keine Fehleranzeige fuer den Nutzer. Der `if (response.ok)` Block prueft zwar den Erfolgsfall, aber ein `response.ok === false` (z.B. Validierungsfehler 400) laeuft stillschweigend durch den `finally`-Block, ohne dem User Feedback zu geben.
- **Impact:** Der Nutzer weiss nicht, ob seine Anfrage erfolgreich gesendet wurde oder nicht. Er wartet moeglicherweise auf eine Rueckmeldung, die nie kommt. Der Lead geht verloren.
- **Empfehlung:** Einen `submitError`-State hinzufuegen und bei `catch` sowie bei `!response.ok` eine sichtbare Fehlermeldung rendern. Beispiel: "Leider ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an: 089 / 123 456."
- **Zustaendiger Agent:** Web UI Designer (Fehler-State im UI) + Interaction Designer (Fehlerzustand-Transition)

---

### [F-002] Platzhalterdaten im Produktions-Template sichtbar

- **Severity:** 4
- **Heuristik:** H4 (Konsistenz und Standards), H2 (Uebereinstimmung mit realer Welt)
- **Plattform:** Web
- **Location:** Mehrere Dateien: `Contact.tsx` (Zeile 229: "Musterstrasse 123"), `Footer.tsx` (Zeile 93: "Musterstrasse 123"), `Hero.tsx` (Zeile 67: "089 / 123 456"), `TrustBadges.tsx` (Zeile 170: Placeholder-Google-URL "g.page/r/EXAMPLE"), `Testimonials.tsx` (Zeile 57: Disclaimer "Beispielhafte Darstellung")
- **Beschreibung:** Mehrere kritische Kontaktdaten sind Platzhalter. Telefonnummer "089 / 123 456" ist ungueltig. Die Google-Reviews-URL "https://g.page/r/EXAMPLE/review" fuehrt ins Leere. Der sichtbare Disclaimer "Beispielhafte Darstellung. Vor Produktiveinsatz durch echte Kundenstimmen ersetzen." ist direkt im UI und fuer jeden Besucher sichtbar.
- **Impact:** Massiver Vertrauensverlust. Nutzer, die anrufen wollen, erreichen niemanden. Fake-Disclaimer zerstoert die Glaubwuerdigkeit der Trust-Signals vollstaendig.
- **Empfehlung:** Alle Platzhalterdaten vor Go-Live ersetzen. Den Testimonials-Disclaimer aus dem sichtbaren UI entfernen oder in einen Kommentar umwandeln.
- **Zustaendiger Agent:** Copywriter (echte Daten eintragen), Web UI Designer (Disclaimer entfernen)

---

### [F-003] AvailabilityChecker-Termin wird nicht an API uebertragen

- **Severity:** 4
- **Heuristik:** H1 (Sichtbarkeit des Systemstatus), H5 (Fehlervermeidung)
- **Plattform:** Web
- **Location:** `src/components/features/AvailabilityChecker.tsx`, Zeile 85-89, handleSubmit()
- **Beschreibung:** Die Terminbuchung (`handleSubmit`) setzt den State auf `success`, ohne einen einzigen API-Aufruf zu machen. Der Kommentar "Hier wuerde normalerweise API-Call stattfinden" bestaetigt dies. Der User glaubt, seinen Termin verbindlich gebucht zu haben, aber es gibt keine serverseitige Verarbeitung.
- **Impact:** Nutzer buchen Termine, die nirgends ankommen. Das generiert falsche Erwartungen und Frustration. Potenzielle Kunden rufen nicht mehr an, weil sie glauben, bereits einen Termin zu haben.
- **Empfehlung:** Entweder eine echte API-Integration implementieren oder den Feature-Button deaktivieren / als "Demo" kennzeichnen bis zur Implementierung. Alternativ muss klar kommuniziert werden, dass die Buchung noch keine Bestaetigung ist.
- **Zustaendiger Agent:** Web UI Designer (Demo-Hinweis im UI)

---

### [F-004] Header: Kein Active-State fuer aktuelle Navigationsseite

- **Severity:** 3
- **Heuristik:** H1 (Sichtbarkeit des Systemstatus), H6 (Wiedererkennung statt Erinnerung)
- **Plattform:** Web
- **Location:** `src/components/layout/Header.tsx`, Zeilen 57-67
- **Beschreibung:** Die Desktop-Navigation rendert alle Links identisch. Es gibt kein `aria-current="page"` und keinen visuellen Active-State (z.B. Unterstrich, Fettschrift, Farbaenderung), der dem Nutzer zeigt, auf welcher Seite er sich befindet. Next.js bietet `usePathname()` zur Erkennung der aktiven Route.
- **Impact:** Nutzer verlieren die Orientierung auf Unterseiten (Leistungen, Referenzen, Ueber uns). Sie wissen nicht, wo sie sich in der Site-Hierarchie befinden.
- **Empfehlung:** `usePathname()` aus `next/navigation` importieren und bei jedem Nav-Link pruefen, ob `pathname === item.href`. Den aktiven Link mit `aria-current="page"` und einer abweichenden CSS-Klasse (z.B. `text-primary font-semibold border-b-2 border-primary`) versehen.
- **Zustaendiger Agent:** Web UI Designer

---

### [F-005] Header: Transparenter Hintergrund macht Navigation unlesbar beim Hero

- **Severity:** 3
- **Heuristik:** H8 (Aesthetisches und minimalistisches Design), WCAG Kontrast
- **Plattform:** Web
- **Location:** `src/components/layout/Header.tsx`, Zeilen 32-37
- **Beschreibung:** Der Header startet mit `bg-transparent` und wird erst nach einem Scroll von 20px solid. Auf dem Hero-Bild (dunkles Bild mit hellem Text) bedeutet das: die hellen Navigationslinks (`text-foreground`, also `#1C1917` Dunkelbraun) liegen auf einem transparenten Hintergrund ueber dem dunklen Hero-Overlay. Kein Kontrast-Test moeglich ohne Bild-Asset, aber das Pattern ist ein bekanntes Kontrast-Problem.
- **Impact:** Navigationslinks koennen auf dem Hero-Hintergrundbild schwer lesbar sein, was das Navigation erschwert.
- **Empfehlung:** Entweder den Header von Anfang an mit einem semi-transparenten Hintergrund starten (`bg-background/80 backdrop-blur-md`) oder die Textfarbe im transparenten Zustand auf `text-white` setzen.
- **Zustaendiger Agent:** Web UI Designer

---

### [F-006] Kontaktformular: Keine Client-seitige Validierung vor Submit

- **Severity:** 3
- **Heuristik:** H5 (Fehlervermeidung), H9 (Fehlererkennung und -behebung)
- **Plattform:** Web
- **Location:** `src/components/sections/Contact.tsx`, gesamtes Formular
- **Beschreibung:** Das Formular setzt ausschliesslich auf HTML5-`required`-Attribute und serverseitige Zod-Validierung. Es gibt keine React-seitige Validierung (z.B. react-hook-form mit Zod-Resolver). Der `Input`-Component hat zwar eine `error`-Prop, diese wird im Kontaktformular nie befuellt. Fehler vom Server (400 + fieldErrors) werden ebenfalls nicht in die UI rueckgespielt.
- **Impact:** Nutzer erfahren Fehler erst nach dem Absenden. Feld-spezifische Fehlermeldungen (z.B. "Ungueltige E-Mail") erscheinen nie im Frontend. HTML5-Validierung ist browserabhaengig und nicht konsistent.
- **Empfehlung:** React Hook Form + Zod-Resolver integrieren. Den `error`-Prop des Input-Components mit den Fehlermeldungen befuellen. Das ContactSchema aus der API-Route exportieren und im Frontend wiederverwenden.
- **Zustaendiger Agent:** Web UI Designer, Interaction Designer

---

### [F-007] SkipLink verweist auf nicht-existente ID `main-content`

- **Severity:** 3
- **Heuristik:** H10 (Hilfe und Dokumentation), Accessibility WCAG 2.4.1
- **Plattform:** Web
- **Location:** `src/components/accessibility/SkipLink.tsx`, `src/app/page.tsx`
- **Beschreibung:** Der SkipLink zeigt auf `#main-content` (`href="#main-content"`). Das `<main>`-Element in `page.tsx` (Zeile 23) hat keine `id`-Attribute. Der SkipLink funktioniert daher nicht – Keyboard-Nutzer landen nach dem Aktivieren des SkipLinks nirgends.
- **Impact:** WCAG 2.4.1 (Bypass Blocks) wird verletzt. Screen-Reader und Tastatur-Nutzer muessen die gesamte Navigation durchlaufen.
- **Empfehlung:** Das `<main>`-Element in `page.tsx` mit `id="main-content"` versehen: `<main id="main-content" className="pt-20">`.
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer

---

### [F-008] Hero-Hintergrundbild hat keinen Alt-Text / fehlt als `<img>`

- **Severity:** 3
- **Heuristik:** Accessibility WCAG 1.1.1
- **Plattform:** Web
- **Location:** `src/components/sections/Hero.tsx`, Zeile 17
- **Beschreibung:** Das Hero-Bild wird als CSS `backgroundImage` per Inline-Style implementiert (`style={{ backgroundImage: 'url(/images/hero/hero-badezimmer.jpg)' }}`). CSS-Hintergrundbilder sind fuer Screen-Reader nicht zugaenglich, da sie keinen Alt-Text unterstuetzen. Das Bild ist zwar dekorativ, aber da es das einzige visuelle Element des Hero-Bereichs ist, fehlt dem Bereich jegliche visuelle Beschreibung fuer AT-Nutzer.
- **Impact:** Screen-Reader-Nutzer bekommen keinen Kontext ueber den visuellen Inhalt der Hero-Section.
- **Empfehlung:** Entweder ein `<img>`-Tag mit `alt=""` (dekorativ) und `role="presentation"` verwenden, oder das Next.js `<Image>`-Component mit `alt="Modernes Badezimmer nach Renovierung"` nutzen. Letzteres verbessert auch die LCP (Largest Contentful Paint) Performance.
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer, Web UI Designer

---

### [F-009] Services-Karten: Hintergrundbild als CSS-Hintergrund ohne Alt-Text

- **Severity:** 3
- **Heuristik:** Accessibility WCAG 1.1.1
- **Plattform:** Web
- **Location:** `src/components/sections/Services.tsx`, Zeile 110-112
- **Beschreibung:** Alle 6 Service-Karten laden ihre Bilder als `background-image` per Inline-Style, identisch wie der Hero. Keines dieser Bilder hat einen zugaenglichen Alternativtext. Da die Bilder inhaltlich relevant sind (zeigen die jeweilige Dienstleistung), ist dies ein Accessibility-Problem.
- **Impact:** Screen-Reader-Nutzer sehen nur den Karten-Text, nicht das visuelle Bild der Leistung.
- **Empfehlung:** Next.js `<Image>`-Component mit `alt`-Attribut verwenden. Beispiel: `alt="Bodenfliesen Verlegung Muenchen"`.
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer, Web UI Designer

---

### [F-010] TileConfigurator: Download- und Share-Buttons sind nicht funktional

- **Severity:** 3
- **Heuristik:** H1 (Sichtbarkeit des Systemstatus), H5 (Fehlervermeidung)
- **Plattform:** Web
- **Location:** `src/components/features/TileConfigurator.tsx`, Zeilen 128-131, handleDownload()
- **Beschreibung:** Der "Screenshot herunterladen"-Button loest ein `alert('Screenshot wird heruntergeladen... (Demo-Funktion)')` aus. Die Share-Buttons im Modal (`Per E-Mail teilen`, `WhatsApp`, `SMS`) haben keine `href`- oder `onClick`-Handler und tun nichts. Diese Dummy-Interaktionen sind im aktuellen Code nicht als "Demo" o.ae. fuer den Nutzer gekennzeichnet.
- **Impact:** Nutzer klicken auf Buttons, erwarten eine Funktion und erhalten entweder einen verwirrenden Browser-Alert oder gar keine Reaktion. Vertrauensverlust.
- **Empfehlung:** Entweder die Buttons vollstaendig entfernen, bis die Funktion implementiert ist, oder klar als "demnachst verfuegbar" labeln. Den alert() durch eine Toast-Notification ersetzen oder die Funktion implementieren.
- **Zustaendiger Agent:** Interaction Designer, Web UI Designer

---

### [F-011] Hero: Telefon- und WhatsApp-Buttons auf Mobile ausgeblendet

- **Severity:** 3
- **Heuristik:** H7 (Flexibilitaet und Effizienz), H3 (Nutzerkontrolle und Freiheit)
- **Plattform:** Web (Mobile)
- **Location:** `src/components/sections/Hero.tsx`, Zeilen 64 und 71-82
- **Beschreibung:** Der Telefon-Button im Hero (`<a href="tel:...">`) hat die Klasse `hidden sm:block` – ist also auf Mobile (< 640px) vollstaendig ausgeblendet. Ebenso der WhatsApp-Button. Auf Mobile sieht der Nutzer im Hero nur den CTA "Kostenloses Festpreis-Angebot anfordern", der zur Kontaktseite fuehrt.
- **Impact:** Mobile Nutzer, die sofort anrufen wollen (hohe Kaufintention), muessen erst zur Kontaktseite scrollen oder den StickyContactBar nutzen. Konversionspotenzial wird im Hero verschenkt, wo die Aufmerksamkeit am hoechsten ist.
- **Empfehlung:** Telefon- und WhatsApp-Button auch auf Mobile anzeigen, ggf. in einem kompakten Format untereinander statt nebeneinander. Alternativ den CTA-Block auf Mobile um einen "Jetzt anrufen"-Button ergaenzen.
- **Zustaendiger Agent:** Web UI Designer, Interaction Designer

---

### [F-012] Testimonials: Kein Auto-Advance, keine Touch-Swipe-Unterstuetzung auf Mobile

- **Severity:** 2
- **Heuristik:** H7 (Flexibilitaet und Effizienz), H3 (Nutzerkontrolle)
- **Plattform:** Web (Mobile)
- **Location:** `src/components/sections/Testimonials.tsx`
- **Beschreibung:** Der Testimonials-Slider hat auf Desktop Prev/Next-Buttons (ausserhalb der Card positioniert, mit `-translate-x-12` bzw. `translate-x-12`). Auf Mobile gibt es zwar separate Buttons, aber kein Touch-Swiping. Ein Auto-Advance-Feature fehlt ebenfalls. Der Nutzer muss aktiv auf Buttons klicken.
- **Impact:** Mobile-Nutzer entdecken moeglicherweise nicht alle Testimonials, da Swipe-Gesten erwartet werden. Die ausserhalb positionierten Desktop-Buttons koennen bei kleinen viewport-Breiten abgeschnitten werden.
- **Empfehlung:** Touch-Swipe-Unterstuetzung (z.B. via Framer Motion `drag` oder einem Carousel-Library) hinzufuegen. Auto-Advance optional (mit Pause bei Hover/Touch). Desktop-Buttons innerhalb der Card-Grenzen positionieren.
- **Zustaendiger Agent:** Interaction Designer

---

### [F-013] FAQ: Animationsimplementierung nur mit max-height, keine ARIA-Attribute

- **Severity:** 2
- **Heuristik:** Accessibility WCAG 4.1.2, H1 (Sichtbarkeit des Systemstatus)
- **Plattform:** Web
- **Location:** `src/components/sections/FAQ.tsx`, Zeilen 68-95
- **Beschreibung:** Der FAQ-Accordion nutzt CSS-Transition mit `max-height: 96 / 0`. Dies hat zwei Probleme: 1) Kein `aria-expanded` auf dem Button-Element, kein `role="region"` und keine `aria-controls`/`id`-Verknuepfung – Screen-Reader wissen nicht, ob das Panel offen oder geschlossen ist. 2) `max-h-96` (384px) koennte bei langen Antworten zu wenig sein.
- **Impact:** Screen-Reader-Nutzer erhalten keine Information ueber den Zustand (offen/geschlossen) der FAQ-Eintraege. WCAG 4.1.2 (Name, Role, Value) wird verletzt.
- **Empfehlung:** `aria-expanded={openIndex === index}` zum Button hinzufuegen, `aria-controls="faq-answer-{index}"` setzen und das Antwort-Div mit entsprechender `id` und `role="region"` versehen. CSS-Animation durch Framer-Motion-AnimatePresence ersetzen (bereits im Projekt vorhanden).
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer

---

### [F-014] Kostenrechner: Keine Eingabevalidierung fuer unplausible Werte

- **Severity:** 2
- **Heuristik:** H5 (Fehlervermeidung), H9 (Fehlererkennung und -behebung)
- **Plattform:** Web
- **Location:** `src/components/features/CostCalculator.tsx`, Zeilen 71-97
- **Beschreibung:** Der Kostenrechner akzeptiert beliebig grosse und kleine Zahlen. `min="0"` ist gesetzt, aber es gibt kein `max`. Ein Nutzer kann "1000" als Laenge und "1000" als Breite eingeben – das Ergebnis wuerde "1.000.000 m² - Gesamtkosten: 65.000.000€ - 150.000.000€" anzeigen. Es gibt keine Warnung bei unplausiblen Werten (z.B. > 500 m²).
- **Impact:** Falsche Ergebnisse untergraben das Vertrauen in den Rechner und damit in das Unternehmen. Extremwerte koennen das Layout brechen (sehr lange Zahlen).
- **Empfehlung:** Sinnvolle `max`-Werte setzen (z.B. max="99.9" fuer Laenge/Breite). Eine Validierungsmeldung bei unplausiblen Werten zeigen: "Fuer Projekte ueber 200 m² empfehlen wir eine persoenliche Beratung."
- **Zustaendiger Agent:** Web UI Designer

---

### [F-015] Process-Section: CTA-Link ist `<a href="/kontakt">` statt `<Link>`

- **Severity:** 2
- **Heuristik:** H7 (Flexibilitaet und Effizienz), Performance
- **Plattform:** Web
- **Location:** `src/components/sections/Process.tsx`, Zeile 122
- **Beschreibung:** Der CTA-Button in der Process-Section nutzt `<a href="/kontakt">` statt Next.js `<Link href="/kontakt">`. Das fuehrt zu einem vollstaendigen Seitenneuladen statt client-seitiger Navigation. Identisches Problem in `FAQ.tsx` (Zeile 104: `<Link>` wird korrekt verwendet, aber der `<a href="tel:">` Zeile 110 ist korrekt).
- **Impact:** Unnoetige Ladezeit und schlechtere UX durch Full-Page-Reload statt SPA-Navigation.
- **Empfehlung:** `<a href="/kontakt">` durch `<Link href="/kontakt">` ersetzen.
- **Zustaendiger Agent:** Web UI Designer

---

### [F-016] BathroomRenovationCalculator: Keine Fortschrittsanzeige beim ersten Laden

- **Severity:** 2
- **Heuristik:** H1 (Sichtbarkeit des Systemstatus), H6 (Wiedererkennung)
- **Plattform:** Web
- **Location:** `src/components/features/BathroomRenovationCalculator.tsx`
- **Beschreibung:** Der 6-Schritt-Rechner zeigt einen sauberen Progress-Balken. Jedoch: Wenn der Nutzer Schritt 1 abschliesst und auf "Weiter" klickt, aendert sich der Slide-Inhalt per Animation. Es gibt keine Zusammenfassung der bisherigen Auswahl waehrend des Prozesses. Bei Schritt 5 erinnert sich der Nutzer moeglicherweise nicht mehr an seine Auswahl aus Schritt 1.
- **Impact:** Nutzer muessen sich ihre bisherigen Entscheidungen merken. Bei 6 Schritten entsteht kognitive Last.
- **Empfehlung:** Eine kompakte "Bisher ausgewaehlt"-Sidebar oder eine Step-Zusammenfassung unterhalb des Progress-Balkens einfuegen, die die bereits getroffenen Entscheidungen anzeigt.
- **Zustaendiger Agent:** Web UI Designer, Interaction Designer

---

### [F-017] Fehlende `aria-label` auf Icon-only Buttons im Testimonials-Slider (Mobile)

- **Severity:** 2
- **Heuristik:** Accessibility WCAG 4.1.2
- **Plattform:** Web (Mobile)
- **Location:** `src/components/sections/Testimonials.tsx`, Zeilen 134-148
- **Beschreibung:** Die mobilen Navigation-Buttons des Testimonial-Sliders haben zwar `aria-label`-Attribute ("Vorherige Bewertung", "Naechste Bewertung"), aber es fehlt `aria-label` fuer die Dot-Indikatoren (Zeilen 153-162). Diese Buttons haben nur ein `aria-label="Gehe zu Bewertung {index + 1}"` – was korrekt ist. Jedoch koennen sie durch ihre Groesse (8x8px) gegen Touch-Target-Anforderungen verstossen.
- **Impact:** Die Dot-Buttons (8x8px = 0.5rem x 0.5rem) sind deutlich kleiner als das empfohlene Mindest-Touch-Target von 44x44px. Auf Mobile fast nicht antippbar.
- **Empfehlung:** Touch-Target der Dot-Buttons durch `padding` auf mindestens 44x44px ausweiten, auch wenn der sichtbare Punkt kleiner bleibt: `p-5 -m-5` oder ein unsichtbares `::before`-Pseudo-Element.
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer, Web UI Designer

---

### [F-018] Seitenlang scrollbare One-Pager: Keine Sektions-Ankerpunkte

- **Severity:** 2
- **Heuristik:** H3 (Nutzerkontrolle und Freiheit), H7 (Flexibilitaet und Effizienz)
- **Plattform:** Web
- **Location:** `src/app/page.tsx`, alle Sections
- **Beschreibung:** Die Startseite hat 13 Sections untereinander. Viele CTA-Buttons verlinken auf `#contact`, aber nur ein Anchor (`<Contact>`) existiert mit diesem Hash. Die CostCalculator- und BathroomCalculator-CTAs (`href="#contact"`) springen zur Contact-Section per Anchor. Die anderen Sections (Services, Portfolio, Testimonials etc.) haben keine IDs. Nutzer koennen nicht direkt zu einem Abschnitt navigieren.
- **Impact:** Nutzer, die einen Link zu "Referenzen" teilen moechten, koennen dies nicht. Wiederkehrende Nutzer muessen immer von oben scrollen.
- **Empfehlung:** Jeder Haupt-Section eine eindeutige `id` geben: `<section id="leistungen">`, `<section id="referenzen">` etc. Die Navigationslinks entsprechend auf Anchor-Links aendern (oder beibehalten als Subpage-Links).
- **Zustaendiger Agent:** Information Architect, Web UI Designer

---

### [F-019] Kontaktformular: `<select>` Design inkonsistent mit Input-Komponente

- **Severity:** 2
- **Heuristik:** H4 (Konsistenz und Standards)
- **Plattform:** Web
- **Location:** `src/components/sections/Contact.tsx`, Zeilen 132-147
- **Beschreibung:** Das Service-Select-Feld ist inline hartcodiert und nicht der wiederverwendbaren `Input`-Komponente nachempfunden. Es verwendet `focus-visible:outline-hidden focus-visible:ring-2` statt der `focus-visible:ring-offset-1` Konsistenz. Es fehlt der Error-State (kein `error`-Prop moeglich wie beim Input), der benutzerdefinierte `option value=""` ist semantisch schlechter als `disabled selected hidden`.
- **Impact:** Inkonsistentes visuelle Erscheinungsbild zwischen Input-Feldern und Select-Feld. Unterschiedliche Fehlerbehandlung.
- **Empfehlung:** Eine wiederverwendbare `Select`-Komponente analog zu `Input.tsx` erstellen. Das `option value=""` mit `disabled selected hidden` versehen, um Browser-Fallback-Verhalten zu verbessern.
- **Zustaendiger Agent:** Web UI Designer

---

### [F-020] ChatBot: Kein Datenschutzhinweis vor erstem AI-Einsatz

- **Severity:** 2
- **Heuristik:** H10 (Hilfe und Dokumentation), Legal/DSGVO
- **Plattform:** Web
- **Location:** `src/components/features/ChatBot.tsx`
- **Beschreibung:** Der ChatBot sendet Nachrichten direkt an `/api/chat` (AI-Backend). Bevor der erste externe API-Call (z.B. OpenAI) erfolgt, gibt es keinen Datenschutzhinweis fuer den Nutzer. Im Hero-Bereich gibt es einen `title`-Hinweis beim WhatsApp-Button ("Datenuebermittlung an Meta/USA"), aber beim AI-Chatbot fehlt dieser vollstaendig.
- **Impact:** DSGVO-Risiko: Die Verarbeitung von Nutzernachrichten durch einen AI-Dienst (Drittanbieter) ohne vorherige Information ist rechtlich problematisch.
- **Empfehlung:** Vor dem ersten Absenden einer Nachricht einen kurzen Hinweis anzeigen: "Ihr Chat wird durch einen KI-Dienst verarbeitet. Details in unserer Datenschutzerklaerung." Oder die Quick-Actions-Sektion um einen Hinweis ergaenzen.
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer (DSGVO-Konformitaet), Copywriter

---

### [F-021] Logo ist `<h1>` im Header auf allen Unterseiten

- **Severity:** 2
- **Heuristik:** Accessibility, Semantik
- **Plattform:** Web
- **Location:** `src/components/layout/Header.tsx`, Zeile 47
- **Beschreibung:** Das Logo im Header rendert ein `<h1>`-Element ("Fliesenleger Muenchen") auf allen Seiten, auch auf Unterseiten (Kontakt, Leistungen etc.). Auf der Startseite gibt es ausserdem ein `<h1>` in der Hero-Section. Jede Seite sollte genau ein `<h1>` haben. Auf Unterseiten wie `/kontakt` konkurriert das Header-`<h1>` mit dem echten Seiten-`<h1>` ("In 48 Stunden wissen Sie...").
- **Impact:** Doppeltes `<h1>` auf Unterseiten verwirrt Screen-Reader und schadet der SEO-Hierarchie.
- **Empfehlung:** Den Logo-Text im Header von `<h1>` auf `<span>` oder `<p>` aendern, da das Logo als Navigation-Element gilt, nicht als Seiten-Ueberschrift.
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer, Information Architect

---

### [F-022] CostCalculator: Kein Hinweis auf MwSt. in der Kostenschaetzung

- **Severity:** 2
- **Heuristik:** H2 (Uebereinstimmung mit realer Welt), H5 (Fehlervermeidung)
- **Plattform:** Web
- **Location:** `src/components/features/CostCalculator.tsx`, Ergebnisanzeige
- **Beschreibung:** Die Service-Karten in `Services.tsx` zeigen Preise "inkl. MwSt." (z.B. "ab 45 €/m² inkl. MwSt."). Der Kostenrechner zeigt Gesamtkosten ohne MwSt.-Angabe. Die Preise im Rechner sind Material + Arbeit, aber ohne den Vermerk ob sie netto oder brutto sind.
- **Impact:** Preiserwartungen der Nutzer koennen deutlich von der Realitaet abweichen, wenn 19% MwSt. nicht einkalkuliert ist. Vertrauensverlust bei der Angebotspraesentation.
- **Empfehlung:** Einen MwSt.-Hinweis in die Ergebnisanzeige aufnehmen: "zzgl. / inkl. 19% MwSt." Entweder die Preise im Rechner als Brutto oder Netto klar kennzeichnen.
- **Zustaendiger Agent:** Copywriter, Web UI Designer

---

### [F-023] Testimonials-Slider hat keinen automatischen Pause-Mechanismus

- **Severity:** 1
- **Heuristik:** Accessibility WCAG 2.2.2 (Pause, Stop, Hide)
- **Plattform:** Web
- **Location:** `src/components/sections/Testimonials.tsx`
- **Beschreibung:** Der Slider hat derzeit kein Auto-Advance (kein Timer), daher ist WCAG 2.2.2 noch nicht verletzt. Wenn ein Auto-Advance spaeter implementiert wird (was sinnvoll waere), muss eine Pause-Funktion vorgesehen werden.
- **Impact:** Zukuenftige Implementierung koennte Accessibility-Fehler einfuehren.
- **Empfehlung:** Wenn Auto-Advance implementiert wird: `prefers-reduced-motion`-Media-Query respektieren und einen sichtbaren Pause-Button vorsehen.
- **Zustaendiger Agent:** Interaction Designer

---

### [F-024] TileConfigurator: Farbvorschau-Swatch vermittelt falsche Erwartungen

- **Severity:** 1
- **Heuristik:** H2 (Uebereinstimmung mit realer Welt)
- **Plattform:** Web
- **Location:** `src/components/features/TileConfigurator.tsx`, Preview-Bereich
- **Beschreibung:** Der Tile-Konfigurator zeigt eine vereinfachte 2D-Vorschau mit Solid-Color-Feldern und einem CSS-Grid-Muster als Fugen. Dies vermittelt eine sehr vereinfachte visuelle Darstellung. Nutzer koennen glauben, das sieht so aus wie die echten Fliesen, obwohl Marmor, Granit etc. echte Textur-Bilder waeren.
- **Impact:** Ueberhohte oder fehlerhafte Erwartungen an das visuelle Ergebnis.
- **Empfehlung:** Einen Disclaimer zur Vorschau hinzufuegen: "Vereinfachte Darstellung – echte Muster weichen ab." Alternativ echte Texture-Bilder aus den `materials`-Bildpfaden nutzen.
- **Zustaendiger Agent:** Web UI Designer, Copywriter

---

### [F-025] Process-Section: Verbindungslinie nur auf Mobile korrekt

- **Severity:** 1
- **Heuristik:** H8 (Aesthetisches und minimalistisches Design)
- **Plattform:** Web (Desktop)
- **Location:** `src/components/sections/Process.tsx`, Zeile 65
- **Beschreibung:** Die vertikale Verbindungslinie (`absolute left-8 top-12 bottom-12 w-0.5 bg-border md:left-1/2 md:-translate-x-px`) soll auf Desktop in der Mitte positioniert werden. Da das alternating Layout aber die Cards nach links/rechts verschiebt, kann die Linie nicht immer korrekt durch alle Step-Kreise verlaufen, wenn das Viewport besonders breit oder schmal ist.
- **Impact:** Visuell leicht unsauber auf bestimmten Breakpoints.
- **Empfehlung:** Visuell pruefen und ggf. die Linie mit einem dezidiertem Container-Ansatz neu aufbauen.
- **Zustaendiger Agent:** Web UI Designer

---

### [F-026] Footer: Social-Media-Links ohne echte URLs

- **Severity:** 1
- **Heuristik:** H4 (Konsistenz und Standards)
- **Plattform:** Web
- **Location:** `src/components/layout/Footer.tsx`, Zeilen 133-150
- **Beschreibung:** Facebook- und Instagram-Icons verlinken auf `https://facebook.com` und `https://instagram.com` – also die Startseiten der Plattformen, nicht auf das Unternehmensprofil.
- **Impact:** Nutzer landen auf dem Facebook/Instagram-Login-Screen statt auf dem Unternehmensprofil.
- **Empfehlung:** Echte Profil-URLs eintragen oder die Icons entfernen wenn keine Social-Media-Praesenz existiert.
- **Zustaendiger Agent:** Copywriter

---

### [F-027] AvailabilityChecker: Verfuegbarkeit wird mit `Math.random()` generiert

- **Severity:** 1
- **Heuristik:** H5 (Fehlervermeidung), H2 (Uebereinstimmung mit realer Welt)
- **Plattform:** Web
- **Location:** `src/components/features/AvailabilityChecker.tsx`, Zeile 37
- **Beschreibung:** Die Slot-Verfuegbarkeit wird per `Math.random() > 0.4` (60% verfuegbar) generiert. Bei jedem Seitenaufruf und nach `useEffect` sind es andere Slots. Nutzer koennen dasselbe Datum ein zweites Mal aufrufen und andere Verfuegbarkeiten sehen.
- **Impact:** Inkonsistente Darstellung beim Reload. Nutzer sehen "10:30 verfuegbar", refreshen die Seite, und der Slot ist weg. Das wirkt unprofessionell und unverlasslich.
- **Empfehlung:** Entweder echte Kalender-API-Integration oder pseudozufaellige aber deterministische Slots (z.B. seeded by date) bis zur echten Implementierung.
- **Zustaendiger Agent:** Web UI Designer

---

### [F-028] Fehlende `lang`-Attribute fuer englische Begriffe in deutschem Text

- **Severity:** 1
- **Heuristik:** Accessibility WCAG 3.1.2
- **Plattform:** Web
- **Location:** Verschiedene Komponenten
- **Beschreibung:** Englische Begriffe wie "KI-Assistent", "Design Studio", "ChatBot" werden ohne `lang="en"` verwendet. Dies ist minor, da die Hauptsprache Deutsch (`lang="de"`) korrekt gesetzt ist und Screen-Reader diese Begriffe in der Regel korrekt vorlesen.
- **Impact:** Minimaler Accessibility-Impact, da es sich um gaengige Anglizismen handelt.
- **Empfehlung:** Bei wichtigen englischen Einschueben `lang="en"` setzen, z.B. `<span lang="en">Design Studio</span>`. Bei gaengigen Anglizismen kein dringender Handlungsbedarf.
- **Zustaendiger Agent:** Senior UX Accessibility Reviewer

---

## Plattform-Compliance: Web

### Compliance Score: 17/24 Kriterien

**Bestanden:**
- [x] Responsive Design (Mobile, Tablet, Desktop) - Tailwind Breakpoints vorhanden
- [x] Tastatur-Navigation moeglich - focus-visible Styles definiert
- [x] Skip-Links vorhanden - SkipLink-Komponente implementiert
- [x] Semantisches HTML (Headings, Landmarks) - grob vorhanden
- [x] Touch-Targets >= 44px (globale CSS-Regel in globals.css, Zeile 1575)
- [x] font-size: 16px auf Inputs (verhindert iOS-Zoom, globals.css Zeile 1621)
- [x] prefers-reduced-motion implementiert (globals.css Zeile 1524)
- [x] prefers-contrast: high unterstuetzt (globals.css Zeile 1866)
- [x] lang="de" gesetzt (layout.tsx Zeile 79)
- [x] Meta-Viewport korrekt (layout.tsx, viewport-Export)
- [x] userScalable: true (verhindert kein Zoomen)
- [x] font-display: swap (layout.tsx, Google Fonts)
- [x] Open Graph Tags vorhanden
- [x] Structured Data (LocalBusiness, Website Schema)
- [x] Focus-Ring-Management (focus:not(:focus-visible) ohne Outline)
- [x] Sr-only Klasse definiert

**Nicht bestanden / Eingeschraenkt:**
- [ ] **SkipLink Ziel existiert nicht** (F-007) - `#main-content` ID fehlt im `<main>`
- [ ] **Active-State in Navigation** fehlt (F-004) - kein aria-current
- [ ] **Alt-Texte fuer CSS-Hintergrundbilder** (F-008, F-009) - kein semantischer Alt-Text
- [ ] **WCAG Kontrast AA bei transparentem Header** (F-005) - potenzielles Problem
- [ ] **Doppeltes H1** auf Unterseiten (F-021)
- [ ] **Browser-Kompatibilitaet** - Tailwind CSS v4 + Next.js 16 sind sehr neu; Edge-Cases in aelteren Browsern nicht auszuschliessen
- [ ] **Dark Mode** - nicht unterstuetzt (kein `prefers-color-scheme: dark` Implementierung im Design-System)

---

## User Flow Validierung

### Flow 1: Hauptkonversion - Kontaktanfrage (Homepage -> Kontaktformular -> Absenden)

- **Status:** Teilweise bestanden
- **Happy Path:** Gut strukturiert. Hero-CTA -> /kontakt -> Formular -> Erfolgs-State
- **Issues:**
  - F-001: Kein Fehler-Feedback bei API-Fehler (Severity 4)
  - F-006: Keine Client-seitige Validierung (Severity 3)
  - F-011: Mobile CTAs im Hero eingeschraenkt (Severity 3)
  - F-018: Kein direkter Anchor zu #contact von anderen Sections (Severity 2)

### Flow 2: Kosteneinschaetzung - Kostenrechner -> Anfrage

- **Status:** Bestanden (mit Einschraenkungen)
- **Happy Path:** Kostenrechner berechnet korrekt, CTA-Link zu #contact vorhanden
- **Issues:**
  - F-014: Keine Eingabevalidierung fuer extreme Werte (Severity 2)
  - F-022: Fehlende MwSt.-Angabe (Severity 2)

### Flow 3: Terminbuchung - AvailabilityChecker -> Buchung

- **Status:** Nicht bestanden
- **Issues:**
  - F-003: Buchung loest keine echte Backend-Verarbeitung aus (Severity 4) - KRITISCH
  - F-027: Zufaellige Verfuegbarkeit (Severity 1)

### Flow 4: Badsanierung-Rechner -> Anfrage

- **Status:** Bestanden
- **Happy Path:** 6-Schritt-Wizard mit Progress-Bar, klarer CTA am Ende
- **Issues:**
  - F-016: Keine laufende Auswahl-Zusammenfassung (Severity 2)

### Flow 5: Design Studio -> Beratungsanfrage

- **Status:** Teilweise bestanden
- **Happy Path:** Konfigurator -> CTA "Beratung anfragen" -> #contact
- **Issues:**
  - F-010: Download/Share-Buttons nicht funktional (Severity 3)
  - F-024: Irrefoehrende Farbvorschau (Severity 1)

---

## Priorisierte Fix-Reihenfolge

### 1. Sofort fixen (Severity 4):

| Finding | Beschreibung | Zustaendiger Agent |
|---------|--------------|-------------------|
| F-001 | Kontaktformular: Kein Fehler-Feedback | Web UI Designer + Interaction Designer |
| F-002 | Platzhalterdaten im Produktions-Template | Copywriter + Web UI Designer |
| F-003 | Terminbuchung ohne API-Backend | Web UI Designer |

### 2. Bald fixen vor Go-Live (Severity 3):

| Finding | Beschreibung | Zustaendiger Agent |
|---------|--------------|-------------------|
| F-004 | Header: Kein Active-State in Navigation | Web UI Designer |
| F-005 | Transparenter Header: Kontrast-Problem | Web UI Designer |
| F-006 | Keine Client-seitige Formularvalidierung | Web UI Designer + Interaction Designer |
| F-007 | SkipLink-Ziel `#main-content` fehlt | Senior UX Accessibility Reviewer |
| F-008 | Hero-Bild ohne Alt-Text (CSS-Hintergrund) | Senior UX Accessibility Reviewer + Web UI Designer |
| F-009 | Service-Bilder ohne Alt-Text | Senior UX Accessibility Reviewer + Web UI Designer |
| F-010 | TileConfigurator: Nicht-funktionale Buttons | Interaction Designer + Web UI Designer |
| F-011 | Mobile Hero: Telefon/WhatsApp ausgeblendet | Web UI Designer + Interaction Designer |

### 3. Einplanen (Severity 2):

| Finding | Beschreibung | Zustaendiger Agent |
|---------|--------------|-------------------|
| F-012 | Testimonials: Kein Touch-Swipe | Interaction Designer |
| F-013 | FAQ: Keine ARIA-Attribute (aria-expanded) | Senior UX Accessibility Reviewer |
| F-014 | Kostenrechner: Keine Eingabevalidierung | Web UI Designer |
| F-015 | Process-CTA: `<a>` statt `<Link>` | Web UI Designer |
| F-016 | Bad-Rechner: Keine Auswahl-Zusammenfassung | Web UI Designer + Interaction Designer |
| F-017 | Testimonials-Dots: Touch-Target zu klein | Senior UX Accessibility Reviewer + Web UI Designer |
| F-018 | Fehlende Sektions-Anker | Information Architect + Web UI Designer |
| F-019 | Select inkonsistent mit Input-Komponente | Web UI Designer |
| F-020 | ChatBot: Kein DSGVO-Hinweis | Senior UX Accessibility Reviewer + Copywriter |
| F-021 | Doppeltes H1 auf Unterseiten | Senior UX Accessibility Reviewer + Information Architect |
| F-022 | Kostenrechner: Fehlende MwSt.-Angabe | Copywriter + Web UI Designer |

### 4. Optional / Nice-to-have (Severity 1):

| Finding | Beschreibung | Zustaendiger Agent |
|---------|--------------|-------------------|
| F-023 | Testimonials: Pause-Mechanismus fuer zuk. Auto-Advance | Interaction Designer |
| F-024 | TileConfigurator: Falsche Erwartungen durch Farbvorschau | Web UI Designer + Copywriter |
| F-025 | Process-Section: Verbindungslinie visuell pruefen | Web UI Designer |
| F-026 | Footer: Social-Links ohne echte URLs | Copywriter |
| F-027 | AvailabilityChecker: Math.random() | Web UI Designer |
| F-028 | Fehlende lang-Attribute fuer Anglizismen | Senior UX Accessibility Reviewer |

---

## Besondere Staerken des Designs (Positive Findings)

Diese Elemente sind gut umgesetzt und sollten beibehalten werden:

1. **Dreifach-Garantie-System**: Klar kommuniziert, konsistent durch alle Sektionen (Hero, Guarantees, FAQ, Process). Hoher Trust-Building-Effekt.
2. **StickyContactBar Mobile**: Sehr gut umgesetzt - drei Kontaktmoeglichkeiten (Telefon, WhatsApp, E-Mail) immer erreichbar.
3. **AvailabilityIndicator**: Urgency-Signal vor dem Formular ist psychologisch effektiv und gut implementiert.
4. **Design-System**: Umfangreich, konsistent (tokens.ts, globals.css, Tailwind v4). Gute Grundlage.
5. **prefers-reduced-motion**: Vollstaendig implementiert in globals.css - vorbildlich.
6. **Mehrere Rechner und Konfiguratoren**: Engagieren den Nutzer aktiv und reduzieren die Einstiegsschwelle zum Kontakt.
7. **Before/After-Slider im Portfolio**: Zeigt konkreten Mehrwert - sehr ueberzeugend fuer die Zielgruppe.
8. **Process-Section**: Klarer 5-Schritt-Prozess reduziert Unsicherheit beim Nutzer ("Was passiert nach meiner Anfrage?").
9. **FAQ-Positionierung**: Direkt vor dem Kontaktformular - entfernt letzte Einwaende before conversion.
10. **WhatsApp-Integration**: An mehreren Touchpoints (Hero, StickyBar, Contact) konsistent integriert.
