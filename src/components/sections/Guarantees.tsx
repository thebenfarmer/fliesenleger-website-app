import { CheckCircle, DollarSign, ThumbsUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const guarantees = [
  {
    icon: CheckCircle,
    title: 'Kostenlose Erstberatung',
    description: 'Unverbindliches Beratungsgespräch bei Ihnen vor Ort – ohne versteckte Kosten.',
  },
  {
    icon: DollarSign,
    title: 'Festpreis-Garantie',
    description: 'Der Preis im Angebot ist der Endpreis. Keine versteckten Kosten oder Aufschläge.',
  },
  {
    icon: ThumbsUp,
    title: 'Zufriedenheitsgarantie',
    description: 'Kostenlose Nachbesserung innerhalb von 30 Tagen, falls Sie nicht zufrieden sind.',
  },
  {
    icon: Shield,
    title: '5 Jahre Garantie',
    description: 'Vollumfängliche Garantie auf Material und Verlegearbeit für 5 Jahre.',
  },
];

export default function Guarantees() {
  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ihre Sicherheit ist garantiert
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Wir stehen zu unserer Arbeit und minimieren Ihr Risiko durch umfassende
            Garantien und transparente Prozesse.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              variant="outlined"
              padding="lg"
              className="text-center transition-all hover:shadow-lg hover:border-primary"
            >
              <CardContent>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <guarantee.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {guarantee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
            <div className="text-center">
              <h3 className="mb-6 text-2xl font-bold">
                Zusätzliche Sicherheit für Sie
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="mb-2 text-3xl font-bold text-primary">5 Mio. €</div>
                  <div className="text-sm text-muted-foreground">
                    Versicherungsschutz
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">
                    Jahre Erfahrung
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Kundenzufriedenheit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
