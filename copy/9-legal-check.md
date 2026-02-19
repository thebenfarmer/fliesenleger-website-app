# LEGAL CHECK: Fliesenleger-Meisterbetrieb Muenchen

**Phase:** 9 - Legal Review
**Datum:** 2026-02-18
**Pruefgegenstand:** Finale Copy (Phase 8) + Offer-Definition (Phase 3)
**Hinweis:** Dieser Report ersetzt keine Rechtsberatung. Fuer rechtsverbindliche Einschaetzungen konsultieren Sie einen Fachanwalt fuer Wettbewerbs- und IT-Recht.

---

## TEIL 1: LEGAL REPORT

---

### BEREICH 1: WERBERECHT (UWG)

---

#### FUND 1.1 -- Alleinstellungsbehauptung "kein anderer Fliesenleger"

**Stelle im Text** (Sektion 11, Guarantees, Section-Sub):
> "Kein anderer Fliesenleger in Muenchen bietet Ihnen diese drei Garantien in Kombination."

**Risiko-Level:** MUST-FIX

**Rechtsgrundlage:** § 5 Abs. 1 UWG (Irrefuehrende Werbung); Alleinstellungsbehauptungen-Doktrin des BGH (st. Rspr.)

**Problem:**
Eine Alleinstellungsbehauptung ("kein anderer") ist nach der staendigen Rechtsprechung des BGH nur zulassig, wenn sie nachweislich zutreffend ist, der Vorsprung gegenueber Mitbewerbern erheblich ist und eine gewisse Stetigkeit erwarten laesst. Bei 284-569 Fliesenlegern in Muenchen (eigene Angabe aus Phase 1) ist es nicht nachweisbar, dass tatschlich kein einziger Mitbewerber eine vergleichbare Dreifach-Garantie anbietet. Eine solche Marktrecherche bei hunderten Wettbewerbern ist faktisch nicht durchfuehrbar und nicht belastbar. Das Abmahnrisiko durch Wettbewerbsvereinigungen oder einzelne Mitbewerber ist erheblich.

**Alternative Formulierung:**
```
STATT: "Kein anderer Fliesenleger in Muenchen bietet Ihnen diese drei Garantien in Kombination."

BESSER: "Nur wenige Fliesenleger in Muenchen bieten Ihnen diese drei Garantien in Kombination."

ODER (staerker, aber abgesicherter): "Ein Garantie-System, das in dieser Kombination selten ist: Festpreis, 30-Tage-Zufriedenheit und 5-Jahre-Vollgarantie -- auf jedes Projekt."

ODER (risikofrei): "Drei Garantien, eine Aussage: Ihr Risiko bei uns ist Null."
```

Stand: 02/2026 | Rechtsquelle: § 5 UWG; BGH-Rspr. zur Alleinstellungswerbung

---

#### FUND 1.2 -- Aussage "500+ Projekte" und "25+ Jahre"

**Stelle im Text** (Sektion 1 Hero, Sektion 2 Trust Badges, durchgaengig):
> "500+ Projekte in Muenchen"
> "25+ Jahre Erfahrung"
> "Meisterbetrieb seit 1998"

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 5 Abs. 1 UWG (Irrefuehrende Angaben ueber wesentliche Merkmale)

**Problem:**
Die Zahlen muessen intern dokumentiert und im Streitfall nachweisbar sein. "500+" ist als Mindestangabe formuliert, was das Risiko reduziert. Da es sich um eine Template-Website handelt, bei der die tatsaechliche Firmengrunddaten noch eingetragen werden muessen, ist sicherzustellen, dass bei Inbetriebnahme die echten Zahlen verwendet werden. Werden die Template-Zahlen unveraendert uebernommen und stimmen nicht, liegt eine unwahre Tatsachenbehauptung vor.

**Empfehlung:**
Vor Launch: Interne Dokumentation anlegen (Auftragsliste, Buchungshistorie). Zahlen nur mit nachweisbarer Grundlage verwenden. "500+" ist dann unbedenklich, wenn nachweislich mindestens 500 abgeschlossene Projekte vorliegen. Die Geogruendung muss auf das tatsaechliche Gruendungsjahr angepasst werden.

Stand: 02/2026 | Rechtsquelle: § 5 Abs. 1 Nr. 1 UWG

---

#### FUND 1.3 -- Google-Bewertung "4.9/5.0 bei 182 Rezensionen"

**Stelle im Text** (Sektion 2 Trust Badges, Sektion 9 Testimonials, mehrfach):
> "4.9 von 5.0 Sternen bei 182 Google-Bewertungen"
> "4.9/5.0 bei 182 Google-Bewertungen"

**Risiko-Level:** MUST-FIX

**Rechtsgrundlage:** § 5b Abs. 3 UWG (seit UWG-Novelle Mai 2022); § 5 Abs. 1 UWG

**Problem:**
Zwei separate Anforderungen:

1. **Aktualitaet:** Bewertungsangaben veralten schnell. Wenn die angegebene Bewertung zum Zeitpunkt des Besuchs nicht mehr dem aktuellen Stand entspricht, liegt eine irrefuehrende Angabe vor. Eine statische Zahl ("182") wird zwangslaeufig veralten.

2. **Verifikationspflicht nach § 5b Abs. 3 UWG:** Wer auf seiner Website Bewertungen zugaenglich macht oder damit wirbt, muss seit Mai 2022 darauf hinweisen, ob und wie er prueft, dass Bewertungen von echten Kunden stammen. Bei der blossen Wiedergabe von Google-Bewertungen ist eine Quellenangabe und ein Hinweis auf die Pruefmethode erforderlich oder es muss klar sein, dass es sich um direkte Google-Daten handelt.

**Alternative Formulierung:**
```
MUST: Den Wert dynamisch aus dem Google-Profil einbinden (API oder Widget) statt als Festwert.

FALLS statisch: "4.9/5.0 bei Google-Bewertungen (Stand: [Monat/Jahr], Quelle: Google Maps)"

UND: Verlinkung auf das aktuelle Google-Profil direkt neben der Angabe (bereits vorhanden: "Alle 182 Bewertungen auf Google ansehen" -- das verbleibt, aber die Zahl 182 muss entweder dynamisch oder mit Datumsstempel sein).

PLUS Hinweis-Formulierung (z.B. im Datenschutzhinweis oder Footer):
"Die angezeigten Google-Bewertungen stammen aus dem oeffentlichen Google-Unternehmensprofil. Google prueft Bewertungen auf Verstoss gegen seine Richtlinien. Eine individuelle Verifikation durch uns findet nicht statt."
```

Stand: 02/2026 | Rechtsquelle: § 5b Abs. 3 UWG; UWG-Novelle 2022

---

#### FUND 1.4 -- "Kein einziger Garantiefall in 25 Jahren"

**Stelle im Text** (Sektion 11 Guarantees, Garantie-Karte 3):
> "Seit 1998 hatten wir keinen einzigen Garantiefall, der auf unsere Verlegearbeit zurueckzufuehren war."

**Risiko-Level:** MUST-FIX (bei Template) / EMPFEHLUNG (bei realem Betrieb)

**Rechtsgrundlage:** § 5 Abs. 1 Nr. 1 UWG

**Problem:**
Diese Aussage ist eine konkrete Tatsachenbehauptung, die im Streitfall vollstaendig beweisbar sein muss. Da es sich um eine Template-Website handelt, ist diese Aussage per Definition nicht belegbar -- sie ist erfunden. Wird die Website als Template mit diesen Aussagen betrieben (oder als Demo gezeigt), ohne dass ein realer Betrieb dahintersteckt, ist das eine nachweislich falsche Tatsachenbehauptung.

