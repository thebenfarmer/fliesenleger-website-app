import { DollarSign, ThumbsUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const guarantees = [
  {
    icon: DollarSign,
    title: 'Festpreis-Garantie',
    subtitle: 'Angebotspreis = Endpreis.',
    description: 'Der Preis in Ihrem Angebot ist der Endpreis für den definierten Leistungsumfang. Keine versteckten Kosten, keine Nachträge, keine Überraschungen. Wenn wir etwas übersehen, tragen wir die Mehrkosten.',
  },
  {
    icon: ThumbsUp,
    title: '30-Tage-Zufriedenheitsgarantie',
    subtitle: 'Nicht perfekt? Wir bessern kostenlos nach.',
    description: 'Innerhalb von 30 Tagen nach Fertigstellung bessern wir kostenlos nach, wenn etwas nicht Ihren Erwartungen entspricht. Ein Anruf genügt.',
  },
  {
    icon: Shield,
    title: '5-Jahre-Vollgarantie',
    subtitle: 'Material und Arbeit. Über die gesetzliche Gewährleistung hinaus.',
    description: 'Während andere nach 2 Jahren aus der Verantwortung sind, stehen wir 5 Jahre lang für unser Handwerk ein. Auf Material und Verlegearbeit.',
  },
];

export default function Guarantees() {
  return (
    <section id="garantien" className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Das Münchner Dreifach-Garantie-System
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Nur wenige Fliesenleger in München bieten Ihnen diese drei Garantien
            in Kombination. Wir übernehmen das Risiko – damit Sie keins haben.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid gap-8 md:grid-cols-3">
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
                <h3 className="mb-2 text-xl font-semibold">{guarantee.title}</h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  {guarantee.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {guarantee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold">
            Ihr Risiko bei uns? Null. Unser Anspruch? 100%.
          </p>
        </div>
      </div>
    </section>
  );
}
