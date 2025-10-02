import { Award, Star, Shield, Users } from 'lucide-react';

interface TrustBadge {
  icon: React.ReactNode;
  text: string;
  subtext: string;
}

const badges: TrustBadge[] = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    text: 'Meisterbetrieb',
    subtext: 'Seit 1998',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    text: '4.9/5.0',
    subtext: '182 Google-Bewertungen',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    text: '5 Jahre Garantie',
    subtext: 'Auf alle Arbeiten',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    text: '1.200+',
    subtext: 'Zufriedene Kunden',
  },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {badge.icon}
              </div>
              <div className="text-lg font-bold text-foreground">
                {badge.text}
              </div>
              <div className="text-sm text-muted-foreground">
                {badge.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