Bei Verwendung durch einen realen Betrieb: Die Aussage muss intern dokumentiert sein (keine Beschwerden/Garantiefaelle aktenkundig). Die Einschraenkung "der auf unsere Verlegearbeit zurueckzufuehren war" ist wichtig, da sie Materialfehler o.ae. ausschliesst -- diese Praezisierung ist gut und sollte bleiben.

**Empfehlung:**
Fuer Template/Demo: Klarer Hinweis im Demo-Modus, dass Zahlen Platzhalter sind (bereits im README vorhanden laut Commit-History). Fuer produktiven Einsatz: Interner Nachweis vor Veroeffentlichung sicherstellen. Formulierung mit Einschraenkung "nach aktuellem Kenntnisstand" absichern.

**Alternative Formulierung (abgesichert):**
```
"Seit 1998 ist uns kein Garantiefall bekannt, der nachweislich auf unsere Verlegearbeit zurueckzufuehren war. Das zeigt: Unsere 5-Jahre-Garantie ist kein Risiko fuer uns -- sondern ein Zeichen unserer Ueberzeugung."
```

Stand: 02/2026 | Rechtsquelle: § 5 Abs. 1 Nr. 1 UWG

---

#### FUND 1.5 -- "Standard-Bad in 5-7 Tagen" ohne Einschraenkung

**Stelle im Text** (Sektion 1 Hero Feature Badge, Sektion 5 Process Schritt 4):
> "Standard-Bad in 5-7 Tagen"
> "5-7 Werktage (Standard-Bad)"

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 5 Abs. 1 UWG

**Problem:**
Die Zeitangabe "5-7 Tagen" als Feature-Badge im Hero ist ohne Einschraenkung. Was ist ein "Standard-Bad"? Welche Quadratmeter, welche Ausstattung? Wenn ein Kunde ein Bad beauftragt, das er als "Standard" einordnet, und es dauert 12 Tage, koennte er sich auf diese Werbeaussage berufen.

Die praezisere Formulierung in Sektion 5 ("5-7 Werktage (Standard-Bad)") ist besser. Im Hero-Badge fehlt die Werktage-Praezisierung.

**Alternative Formulierung:**
```
STATT: "Standard-Bad in 5-7 Tagen"

BESSER: "Standard-Bad in 5-7 Werktagen*"
MIT FUSSNOTE: "*Standardbad ca. 6-8 m2, Standard-Ausstattung. Individueller Zeitplan nach Vor-Ort-Beratung."

ODER (ohne Fussnote, aber mit Kontext): "Standard-Bad in 5-7 Werktagen -- Zeitplan schriftlich festgehalten"
```

Stand: 02/2026 | Rechtsquelle: § 5 Abs. 1 UWG

---

#### FUND 1.6 -- Vergleichende Angabe "150% mehr als gesetzlich"

**Stelle im Text** (Sektion 11 Guarantees, Garantie-Karte 3):
> "Material und Arbeit. 150% mehr als gesetzlich."

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 6 UWG (Vergleichende Werbung); § 5 UWG

**Problem:**
Die Prozentzahl ist mathematisch korrekt (5 Jahre vs. 2 Jahre Gewährleistung = 150% der gesetzlichen Pflichtdauer laenger), aber sie ist vereinfacht dargestellt. Vergleichende Werbung ist nach § 6 UWG grundsaetzlich erlaubt, wenn sie nicht irrefuehrend ist. Der Vergleich impliziert, dass die gesetzliche Gewährleistung nur 2 Jahre betraegt -- was fuer Werkvertraege (nach § 634a BGB) grundsaetzlich korrekt ist. Allerdings:

1. Der Satz "5 Jahre statt 2" in anderen Textstellen ist praeziser.
2. "150% mehr" kann ohne Kontext missverstanden werden (150% vom Gesamtwert statt 150% Mehrwert).
3. Im Context-Satz wird nicht explizit unterschieden zwischen gesetzlicher GEWAEHRLEISTUNG (2 Jahre, BGB-Pflicht) und der freiwilligen GARANTIE (5 Jahre).

**Alternative Formulierung:**
```
STATT: "150% mehr als gesetzlich"

BESSER: "5 Jahre statt der gesetzlich vorgeschriebenen 2 -- 150% laenger abgesichert"

ODER: "Gesetzliche Pflicht: 2 Jahre. Unser Versprechen: 5 Jahre."
```

Stand: 02/2026 | Rechtsquelle: § 6 UWG

---

#### FUND 1.7 -- Immobilienwert-Argument und Wertsteigerungsversprechen

**Stelle im Text** (Sektion 10b, neu eingefuegt):
> "Ein modernes Bad steigert den Immobilienwert um 5-10% -- bei einer 600.000-EUR-Wohnung sind das 30.000 bis 60.000 EUR."
> "Rechnen Sie selbst: 18.000 EUR investiert, bis zu 60.000 EUR Wertsteigerung."

**Risiko-Level:** MUST-FIX

**Rechtsgrundlage:** § 5 Abs. 1 Nr. 1 UWG; § 5a UWG (Irrefuehrung durch Unterlassen)

**Problem:**
Wertsteigerungsversprechen fuer Immobilien sind besonders sensibel. Der Immobilienmarkt ist standort-, objekt- und zeitabhaengig. Die Behauptung "5-10% Wertsteigerung" als generelle Angabe:

1. Ist nicht mit Quellenangabe belegt.
2. Klingt wie eine Renditeprognose, obwohl der Betrieb kein Finanzberater ist.
3. Die Formulierung "bis zu 60.000 EUR Wertsteigerung" in Kombination mit "Rechnen Sie selbst" erweckt den Eindruck einer verlässlichen Prognose.

Gutachter, Makler und Sachverstaendige streiten ueber den tatsaechlichen Einfluss eines Bads auf den Immobilienwert -- eine Badsanierung allein ergibt nicht automatisch 5-10% Wertsteigerung.

**Alternative Formulierung:**
```
STATT: "Ein modernes Bad steigert den Immobilienwert um 5-10%"

BESSER: "Laut Studien von Immobilienexperten kann ein modernisiertes Bad den Verkaufspreis einer Wohnung positiv beeinflussen. Gutachter schaetzen den Wertbeitrag je nach Lage und Objekt auf typischerweise mehrere Tausend Euro."

ODER (mit Quellenangabe, wenn belegt):
"Laut [Quelle, z.B. Immobilienverband Deutschland / Studie XY] erhoehen Badsanierungen den Immobilienwert im Schnitt um [X%] (Quelle: [Name, Jahr])."

STATT: "Rechnen Sie selbst: 18.000 EUR investiert, bis zu 60.000 EUR Wertsteigerung."

BESSER: "Viele Eigenheimbesitzer berichten, dass eine Badsanierung beim Wiederverkauf deutlich zum Preis beigetragen hat. Wie viel, haengt von Ihrem Objekt ab -- Ihr Makler kann das individuell einschaetzen."

PFLICHTFORMULIERUNG ERGANZEN: "Hinweis: Immobilienwertangaben sind Erfahrungswerte und keine individuelle Finanz- oder Investitionsberatung. Sprechen Sie fuer Ihre spezifische Situation mit einem Immobiliengutachter."
```

Stand: 02/2026 | Rechtsquelle: § 5 Abs. 1 Nr. 1 UWG

---

#### FUND 1.8 -- Materialpreis-Urgency-Argument

**Stelle im Text** (Sektion 14 Contact, P.S.):
> "Materialpreise steigen branchenweit weiter."

**Risiko-Level:** OK

