import { Clock, AlertCircle } from 'lucide-react';

interface AvailabilityIndicatorProps {
  weeksAhead?: number;
  className?: string;
}

export default function AvailabilityIndicator({
  weeksAhead = 3,
  className = '',
}: AvailabilityIndicatorProps) {
  const getAvailabilityText = () => {
    if (weeksAhead <= 2) {
      return {
        text: `in ${weeksAhead} ${weeksAhead === 1 ? 'Woche' : 'Wochen'}`,
        urgency: 'high',
      };
    } else if (weeksAhead <= 4) {
      return {
        text: `in ${weeksAhead} Wochen`,
        urgency: 'medium',
      };
    } else {
      return {
        text: `in ${weeksAhead} Wochen`,
        urgency: 'low',
      };
    }
  };

  const { text, urgency } = getAvailabilityText();

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border-2 p-4 ${
        urgency === 'high'
          ? 'border-orange-500 bg-orange-50'
          : urgency === 'medium'
          ? 'border-yellow-500 bg-yellow-50'
          : 'border-blue-500 bg-blue-50'
      } ${className}`}
    >
      <div className="flex-shrink-0">
        {urgency === 'high' ? (
          <AlertCircle className="h-5 w-5 text-orange-600" />
        ) : (
          <Clock className="h-5 w-5 text-primary" />
        )}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-semibold">Nächster freier Termin:</span>
          <span
            className={`font-bold ${
              urgency === 'high'
                ? 'text-orange-600'
                : urgency === 'medium'
                ? 'text-yellow-700'
                : 'text-primary'
            }`}
          >
            {text}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {urgency === 'high'
            ? 'Noch wenige Termine verfügbar – jetzt anfragen!'
            : 'Jetzt anfragen, um Ihren Wunschtermin zu sichern'}
        </p>
      </div>
    </div>
  );
}
