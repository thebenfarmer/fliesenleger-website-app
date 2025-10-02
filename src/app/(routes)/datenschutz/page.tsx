import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Fliesenleger München',
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-8 text-4xl font-bold">Datenschutzerklärung</h1>

              <div className="prose prose-lg max-w-none">
                <h2>1. Datenschutz auf einen Blick</h2>

                <h3>Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was
                  mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
                  besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können. Ausführliche Informationen
                  zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                  aufgeführten Datenschutzerklärung.
                </p>

                <h3>Datenerfassung auf dieser Website</h3>
                <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                  &quot;Hinweis zur Verantwortlichen Stelle&quot; in dieser Datenschutzerklärung
                  entnehmen.
                </p>

                <h4>Wie erfassen wir Ihre Daten?</h4>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                  mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
                  ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
                  Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                  allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                  Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                  automatisch, sobald Sie diese Website betreten.
                </p>

                <h4>Wofür nutzen wir Ihre Daten?</h4>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
                  der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                  Nutzerverhaltens verwendet werden.
                </p>

                <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                  Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
                  erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                  Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                  Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
                  unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>

                <h2>2. Hosting</h2>
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>

                <h3>Externes Hosting</h3>
                <p>
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die
                  auf dieser Website erfasst werden, werden auf den Servern des Hosters
                  / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
                  eine Website generiert werden, handeln.
                </p>

                <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

                <h3>Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                  Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                  vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                  sowie dieser Datenschutzerklärung.
                </p>

                <h3>Hinweis zur verantwortlichen Stelle</h3>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                  Website ist:
                </p>
                <p>
                  Fliesenleger München GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  80331 München
                  <br />
                  <br />
                  Telefon: 089 / 123 456
                  <br />
                  E-Mail: info@fliesenleger-muenchen.de
                </p>

                <h3>Speicherdauer</h3>
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                  Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
                  bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
                  ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
                  zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                  wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                  Ihrer personenbezogenen Daten haben (z. B. steuer- oder
                  handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
                  erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>

                <h2>4. Datenerfassung auf dieser Website</h2>

                <h3>Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
                  Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
                  angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
                  Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                  nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
                  1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                  zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
                  unserem berechtigten Interesse an der effektiven Bearbeitung der an
                  uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                  wurde.
                </p>

                <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
                  Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
                  (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
                  gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter.
                </p>

                <h2>5. Ihre Rechte</h2>
                <p>Sie haben folgende Rechte:</p>
                <ul>
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                </ul>

                <p className="text-sm text-muted-foreground mt-8">
                  Stand: {new Date().toLocaleDateString('de-DE')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