**Rechtsgrundlage:** § 5 UWG

**Begruendung:**
Die Formulierung ist als allgemeine Tendenz dargestellt, ohne konkrete Prozentzahlen oder einen bestimmten Zeitraum. Die Offer-Definition (Phase 3) sieht ausdrucklich vor: "Keine konkreten Prozentzahlen nennen, es sei denn belegt." Dieser Grundsatz wird eingehalten. Die Aussage ist eine zulassige, allgemeine Marktbeschreibung, die nicht irreführend ist.

---

### BEREICH 2: PREISANGABENVERORDNUNG (PAngV)

---

#### FUND 2.1 -- Ab-Preise ohne MwSt-Hinweis

**Stelle im Text** (Sektion 3 Services, alle Service-Karten; Sektion 11 Offer-Definition):
> "ab 45 EUR/m2"
> "ab 38 EUR/m2"
> "ab 85 EUR/m2"
> "ab 65 EUR/m2"
> "ab 52 EUR/m2"
> "ab 15.000 EUR"

**Risiko-Level:** MUST-FIX

**Rechtsgrundlage:** § 3 Abs. 1 PAngV (neue Fassung seit 28.05.2022)

**Problem:**
Gemaess § 3 Abs. 1 PAngV muss bei Preisangaben gegenueber Verbrauchern (B2C) der Gesamtpreis einschliesslich Umsatzsteuer und aller sonstigen Preisbestandteile angegeben werden. Reine Netto-Preisangaben ohne MwSt-Hinweis sind gegenueber Verbrauchern unzulaessig. Da die Website primaer an Privatpersonen (Verbraucher) richtet -- Eigenheimbesitzer, nicht Gewerbetreibende als Mehrheit -- gilt dies fuer alle Preisangaben.

Zwei Loesungsmoeglichkeiten:

a) Die Preise sind Bruttopreise (inkl. 19% MwSt) -- dann muss dies explizit angegeben werden: "ab 45 EUR/m2 inkl. MwSt."

b) Die Preise sind Nettopreise -- dann muessen sie als Bruttopreise angegeben oder mit "zzgl. gesetzlicher MwSt." erlaeutert werden, was bei B2C-Werbung aber nicht ausreicht: Gegenueber Verbrauchern muss der Bruttopreis angegeben werden.

**Alternative Formulierung:**
```
PFLICHT (Variante A -- Bruttopreise):
"ab 45 EUR/m2 (inkl. MwSt., Material und Verlegung)"

PFLICHT (Variante B -- mit Zusatz):
Fussnotenhinweis bei allen Preisen: "*Preise inkl. 19% gesetzlicher Mehrwertsteuer"

BEI PREISSPANNEN (Badsanierung):
"15.000 EUR bis 25.000 EUR (inkl. MwSt., Komplettbad schluesselfertig)"
```

Stand: 02/2026 | Rechtsquelle: § 3 Abs. 1 PAngV (Fassung ab 28.05.2022)

---

#### FUND 2.2 -- Preisspanne Badsanierung "15.000-25.000 EUR"

**Stelle im Text** (Sektion 3 Services, Service 5 Badezimmer):
> "ab 15.000 EUR" (in der Startseite)

**Stelle im Offer** (Phase 3):
> "Badsanierung Standard: 15.000-25.000 EUR"
> "Badsanierung Premium: 25.000-40.000+ EUR"

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 3 PAngV; § 5 UWG

**Problem:**
Die Startseite zeigt nur "ab 15.000 EUR", was als ab-Preis korrekt bezeichnet ist. Die Offer-Definition zeigt die Spanne 15.000-40.000+ EUR. Preisspannen sind grundsaetzlich zulassig, wenn klar ist, was den Preis bestimmt. Das Gleiche gilt fuer Beispielrechnungen:

Die "18.000 EUR" als Beispiel fuer Berechnungen (Pro-Tag-Rechnung: 2,47 EUR/Tag) koennen beim Verbraucher den Eindruck erwecken, dass 18.000 EUR ein typischer Preis ist, nicht nur ein Rechenbeispiel. Wenn ein Verbraucher anfraegt und ein Angebot von 32.000 EUR erhaelt, koennte er sich auf die Websitekommunikation berufen.

**Empfehlung:**
```
Bei Rechenbeispielen immer kennzeichnen:
"Rechenbeispiel: Eine Badsanierung fuer 18.000 EUR* entspricht..."
"*Tatsaechliche Kosten abhaengig von Raumgroesse, Material und Ausstattung. Verbindlicher Preis nach kostenloser Vor-Ort-Beratung."
```

Stand: 02/2026 | Rechtsquelle: § 3 PAngV; § 5 UWG

---

#### FUND 2.3 -- Pro-Tag-Rechnung "2,47 EUR pro Tag"

**Stelle im Text** (Sektion 10b, Sektion 14 Contact P.S.-Bereich):
> "2,47 EUR pro Tag ueber 20 Jahre Nutzung"

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 5 Abs. 1 UWG

**Problem:**
Die Berechnung (18.000 EUR / 365 Tage / 20 Jahre = 2,47 EUR) ist mathematisch korrekt und transparent. Die 20-jaehrige Nutzungsdauer ist eine Annahme, die aber fuer Fliesen realistisch ist und nicht als Garantie aufgefasst wird. Das Rechenmodell ist als Preisrelativierung zulassig. Empfehlung: Berechnungsgrundlage einmalig transparent machen.

**Empfehlung:**
```
Einmalig bei erster Verwendung hinzufuegen:
"(Berechnung: 18.000 EUR Beispielpreis / 365 Tage / 20 Jahre Nutzungsdauer = 2,47 EUR/Tag)"
```

Stand: 02/2026 | Rechtsquelle: § 5 UWG

---

#### FUND 2.4 -- Kostenrechner-Ergebnisse als "Schaetzungen"

**Stelle im Text** (Sektion 4 Cost Calculator; Sektion 11 Offer-Definition):
> "Unser Kalkulator gibt Ihnen eine erste Schaetzung -- kostenlos und unverbindlich."
> "Diese Schaetzung gibt Ihnen eine erste Orientierung. Ihren verbindlichen Festpreis erhalten Sie nach einer kostenlosen Vor-Ort-Beratung."

**Risiko-Level:** OK

**Rechtsgrundlage:** § 5 UWG; § 650 BGB (Verhaeltnis zum Kostenvoranschlag)

**Begruendung:**
Die doppelte Kennzeichnung als "Schaetzung" und "unverbindlich" in Kombination mit dem expliziten Hinweis auf den verbindlichen Festpreis nach Beratung ist korrekt. Es liegt kein Kostenvoranschlag nach § 650 BGB vor, da die Schrittreihenfolge klar ist. Diese Formulierung ist aus rechtlicher Sicht gut umgesetzt.

---

### BEREICH 3: GARANTIERECHT

---

#### FUND 3.1 -- Festpreis-Garantie ohne Ausnahmeregelung

**Stelle im Text** (Sektion 11 Garantie-Karte 1; Sektion 5 Process Schritt 3):
> "Angebotspreis = Endpreis. Punkt."
> "Sollten waehrend der Arbeiten unvorhergesehene Mehrkosten entstehen, tragen WIR sie -- nicht Sie."
> "Wenn wir waehrend der Arbeiten auf ein Problem stossen [...] informieren wir Sie transparent darueber. Aber Ihr Preis bleibt Ihr Preis."

**Risiko-Level:** MUST-FIX

**Rechtsgrundlage:** § 305 ff. BGB (AGB-Recht); § 650c BGB (Verguetungsanpassung); ARGE Baurecht: "Festpreisgarantie ist unwirksame Preisanpassungsklausel" (Urteil veröffentlicht)

**Problem:**
Das ist die rechtlich heikelste Einzelaussage der gesamten Copy. Die Frage, was eine "Festpreis-Garantie" im Werberecht bedeutet und was sie vertraglich abdeckt, ist nicht deckungsgleich.

Drei Risiken:

1. **Irrefuehrendes Versprechen:** Die Werbeaussage "Angebotspreis = Endpreis. Punkt." ist absolut formuliert. Wenn ein Kunde sich darauf bezieht und spaeter doch Mehrkosten entstehen -- z.B. weil er einen Leistungsmehrwunsch gestellt hat, oder weil sich herausstellt, dass der Untergrund eine voellig andere Abdichtung braucht als im Angebot kalkuliert -- kann er sich auf diese kategorische Werbeaussage berufen.

2. **Fehlende Ausnahmen:** Im Copy-Text wird zwar erwaehnt, dass "unvorhergesehene Mehrkosten" vom Betrieb getragen werden -- aber es fehlt eine klare Definition: Was ist "unvorhergesehen"? Aenderungswuensche des Kunden? Aenderungen am Leistungsumfang? Beschadigte Installationen die erst bei Demontage sichtbar werden?

3. **AGB-Wirksamkeit:** Wenn die Festpreis-Garantie in AGB geregelt werden soll, muss die Klausel der AGB-Kontrolle standhalten. Das ARGE Baurecht hat eine "Festpreisgarantie" in AGB als unwirksame Preisanpassungsklausel eingestuft, weil sie die Rechte des Auftragnehmers unverhältnismässig einschraenkt.

**Alternative Formulierung:**
```
STATT (absolut): "Angebotspreis = Endpreis. Punkt."

BESSER (praezis und rechtssicher):
"Angebotspreis = Endpreis. Fuer den vereinbarten Leistungsumfang -- ohne Wenn und Aber."

PLUS Erlaeuterungstext in der Garantie-Karte:
"Gilt fuer den im Angebot schriftlich definierten Leistungsumfang. Aenderungswuensche des Kunden oder bei der Arbeit erst sichtbar werdende, mit dem Kunden schriftlich vereinbarte Erweiterungen werden separat angeboten. Wir ueberraschen Sie nicht mit Nachforderungen -- wir sprechen vorher mit Ihnen."

EMPFEHLUNG: In den AGB (die noch zu erstellen sind) diesen Punkt klar und transparent definieren. Muster-Klausel durch einen Fachanwalt fuer Baurecht/Werkvertragsrecht pruefenlassen.
```

Stand: 02/2026 | Rechtsquelle: § 305 ff. BGB; § 650c BGB; ARGE Baurecht Urt. 2022

---

#### FUND 3.2 -- 30-Tage-Zufriedenheitsgarantie: Abgrenzung zur gesetzlichen Maengelrechten

**Stelle im Text** (Sektion 11 Garantie-Karte 2):
> "30 Tage nach Fertigstellung: Faellt Ihnen irgendetwas auf -- eine Fuge, eine Kante, ein Detail -- kommen wir zurueck und bessern kostenlos nach."
> "Auch fuer das kleinste Detail -- denn wenn Sie etwas stoert, stoert uns das auch."

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 634 ff. BGB (Gewaehrleistung beim Werkvertrag); § 479 BGB (Garantie)

**Problem:**
Die 30-Tage-Garantie geht ueber die reine Gewaehrleistungspflicht hinaus, insofern als sie auch subjektive Empfindungen des Kunden ("stoert") abdeckt. Das ist aus Customer-Service-Sicht exzellent, birgt aber ein rechtliches Risiko: Wenn "irgendetwas" und "das kleinste Detail" beanstandet werden koennen, auch ohne objektiven Mangel (also rein subjektive Unzufriedenheit), entsteht ein sehr weiter Anspruch.

Gleichzeitig ist die kostenlose Nachbesserung bei objektiven Maengeln innerhalb von 2 Jahren ohnehin gesetzliche Pflicht (§ 634 Nr. 1 BGB). Der Mehrwert der 30-Tage-Garantie ist die Ausdehnung auf subjektive Aspekte und die schnelle Reaktion (5 Werktage).

Dies muss aus rechtlicher Sicht klar definiert sein, damit kein Missverstaendnis ueber den Umfang entsteht.

**Empfehlung:**
```
Erlaeuterung erganzen (im Garantietext oder in den AGB/Garantiebedingungen):
"Die 30-Tage-Zufriedenheitsgarantie umfasst kostenlose Nachbesserung bei objektiven Maengeln sowie bei Ausfuehrungen, die nicht Ihrer berechtigten Erwartung nach dem Angebot entsprechen. Rein aesthetische Abweichungen, die vom vereinbarten Leistungsbild abweichen, sind einbegriffen."

Klarstellung auch: "Die gesetzlichen Maengelrechte (Gewaehrleistung nach BGB) bleiben hiervon unberuehrt und bestehen unabhaengig davon."
```

Stand: 02/2026 | Rechtsquelle: § 634 ff. BGB; § 479 BGB

---

#### FUND 3.3 -- 5-Jahre-Vollgarantie: Abgrenzung Garantie vs. Gewaehrleistung + Garantiebedingungen

**Stelle im Text** (Sektion 11 Garantie-Karte 3):
> "5 Jahre Vollgarantie auf Material UND Verlegearbeit. Nicht 2 Jahre wie gesetzlich vorgeschrieben -- sondern 5."
> "Gesetzlich vorgeschrieben sind 2 Jahre. Die meisten Betriebe bieten genau das und nicht mehr."

**Risiko-Level:** MUST-FIX

**Rechtsgrundlage:** § 479 BGB (Garantiebedingungen); Art. 246e EGBGB; § 5 UWG

**Problem:**
Drei separate Probleme:

1. **Fehler in der Rechtsgrundlage:** Die gesetzliche Gewaehrleistung beim Werkvertrag (§ 634a BGB) betraegt FUENF JAHRE fuer Bauwerke, nicht zwei Jahre. "2 Jahre wie gesetzlich vorgeschrieben" stimmt nur fuer Kaufvertraege (§ 438 BGB). Bei einem Werkvertrag fuer Fliesenverlegung als Teil eines Bauwerks koennte die gesetzliche Verjährungsfrist bereits 5 Jahre betragen. Dann wuerde die "5-Jahre-Vollgarantie" nichts ueber das gesetzliche Minimum hinausgehen.

   Hinweis: Die genaue Einordnung (Kauf- vs. Werkvertrag; ob Fliesen "Bauwerk" sind) ist im Einzelfall strittig. Fuer die reine Fliesenverlegung ohne Montage von Sanitaranlagen gilt in der Rechtsprechung meistens Werkvertragsrecht. Bei reinen Materialkaufvertraegen gilt Kaufrecht (2 Jahre). Die Aussage "2 Jahre gesetzlich" ist also vereinfachend und kann irrefuehren.

2. **Garantiebedingungen muessen in Textform vorliegen:** Gemaess § 479 BGB (seit Warenkaufrichtlinie 2022) muss der Garantiegeber dem Verbraucher die Garantiebedingungen spaetestens bei Lieferung in Textform (z.B. als PDF) zur Verfuegung stellen. Auf der Website muss entweder ein Link zu den vollstaendigen Garantiebedingungen vorhanden sein oder die Bedingungen muessen vollstaendig einsehbar sein.

3. **Was ist von der Garantie ausgeschlossen?** Die Copy nennt in der Offer-Definition: "Nicht abgedeckt: Mechanische Beschaedigung durch den Kunden, normale Abnutzung." Diese Ausnahmen muessen im oeffentlich zugaenglichen Garantietext stehen, nicht nur in der internen Offer-Definition.

**Alternative Formulierung + Massnahmen:**
```
ANPASSEN:
"5 Jahre Vollgarantie auf Material UND Verlegearbeit -- weit ueber unsere gesetzlichen Pflichten hinaus."

(Vermeidet die falsche "2-Jahre"-Aussage ohne Kontextverlust)

ODER MIT KORREKTEM KONTEXT:
"5 Jahre Vollgarantie als freiwillige Erweiterung: Was das Gesetz vorschreibt, halten wir fuer zu wenig. Deshalb garantieren wir Ihnen 5 Jahre -- unabhaengig davon, was gesetzlich gilt."

PFLICHT VOR LAUNCH:
- Garantiebedingungen als eigenstaendiges Dokument erstellen (PDF oder eigene Unterseite /garantie)
- Inhalt: Garantiegeber, Garantiedauer, abgedeckte Maengel, Ausschluesse (mechankische Beschaedigung, normale Abnutzung), Anspruchsvoraussetzungen, Reaktionszeit
- Link zu den Garantiebedingungen neben jeder Erwaehnung der 5-Jahre-Garantie
- Hinweis: "Gesetzliche Gewaehrleistungsrechte bleiben unberuehrt."
```

Stand: 02/2026 | Rechtsquelle: § 479 BGB; § 634a BGB; Warenkaufrichtlinie (EU) 2019/771

---

### BEREICH 4: TESTIMONIALS & BEWERTUNGEN

---

#### FUND 4.1 -- Fiktive Testimonials ohne Kennzeichnung

**Stelle im Text** (Sektion 9 Testimonials; alle 6 Testimonials):
> "Familie Meier, Schwabing" | "'Festpreis tatsaechlich der Endpreis -- auf den Cent genau.'"
> "Herr Keller, Bogenhausen" | "'Sechs Werktage. Exakt wie versprochen.'"
> "Frau Stadler, Haidhausen" | "'Man hat kaum gemerkt, dass gebaut wird.'"
> [weitere 3 Testimonials]

**Risiko-Level:** MUST-FIX (bei jeder Verwendung ohne Kennzeichnung)

**Rechtsgrundlage:** § 5 Abs. 1 Nr. 1 UWG; § 5b Abs. 3 UWG; OLG-Rspr. zur Scheinbewertung

**Problem:**
Die Testimonials sind laut Projektbeschreibung explizit fiktiv/beispielhaft (Template-Website). Das Verwenden fiktiver Testimonials ohne Kennzeichnung ist nach deutschem Recht eine schwerwiegende Wettbewerbsverletzung:

1. **Irrefuehrendes Testimonial:** Wer eine Person (auch mit veraendertem Namen) zitiert als ob sie ein realer Kunde waere, und diese Person nicht existiert oder das Zitat nicht so geaussert hat, begeht eine Irrefuehrungs-Handlung nach § 5 UWG.

2. **UWG-Novelle 2022:** Explizit neu in § 5b Abs. 3 UWG: Das Zugaenglichmachen von Verbraucherrezensionen ohne Hinweis auf Echtheit ist unlauter. Bei fiktiven Testimonials fehlt jede Grundlage der Echtheit.

3. **Abmahnrisiko:** Fake-Testimonials sind eines der haufigsten Abmahngruende im Online-Marketing. Bussgeld bis 300.000 EUR nach UWG moeglich.

**Loesungen:**
```
FUER DIE TEMPLATE-WEBSITE:
Alle Testimonials mit einem sichtbaren Platzhalter-Hinweis versehen:
"[MUSTER-TESTIMONIAL -- durch echte Kundenstimme zu ersetzen]"
ODER: Demo-Disclaimer direkt auf der Seite (nicht nur im README).

FUER DEN PRODUKTIVEN EINSATZ:
a) Nur echte Testimonials von identifizierbaren Kunden verwenden.
b) Schriftliche Einwilligung der Kunden einholen (Name, Zitat, ggf. Foto).
c) Eine Datei mit Einwilligungserklaerungen anlegen.
d) Wenn anonymisiert (z.B. "Familie M., Schwabing"): Betrieb muss das Original kennen und auf Anfrage nachweisen koennen.

FUER DIE MICRO-TESTIMONIALS NEBEN CTAs:
Gleiches gilt fuer alle kuerzen Zitate:
"'Festpreis tatsaechlich der Endpreis -- auf den Cent genau.' -- Familie Meier, Schwabing"
Diese sind besonders prominent und muessenebenfalls echt sein.
```

Stand: 02/2026 | Rechtsquelle: § 5 Abs. 1 UWG; § 5b Abs. 3 UWG; UWG-Novelle 2022

---

#### FUND 4.2 -- Testimonials: Fehlende Einwilligungserklaerungen

**Stelle im Text** (bei Verwendung echterTestimonials):

**Risiko-Level:** EMPFEHLUNG (bei produktivem Einsatz)

**Rechtsgrundlage:** § 22 KUG (Kunsturhebergesetz, bei Fotos); Art. 6 DSGVO; §§ 823, 1004 BGB (Persoenlichkeitsrecht)

**Problem:**
Wenn echte Testimonials verwendet werden -- einschliesslich Namen und Stadtteil -- muss die schriftliche Einwilligung der Kunden vorliegen. Das gilt auch ohne Foto. Die Einwilligung muss vor Veroeffentlichung eingeholt werden und muss den Verwendungszweck (Website, ggf. weitere Marketing-Kanaele) umfassen.

**Empfehlung:**
Einfaches Einwilligungsformular erstellen (einseitig, verstaendlich). Vor Verwendung jedes Testimonials unterzeichnen lassen. Aufbewahren.

Stand: 02/2026 | Rechtsquelle: § 22 KUG; Art. 6 Abs. 1 lit. a DSGVO

---

### BEREICH 5: PREISANGABENVERORDNUNG (PAngV) -- ERGAENZUNG

---

#### FUND 5.1 -- Bonus-Stack mit fiktiven Geldwerten

**Stelle im Text** (Sektion 5 Process, Value Stack):
> "Kostenlose Meister-Beratung vor Ort inkl. Materialproben   Wert: 250 EUR"
> "Professionelles Aufmass + Visualisierung (bei Badsanierung) Wert: 350 EUR"
> "Premium-Pflegeset bei Auftragserteilung                     Wert:  89 EUR"
> "Kostenloser Silikon-Check nach 12 Monaten                   Wert: 150 EUR"
> "Ihr Gesamtvorteil:                                          839 EUR"

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 5 Abs. 1 Nr. 2 UWG (Irrefuehrung durch Preisangaben); BGH-Rspr. zu Streichpreisen und Bonuswerten

**Problem:**
Die Angabe von "Wert: 250 EUR" fuer eine Leistung, die nie separat zu 250 EUR verkauft wird, ist eine Preisgestaltung, die beim BGH kritisch beurteilt wird. Wenn die Meister-Beratung nie als bezahlte Leistung angeboten wird, ist der "Wert 250 EUR" ein erfundener Vergleichspreis. Das kann als irrefuehrender Lockangebotswert eingestuft werden.

**Alternative Formulierung:**
```
STATT: "Wert: 250 EUR"

BESSER: "Vergleichbarer Marktpreis fuer externe Beratungsleistungen: ca. 250 EUR"
ODER: "Geschaetzter Gegenwert: ca. 250 EUR"
ODER: Auf Geldwertangaben verzichten und stattdessen den Nutzen beschreiben:
"Kostenlose Meister-Beratung vor Ort: Kein Terminaufwand, kein Kostenvoranschlag-Fee -- wir kommen zu Ihnen."
```

Stand: 02/2026 | Rechtsquelle: § 5 Abs. 1 Nr. 2 UWG

---

### BEREICH 6: DSGVO

---

#### FUND 6.1 -- WhatsApp-Kontakt ohne DSGVO-Hinweis

**Stelle im Text** (Sektion 1 Hero, Sekundaer-CTA; Sektion 14 Contact):
> "Per WhatsApp anfragen -- auch Fotos moeglich"
> "+49 89 12345678" [WhatsApp]
> "Auch Fotos Ihres Projekts moeglich"

**Risiko-Level:** MUST-FIX

**Rechtsgrundlage:** Art. 13 DSGVO (Informationspflicht); Art. 6 DSGVO (Rechtsgrundlage); Orientierungshilfe der DSK (Datenschutzkonferenz) zu Messenger-Diensten

**Problem:**
Bei der Nutzung von WhatsApp als Kontaktweg werden Daten an Meta Platforms, Inc. (USA) uebermittelt. Das betrifft:
1. Die Telefonnummer des Kontaktnehmers
2. Inhalte der Nachrichten (WhatsApp verwendet Ende-zu-Ende-Verschluesselung, aber Metadaten)
3. Bei WhatsApp Business: Kundenkontakte werden mit Meta-Servern synchronisiert

Dies ist eine Datenuebermittlung in ein Drittland (USA), fuer die nach Art. 13 DSGVO vor Kontaktaufnahme informiert werden muss. Die blossen Verlinkung auf die Datenschutzerklaerung genuegt, wenn dort WhatsApp explizit als Datenuebertragungsweg benannt ist.

**Massnahmen:**
```
VOR DEM WHATSAPP-BUTTON auf der Website ergaenzen:
"Hinweis: Bei Kontaktaufnahme per WhatsApp werden Ihre Daten an Meta Platforms, Inc. (USA) uebermittelt. Weitere Informationen in unserer [Datenschutzerklaerung]."

IN DER DATENSCHUTZERKLAERUNG (muss erstellt werden):
- WhatsApp als Kontaktkanal erwaehnen
- Meta als Empfaenger benennen
- Drittlandsuebermittlung USA erwaehnen
- Rechtsgrundlage (Art. 6 Abs. 1 lit. f DSGVO: Berechtigtes Interesse an Kundenkommunikation)
- Alternativer Kontaktweg muss angeboten werden (vorhanden: Telefon + E-Mail + Formular)
```

Stand: 02/2026 | Rechtsquelle: Art. 13 DSGVO; Art. 44 ff. DSGVO

---

#### FUND 6.2 -- Kontaktformular: Datenschutz-Hinweis unvollstaendig

**Stelle im Text** (Sektion 14 Contact, Datenschutz-Hinweis):
> "Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet. Keine Werbemails. Keine Weitergabe. Datenschutzerklaerung ansehen."

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** Art. 13 DSGVO; TTDSG (ehem. TMG)

**Problem:**
Der vorhandene Datenschutzhinweis ist ein guter Anfang, aber nach Art. 13 DSGVO nicht ausreichend als alleinige Information. Die vollstaendige Datenschutzerklarung muss:
- Rechtsgrundlage der Verarbeitung nennen (Art. 6 Abs. 1 lit. b DSGVO: Vertragsanbahnung)
- Speicherdauer angeben
- Rechte des Betroffenen (Auskunft, Loeschung, Berichtigung etc.) auflisten
- Datenschutzbeauftragten oder Ansprechpartner fuer Datenfragen nennen

Der Kurzhinweis beim Formular kann bleiben, muss aber auf eine vollstaendige Datenschutzerklaerung verlinken (Link muss funktionieren und die Erklaerung muss inhaltlich vollstaendig sein).

**Empfehlung:**
```
Kurzhinweis erganzen um:
"Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Speicherdauer: bis Abschluss der Anfrage, danach gesetzliche Aufbewahrungspflichten."

ODER: Kurzhinweis belassen, aber Datenschutzerklaerung muss tatsaechlich existieren und vollstaendig sein.
```

Stand: 02/2026 | Rechtsquelle: Art. 13 DSGVO

---

#### FUND 6.3 -- Kostenrechner und Datenverarbeitung

**Stelle im Text** (Sektion 4 Cost Calculator; Sektion 11 Bathroom Calculator):
> Keine explizite Datenschutzaussage zu den interaktiven Tools

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** Art. 13 DSGVO; TTDSG (Cookies/Tracking)

**Problem:**
Wenn die Rechner-Tools Eingaben speichern (z.B. per Session-Cookie oder Local Storage), ist zu pruefen, ob eine Einwilligung nach TTDSG noetig ist. Reine Berechnungen im Browser ohne Serverspeicherung sind datenschutzrechtlich unkritisch. Falls aber Eingaben serverseitig gespeichert oder an Analytics weitergegeben werden, ist ein Hinweis notwendig.

**Empfehlung:**
Technische Pruefung vor Launch: Werden Rechner-Eingaben serverseitig gespeichert oder an Dritte (Analytics) weitergegeben? Falls ja: Hinweis in der Datenschutzerklaerung, ggf. Cookie-Einwilligung.

Stand: 02/2026 | Rechtsquelle: § 25 TTDSG; Art. 6 DSGVO

---

#### FUND 6.4 -- Kontaktformular: Checkbox fuer Datenschutz-Einwilligung

**Stelle im Text** (Sektion 14 Contact, Formular-Felder):
> Keine Checkbox zur Datenschutzeinwilligung explizit erwaehnt

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** Art. 6 Abs. 1 DSGVO; Art. 7 DSGVO

**Problem:**
Bei Kontaktformularen ist die Rechtsgrundlage fuer die Datenverarbeitung entscheidend. Fuer Vertragsanbahnung (Anfrage zu einer Dienstleistung) gilt Art. 6 Abs. 1 lit. b DSGVO -- hier ist keine separate Einwilligung-Checkbox noetig, wenn der Hinweis auf die Datenschutzerklaerung vorhanden ist.

Wenn jedoch der Betrieb plant, die Daten fuer Marketingzwecke oder Newsletter zu nutzen, ist eine Opt-in-Checkbox zwingend.

**Empfehlung:**
Fuer reine Anfragen (Art. 6 Abs. 1 lit. b DSGVO): Kein Opt-in-Checkbox noetig, aber Verlinkung der Datenschutzerklaerung muss vorhanden und funktionierend sein. Sicherstellen, dass die Checkbox-Entscheidung bewusst getroffen wurde und dokumentiert ist.

Stand: 02/2026 | Rechtsquelle: Art. 6 Abs. 1 DSGVO

---

### BEREICH 7: IMPRESSUM & PFLICHTANGABEN

---

#### FUND 7.1 -- Impressum: Platzhalter-Daten

**Stelle im Text** (Kontaktdaten in der Copy):
> "089 / 123 456" (Telefon-Platzhalter)
> "info@fliesenleger-muenchen.de" (E-Mail-Platzhalter)
> "+49 89 12345678" (WhatsApp-Platzhalter)

**Risiko-Level:** MUST-FIX (vor Launch)

**Rechtsgrundlage:** § 5 DDG (ehem. § 5 TMG); ab 01.02.2025 neue Anforderungen zur Streitbeilegung

**Problem:**
Alle Kontaktdaten sind Platzhalter. Vor Launchmuessen zwingend:
- Vollstaendiger Name und Anschrift des Inhabers/Betriebsinhaber
- Rechtsform (Einzelunternehmen, GmbH, etc.)
- Registernummer (HWK/IHK-Eintragung, ggf. Handelsregister)
- Umsatzsteuer-Identifikationsnummer (§ 5 Abs. 1 Nr. 6 DDG)
- Aufsichtsbehoerde (HWK Muenchen)
- Berufsbezeichnung und Verleihungsstaat (Meister, Deutschland)
- Berufsrechtliche Regelungen und Fundstelle (HWK-Ordnung)
- Seit 01.02.2025: Hinweis zur Streitbeilegung (OS-Plattform-Link)
- E-Mail-Adresse (muss funktionieren)
- Telefonnummer (muss erreichbar sein)

**Massnahme:**
Template-Daten in der Copy (Telefon, E-Mail, Adresse) durch echte Daten ersetzen. Impressum als separate Seite anlegen.

Stand: 02/2026 | Rechtsquelle: § 5 DDG (Digital-Dienste-Gesetz, seit Mai 2024 statt TMG); § 14 UStG (USt-ID)

---

#### FUND 7.2 -- Markennutzung "Google" und "Google-Bewertungen"

**Stelle im Text** (mehrfach):
> "4.9/5.0 bei 182 Google-Bewertungen"
> "Alle 182 Bewertungen auf Google ansehen"

**Risiko-Level:** OK

**Rechtsgrundlage:** Markenrecht; EuGH-Rspr. zur nominalen Markennutzung

**Begruendung:**
Die Nennung von "Google" als Quellenangabe fuer Bewertungen ist eine zulassige nominale Markennutzung. Unternehmen duerften auf ihren Websites auf Google-Rezensionen hinweisen und verlinken, sofern keine Herkunftsverwechslung oder Markenverunglimpfung stattfindet. Die Formulierung "Bewertungen auf Google ansehen" ist eine sachliche Quellenangabe und nicht als Markenrechtsverletzung einzustufen. Empfehlenswert ist die Verlinkung auf das tatsaechliche Google-Profil (vorhanden laut Copy).

Stand: 02/2026 | Rechtsquelle: Nominale Markennutzung; EuGH Rspr.

---

### BEREICH 8: SONSTIGE RECHTSFRAGEN

---

#### FUND 8.1 -- Barrierefreiheitspflicht (BFSG ab 28.06.2025)

**Risiko-Level:** EMPFEHLUNG (neu ab 06/2025)

**Rechtsgrundlage:** Barrierefreiheitsstaeerkungsgesetz (BFSG), in Kraft seit 28.06.2025; WCAG 2.1 Level AA

**Problem:**
Seit dem 28. Juni 2025 gilt fuer private Dienstleister, die digitale Dienste fuer Verbraucher anbieten, das Barrierefreiheitsstaerkungsgesetz (BFSG). Handwerksbetriebe mit Websites muessen pruefen, ob sie unter die Ausnahmen fallen (Kleinstunternehmen mit weniger als 10 Mitarbeitern und weniger als 2 Mio. EUR Jahresumsatz sind teilweise ausgenommen). Falls der Betrieb diese Schwelle ueberschreitet, sind WCAG 2.1 Level AA-Anforderungen umzusetzen.

Dies betrifft die Copy nur indirekt (Alternativtexte fuer Bilder, Ueberschriftenhierarchie, Kontrastverhaeltnisse), ist aber fuer die technische Implementierung relevant.

**Empfehlung:**
Pruefen ob Ausnahme (Kleinstunternehmen) greift. Falls nicht: WCAG 2.1 Level AA in der Implementierung beruecksichtigen.

Stand: 02/2026 | Rechtsquelle: BFSG (Barrierefreiheitsstaerkungsgesetz), 28.06.2025

---

#### FUND 8.2 -- WasserSchaden-Urgency-Argument

**Stelle im Text** (/leistungen-Seite, Dringlichkeitstext):
> "Wasserschaeden durch defekte Abdichtungen verursachen durchschnittlich 8.000 EUR Folgekosten."

**Risiko-Level:** EMPFEHLUNG

**Rechtsgrundlage:** § 5 Abs. 1 UWG

**Problem:**
"Durchschnittlich 8.000 EUR" ist eine Zahl, die nachweisbar sein muss. Wenn kein konkreter Beleg (Studie, Versicherungsstatistik) verfuegbar ist, sollte die Formulierung abgeschwacht werden.

**Alternative Formulierung:**
```
STATT: "verursachen durchschnittlich 8.000 EUR Folgekosten"

BESSER: "koennen je nach Schadensausmass mehrere Tausend Euro Folgekosten verursachen"
```

Stand: 02/2026 | Rechtsquelle: § 5 Abs. 1 UWG

---

## TEIL 2: ZUSAMMENFASSUNG

### Statistik der Funde

| Kategorie | Anzahl | Schwerpunkt |
|-----------|--------|-------------|
| **MUST-FIX** | **8** | Alleinstellungsbehauptung, Google-Bewertungsangabe, Immobilienwert-Versprechen, Festpreis-Absolutversprechen, Garantiebedingungen fehlen, Fiktive Testimonials, MwSt-Pflichtangaben, WhatsApp DSGVO |
| **EMPFEHLUNG** | **9** | Zahlen-Dokumentation, "500+ Projekte", Zeitangabe Standard-Bad, 150%-Vergleich, Pro-Tag-Rechnung, Bonus-Werte, Rechner DSGVO, Datenschutzformular, Wasserschaden-Zahl |
| **OK** | **4** | Materialpreis-Urgency, Kostenrechner-Bezeichnung, Google-Markennutzung, Gesamtbewertung Copy-Format |

**Gesamt: 21 Pruefpunkte -- 8 MUST-FIX, 9 EMPFEHLUNGEN, 4 OK**

---

### Gesamteinschaetzung: Bereit fuer Launch?

**NEIN -- Launch erst nach Abarbeitung der MUST-FIX-Punkte.**

Die Copy ist handwerklich und copywriting-technisch exzellent (Review-Ergebnis 8.85/10). Die rechtlichen Risiken betreffen jedoch Kernelemente, die vor Veroeffentlichung behoben werden muessen:

- Die **fiktiven Testimonials** sind das gravierendste Einzelrisiko (Abmahnpotenzial bis 300.000 EUR).
- Die fehlenden **MwSt-Angaben** bei Preisen sind ein klassisches Abmahnfeld.
- Die **Festpreis-Garantie** in Absolutform ohne Einschraenkungsformulierung birgt erhebliches Vertragsrecht-Risiko.
- Die **Garantiebedingungen** muessen als separates Dokument existieren (gesetzliche Pflicht nach § 479 BGB).
- Das **Immobilienwert-Versprechen** ohne Quellenbeleg ist als YMYL-Inhalte mit Vorsicht zu behandeln.

Die **gute Nachricht:** Alle MUST-FIX-Punkte sind loesbar ohne die Kernbotschaft oder die Conversion-Kraft der Copy zu schwachen. Es sind Formulierungsanpassungen und Infrastrukturmassnahmen (Garantiebedingungen, Datenschutzerklaerung, Impressum), keine strukturellen Aenderungen.

---

## TEIL 3: CHECKLISTE FUER LAUNCH

### Pflichtaufgaben VOR dem Launch (unabhaengig von der Copy)

#### A. RECHTLICHE DOKUMENTE (erstellen oder pruefen lassen)

```
□ IMPRESSUM (nach § 5 DDG)
  - Vollstaendige Firma, Name, Anschrift
  - Telefon + E-Mail (beide muessen funktionieren)
  - Handwerkskammer-Eintragung (Kammer + Registernummer)
  - Umsatzsteuer-ID
  - Berufsrechtliche Angaben (Meistertitel, verliehen durch HWK Muenchen)
  - Streitbeilegungshinweis (Pflicht seit 01.02.2025):
    "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
    vor einer Verbraucherschlichtungsstelle teilzunehmen."
    ODER Angabe der zustaendigen Schlichtungsstelle
  - Referenz auf § 5 DDG (nicht mehr § 5 TMG -- veraltet seit Mai 2024)

□ DATENSCHUTZERKLAERUNG (nach Art. 13 DSGVO)
  - Verantwortlicher (Firmenname, Adresse)
  - Zwecke der Verarbeitung (Kontaktanfragen, Angebotserstellung)
  - Rechtsgrundlage (Art. 6 Abs. 1 lit. b DSGVO fuer Vertragsanbahnung)
  - Empfaenger der Daten (keine Weitergabe, ausser gesetzliche Pflicht)
  - WhatsApp als Kontaktkanal: Meta als Empfaenger nennen, Drittlandsuebermittlung USA
  - Speicherdauer
  - Betroffenenrechte (Auskunft, Loeschung, Berichtigung, Widerspruch)
  - Recht auf Beschwerde bei Datenschutzbehoerde (BayLDA fuer Bayern)
  - Cookies und Tracking: Falls Google Analytics oder aehnliche Tools: Einwilligung erforderlich
  - Kostenrechner: Ob serverseitig gespeichert wird oder nicht

□ COOKIE-BANNER / COOKIE-EINWILLIGUNG
  - Pflicht nach § 25 TTDSG fuer nicht-technisch-notwendige Cookies
  - Wenn Google Analytics / Google Tag Manager: Einwilligung VOR Aktivierung
  - Technisch notwendige Cookies (Session): Keine Einwilligung noetig
  - Echte Ablehn-Option (nicht nur "Alle akzeptieren")

□ GARANTIEBEDINGUNGEN (als separate Seite /garantie oder PDF)
  - Garantiegeber (Firmenname + Adresse)
  - Garantiedauer je Garantietyp (30 Tage / 5 Jahre)
  - Abgedeckte Leistungen (Material UND Verlegearbeit)
  - Ausschluesse: Mechankische Beschaedigung durch Kunden, normale Abnutzung, Aenderungen durch Dritte
  - Anspruchsvoraussetzungen (Anmeldung, Reaktionszeit 5 Werktage)
  - Verhaeltnis zur gesetzlichen Gewaehrleistung (unberuehrt)
  - Link zu den Garantiebedingungen neben jeder Erwaehnung der Garantien
  - Vor Launch durch Fachanwalt fuer Werkvertragsrecht pruefenlassen

□ AGB (Allgemeine Geschaeftsbedingungen)
  - Leistungsumfang und Ausnahmen bei Festpreis-Garantie definieren
  - Aenderungswuensche-Regelung
  - Zahlungsbedingungen
  - Gerichtsstand (Muenchen)
  - Verbraucherschlichtung
  - AGB durch Fachanwalt fuer Handwerksrecht erstellen oder pruefenlassen
```

#### B. COPY-AENDERUNGEN (MUST-FIX -- in der Copy selbst)

```
□ FUND 1.1 -- "Kein anderer Fliesenleger in Muenchen..."
  Umformulieren: "Nur wenige Fliesenleger..." oder alternative Formulierung

□ FUND 1.3 -- Google-Bewertungsangabe
  Dynamisch einbinden ODER mit Datumsstempel versehen (Stand: MM/YYYY)
  Verifikationshinweis erganzen (§ 5b Abs. 3 UWG)

□ FUND 1.7 -- Immobilienwert-Argument
  Quellenbeleg recherchieren UND Formulierung abschwachen
  Hinweis: "keine individuelle Finanzberatung" erganzen

□ FUND 2.1 -- Alle Preisangaben ohne MwSt-Hinweis
  Bei ALLEN Preisen erganzen: "inkl. MwSt." oder Fussnote

□ FUND 3.1 -- Festpreis-Garantie
  Absolutversprechen "Punkt." durch praezisere Formulierung mit Leistungsumfang-Verweis

□ FUND 3.3 -- 5-Jahre-Garantie: Rechtsgrundlage-Aussage
  "2 Jahre gesetzlich" durch korrektere Formulierung ersetzen
  Link zu Garantiebedingungen einbauen (sobald das Dokument existiert)

□ FUND 4.1 -- Fiktive Testimonials
  Mit Platzhalter-Hinweis versehen ODER nur echte Testimonials verwenden
  Micro-Testimonials neben CTAs ebenfalls kennzeichnen

□ FUND 6.1 -- WhatsApp-Button
  DSGVO-Kurzhinweis neben dem WhatsApp-Button erganzen
```

#### C. TECHNISCHE PRUEFUNGEN

```
□ Cookie-Banner technisch implementieren (vor Analytics-Einbindung)
□ Rechner-Tools: Technische Pruefung auf Datenspeicherung
□ Alle Links zu Datenschutzerklaerung und Impressum funktionsfaehig
□ Garantiebedingungen-Link funktionsfaehig
□ Google-Bewertungslink funktionsfaehig (direkter Link zum Profil)
□ BFSG-Barrierefreiheit: Pruefen ob Kleinstunternehmer-Ausnahme greift
□ SSL-Zertifikat (HTTPS) -- Standard, aber Pflicht
```

#### D. OPERATIV (intern -- nicht in der Copy)

```
□ Echte Testimonials einholen und schriftliche Einwilligungen unterzeichnen lassen
□ Interne Projekt-Dokumentation anlegen (zum Nachweis "500+ Projekte")
□ Pruefprotokoll anlegen: "Kein Garantiefall seit 1998" -- Dokumentengrundlage
□ Wert-Angaben fuer Bonus-Stack intern belegen (z.B. Marktvergleich)
□ Immobilienwert-Quellen recherchieren (z.B. IVD-Studie, Maklerverband)
□ Fachanwalt fuer Wettbewerbs- und IT-Recht: Einmalberatung zu Alleinstellungsbehauptung
□ Fachanwalt fuer Werkvertragsrecht: Festpreis-Garantie und AGB-Gestaltung
□ Datenschutzbeauftragten pruefen (ist einer noetig? Ab 20 Personen regelmaessige Datenverarbeitung: ja)
```

---

## HAFTUNGSHINWEIS

Dieser Legal Check ist eine strukturierte Vorpruefung auf Basis allgemein zugaenglicher Rechtsquellen und dient als Arbeitshilfe. Er ersetzt keine individuelle Rechtsberatung durch einen zugelassenen Rechtsanwalt. Fuer verbindliche rechtliche Einschaetzungen -- insbesondere zu den Themen Garantiebedingungen, AGB, Festpreis-Garantie und Alleinstellungsbehauptungen -- konsultieren Sie bitte einen Fachanwalt fuer Wettbewerbsrecht oder IT-Recht.

Empfehlung: Kanzlei mit Spezialisierung auf Handwerksrecht / Werkvertragsrecht fuer die AGB und Garantiebedingungen; Kanzlei mit Spezialisierung auf Wettbewerbsrecht fuer die Copy-Pruefung.

Alle Quellenangaben und Rechtsstaende beziehen sich auf den Stand 02/2026.

---

*Phase 9 abgeschlossen.*
*Erstellt: 2026-02-18*
*Naechster Schritt: MUST-FIX-Punkte abarbeiten, Rechtsanwalt konsultieren, Launch vorbereiten.*
