'use client';

import { useState } from 'react';
import { Bath, ArrowRight, ArrowLeft, CheckCircle2, Clock, Euro, Droplets, Thermometer, Wrench, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface StepData {
  bathroomSize: 'small' | 'medium' | 'large' | '';
  wallTiles: boolean | null;
  floorTiles: boolean | null;
  showerType: 'none' | 'shower' | 'bathtub' | 'both' | '';
  additionalServices: string[];
  material: 'budget' | 'standard' | 'premium' | '';
}

interface Material {
  id: 'budget' | 'standard' | 'premium';
  name: string;
  description: string;
  pricePerSqm: number;
  icon: string;
}

const materials: Material[] = [
  {
    id: 'budget',
    name: 'Budget-Linie',
    description: 'Hochwertige Keramikfliesen mit gutem Preis-Leistungs-Verhältnis',
    pricePerSqm: 45,
    icon: '💰',
  },
  {
    id: 'standard',
    name: 'Standard-Linie',
    description: 'Feinsteinzeug und Mosaik in zeitlosem Design',
    pricePerSqm: 75,
    icon: '⭐',
  },
  {
    id: 'premium',
    name: 'Premium-Linie',
    description: 'Exklusive Natursteine und Großformate',
    pricePerSqm: 140,
    icon: '💎',
  },
];

const bathroomSizes = {
  small: { name: 'Klein (4-6 m²)', area: 5, wallArea: 24 },
  medium: { name: 'Mittel (7-10 m²)', area: 8.5, wallArea: 32 },
  large: { name: 'Groß (11-15 m²)', area: 13, wallArea: 42 },
};

const additionalServicesOptions = [
  { id: 'sanitaryInstallation', name: 'Sanitärobjekte (WC, Waschbecken)', cost: 1200, days: 1 },
  { id: 'heating', name: 'Fußbodenheizung', cost: 2500, days: 2 },
  { id: 'ventilation', name: 'Belüftungssystem', cost: 800, days: 0.5 },
  { id: 'lighting', name: 'LED-Beleuchtung', cost: 600, days: 0.5 },
];

export default function BathroomRenovationCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState<StepData>({
    bathroomSize: '',
    wallTiles: null,
    floorTiles: null,
    showerType: '',
    additionalServices: [],
    material: '',
  });
  const [showResult, setShowResult] = useState(false);

  const totalSteps = 6;

  const updateStepData = (key: keyof StepData, value: any) => {
    setStepData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetCalculator = () => {
    setCurrentStep(0);
    setStepData({
      bathroomSize: '',
      wallTiles: null,
      floorTiles: null,
      showerType: '',
      additionalServices: [],
      material: '',
    });
    setShowResult(false);
  };

  // Calculations
  const calculateCosts = () => {
    if (!stepData.bathroomSize || !stepData.material) {
      return { total: 0, breakdown: {}, days: 0 };
    }

    const size = bathroomSizes[stepData.bathroomSize];
    const materialData = materials.find((m) => m.id === stepData.material)!;

    let totalCost = 0;
    let totalDays = 0;
    const breakdown: any = {};

    // Floor tiles
    if (stepData.floorTiles) {
      const floorCost = size.area * materialData.pricePerSqm;
      const laborCost = size.area * 40;
      breakdown.floor = floorCost + laborCost;
      totalCost += breakdown.floor;
      totalDays += 2;
    }

    // Wall tiles
    if (stepData.wallTiles) {
      const wallCost = size.wallArea * materialData.pricePerSqm;
      const laborCost = size.wallArea * 35;
      breakdown.wall = wallCost + laborCost;
      totalCost += breakdown.wall;
      totalDays += 3;
    }

    // Shower/Bathtub
    if (stepData.showerType === 'shower') {
      breakdown.shower = 1500;
      totalCost += breakdown.shower;
      totalDays += 1;
    } else if (stepData.showerType === 'bathtub') {
      breakdown.bathtub = 2200;
      totalCost += breakdown.bathtub;
      totalDays += 1.5;
    } else if (stepData.showerType === 'both') {
      breakdown.showerAndBathtub = 3500;
      totalCost += breakdown.showerAndBathtub;
      totalDays += 2.5;
    }

    // Additional services
    stepData.additionalServices.forEach((serviceId) => {
      const service = additionalServicesOptions.find((s) => s.id === serviceId);
      if (service) {
        breakdown[serviceId] = service.cost;
        totalCost += service.cost;
        totalDays += service.days;
      }
    });

    // Base preparation and finishing
    breakdown.preparation = 800;
    totalCost += breakdown.preparation;
    totalDays += 1;

    return { total: totalCost, breakdown, days: Math.ceil(totalDays) };
  };

  const { total, breakdown, days } = calculateCosts();

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return stepData.bathroomSize !== '';
      case 1:
        return stepData.wallTiles !== null;
      case 2:
        return stepData.floorTiles !== null;
      case 3:
        return stepData.showerType !== '';
      case 4:
        return true; // Additional services are optional
      case 5:
        return stepData.material !== '';
      default:
        return false;
    }
  };

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextStep();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Bath className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Wie groß ist Ihr Badezimmer?</h3>
              <p className="text-sm text-muted-foreground">Wählen Sie die ungefähre Größe aus</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {Object.entries(bathroomSizes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => updateStepData('bathroomSize', key)}
                  className={cn(
                    'group rounded-xl border-2 p-6 text-center transition-all hover:border-primary hover:shadow-lg',
                    stepData.bathroomSize === key
                      ? 'border-primary shadow-lg'
                      : 'border-border bg-background'
                  )}
                >
                  <div className="mb-3 text-4xl">
                    {key === 'small' ? '🚿' : key === 'medium' ? '🛁' : '🏊'}
                  </div>
                  <p className="mb-1 font-semibold">{value.name}</p>
                  <p className="text-xs text-muted-foreground">
                    ca. {value.area} m² Boden
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Wandfliesen erneuern?</h3>
              <p className="text-sm text-muted-foreground">Sollen die Wandfliesen neu verlegt werden?</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <button
                onClick={() => updateStepData('wallTiles', true)}
                className={cn(
                  'group rounded-xl border-2 p-8 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.wallTiles === true
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-5xl">✅</div>
                <p className="mb-2 text-lg font-semibold">Ja, Wandfliesen verlegen</p>
                <p className="text-xs text-muted-foreground">Inkl. Materialien & Verlegung</p>
              </button>
              <button
                onClick={() => updateStepData('wallTiles', false)}
                className={cn(
                  'group rounded-xl border-2 p-8 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.wallTiles === false
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-5xl">❌</div>
                <p className="mb-2 text-lg font-semibold">Nein, nicht nötig</p>
                <p className="text-xs text-muted-foreground">Wände bleiben wie sie sind</p>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Layers className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Bodenfliesen erneuern?</h3>
              <p className="text-sm text-muted-foreground">Sollen neue Bodenfliesen verlegt werden?</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <button
                onClick={() => updateStepData('floorTiles', true)}
                className={cn(
                  'group rounded-xl border-2 p-8 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.floorTiles === true
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-5xl">✅</div>
                <p className="mb-2 text-lg font-semibold">Ja, Bodenfliesen verlegen</p>
                <p className="text-xs text-muted-foreground">Inkl. Materialien & Verlegung</p>
              </button>
              <button
                onClick={() => updateStepData('floorTiles', false)}
                className={cn(
                  'group rounded-xl border-2 p-8 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.floorTiles === false
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-5xl">❌</div>
                <p className="mb-2 text-lg font-semibold">Nein, nicht nötig</p>
                <p className="text-xs text-muted-foreground">Boden bleibt wie er ist</p>
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Droplets className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Dusche oder Badewanne?</h3>
              <p className="text-sm text-muted-foreground">Was soll in Ihrem neuen Bad sein?</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <button
                onClick={() => updateStepData('showerType', 'shower')}
                className={cn(
                  'group rounded-xl border-2 p-6 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.showerType === 'shower'
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-4xl">🚿</div>
                <p className="mb-2 font-semibold">Nur Dusche</p>
                <p className="text-xs text-muted-foreground">Moderne Duschkabine</p>
                <p className="mt-2 text-sm font-medium text-primary">+ ca. 1.500€</p>
              </button>
              <button
                onClick={() => updateStepData('showerType', 'bathtub')}
                className={cn(
                  'group rounded-xl border-2 p-6 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.showerType === 'bathtub'
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-4xl">🛁</div>
                <p className="mb-2 font-semibold">Nur Badewanne</p>
                <p className="text-xs text-muted-foreground">Klassische Badewanne</p>
                <p className="mt-2 text-sm font-medium text-primary">+ ca. 2.200€</p>
              </button>
              <button
                onClick={() => updateStepData('showerType', 'both')}
                className={cn(
                  'group rounded-xl border-2 p-6 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.showerType === 'both'
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-4xl">🚿🛁</div>
                <p className="mb-2 font-semibold">Dusche & Badewanne</p>
                <p className="text-xs text-muted-foreground">Kombination aus beidem</p>
                <p className="mt-2 text-sm font-medium text-primary">+ ca. 3.500€</p>
              </button>
              <button
                onClick={() => updateStepData('showerType', 'none')}
                className={cn(
                  'group rounded-xl border-2 p-6 text-center transition-all hover:border-primary hover:shadow-lg',
                  stepData.showerType === 'none'
                    ? 'border-primary shadow-lg'
                    : 'border-border bg-background'
                )}
              >
                <div className="mb-3 text-4xl">❌</div>
                <p className="mb-2 font-semibold">Nichts davon</p>
                <p className="text-xs text-muted-foreground">Nur Fliesenarbeiten</p>
                <p className="mt-2 text-sm font-medium text-primary">+ 0€</p>
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Wrench className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Zusatzleistungen</h3>
              <p className="text-sm text-muted-foreground">Wählen Sie optionale Extras (mehrere möglich)</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {additionalServicesOptions.map((service) => {
                const isSelected = stepData.additionalServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      if (isSelected) {
                        updateStepData(
                          'additionalServices',
                          stepData.additionalServices.filter((id) => id !== service.id)
                        );
                      } else {
                        updateStepData('additionalServices', [
                          ...stepData.additionalServices,
                          service.id,
                        ]);
                      }
                    }}
                    className={cn(
                      'group rounded-xl border-2 p-6 text-left transition-all hover:border-primary hover:shadow-lg',
                      isSelected
                        ? 'border-primary shadow-lg'
                        : 'border-border bg-background'
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="mb-1 font-semibold">{service.name}</p>
                        <p className="text-sm font-medium text-primary">+ {service.cost}€</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          + {service.days} Tag{service.days !== 1 ? 'e' : ''}
                        </p>
                      </div>
                      {isSelected && <CheckCircle2 className="h-5 w-5 text-primary" />}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <button
                onClick={() => updateStepData('additionalServices', [])}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Keine Zusatzleistungen
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Materialqualität wählen</h3>
              <p className="text-sm text-muted-foreground">Wählen Sie Ihre bevorzugte Materiallinie</p>
            </div>
            <div className="grid gap-4">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => updateStepData('material', material.id)}
                  className={cn(
                    'group rounded-xl border-2 p-6 text-left transition-all hover:border-primary hover:shadow-lg',
                    stepData.material === material.id
                      ? 'border-primary shadow-lg'
                      : 'border-border bg-background'
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{material.icon}</div>
                      <div>
                        <p className="mb-1 text-lg font-semibold">{material.name}</p>
                        <p className="mb-2 text-sm text-muted-foreground">{material.description}</p>
                        <p className="text-sm font-medium text-primary">{material.pricePerSqm}€/m²</p>
                      </div>
                    </div>
                    {stepData.material === material.id && (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showResult) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary-50 via-background to-accent-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="text-center">
                <Badge variant="primary" size="md" className="mb-4">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Berechnung abgeschlossen
                </Badge>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                  Ihre Badrenovierung
                </h2>
                <p className="text-lg text-muted-foreground">
                  Basierend auf Ihren Angaben haben wir folgende Kostenschätzung erstellt
                </p>
              </div>

              {/* Total Cost Card */}
              <Card variant="elevated" padding="lg" className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-sm font-medium text-primary-100">Geschätzte Gesamtkosten</p>
                      <motion.p
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="text-5xl font-bold text-white md:text-6xl"
                      >
                        {total.toLocaleString('de-DE')}€
                      </motion.p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="mb-4 flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-white" />
                          <div>
                            <p className="text-xs text-primary-100">Geschätzte Dauer</p>
                            <p className="text-2xl font-bold text-white">{days} Tage</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Euro className="h-5 w-5 text-white" />
                          <div>
                            <p className="text-xs text-primary-100">Pro Tag</p>
                            <p className="text-2xl font-bold text-white">~{Math.round(total / days).toLocaleString('de-DE')}€</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Breakdown */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Cost Breakdown */}
                <Card variant="outlined" padding="lg">
                  <CardContent>
                    <h3 className="mb-4 flex items-center text-lg font-semibold">
                      <Euro className="mr-2 h-5 w-5 text-primary" />
                      Kostenaufschlüsselung
                    </h3>
                    <div className="space-y-3">
                      {breakdown.floor && (
                        <div className="flex justify-between rounded-lg bg-muted p-3">
                          <span className="text-sm text-muted-foreground">Bodenfliesen</span>
                          <span className="text-sm font-semibold">
                            {breakdown.floor.toLocaleString('de-DE')}€
                          </span>
                        </div>
                      )}
                      {breakdown.wall && (
                        <div className="flex justify-between rounded-lg bg-muted p-3">
                          <span className="text-sm text-muted-foreground">Wandfliesen</span>
                          <span className="text-sm font-semibold">
                            {breakdown.wall.toLocaleString('de-DE')}€
                          </span>
                        </div>
                      )}
                      {breakdown.shower && (
                        <div className="flex justify-between rounded-lg bg-muted p-3">
                          <span className="text-sm text-muted-foreground">Dusche</span>
                          <span className="text-sm font-semibold">
                            {breakdown.shower.toLocaleString('de-DE')}€
                          </span>
                        </div>
                      )}
                      {breakdown.bathtub && (
                        <div className="flex justify-between rounded-lg bg-muted p-3">
                          <span className="text-sm text-muted-foreground">Badewanne</span>
                          <span className="text-sm font-semibold">
                            {breakdown.bathtub.toLocaleString('de-DE')}€
                          </span>
                        </div>
                      )}
                      {breakdown.showerAndBathtub && (
                        <div className="flex justify-between rounded-lg bg-muted p-3">
                          <span className="text-sm text-muted-foreground">Dusche & Badewanne</span>
                          <span className="text-sm font-semibold">
                            {breakdown.showerAndBathtub.toLocaleString('de-DE')}€
                          </span>
                        </div>
                      )}
                      {stepData.additionalServices.map((serviceId) => {
                        const service = additionalServicesOptions.find((s) => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex justify-between rounded-lg bg-muted p-3">
                            <span className="text-sm text-muted-foreground">{service.name}</span>
                            <span className="text-sm font-semibold">
                              {breakdown[serviceId].toLocaleString('de-DE')}€
                            </span>
                          </div>
                        ) : null;
                      })}
                      {breakdown.preparation && (
                        <div className="flex justify-between rounded-lg bg-muted p-3">
                          <span className="text-sm text-muted-foreground">Vorbereitung & Abschluss</span>
                          <span className="text-sm font-semibold">
                            {breakdown.preparation.toLocaleString('de-DE')}€
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-border pt-3 mt-2">
                        <span className="text-base font-bold text-foreground">Gesamtsumme</span>
                        <span className="text-base font-bold text-primary">
                          {total.toLocaleString('de-DE')}€
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Your Selections */}
                <Card variant="outlined" padding="lg">
                  <CardContent>
                    <h3 className="mb-4 flex items-center text-lg font-semibold">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      Ihre Auswahl
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 rounded-lg bg-muted p-3">
                        <Bath className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Badgröße</p>
                          <p className="text-xs text-muted-foreground">
                            {stepData.bathroomSize && bathroomSizes[stepData.bathroomSize].name}
                          </p>
                        </div>
                      </div>
                      {stepData.wallTiles && (
                        <div className="flex items-start space-x-3 rounded-lg bg-muted p-3">
                          <Sparkles className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Wandfliesen</p>
                            <p className="text-xs text-muted-foreground">Ja, inkludiert</p>
                          </div>
                        </div>
                      )}
                      {stepData.floorTiles && (
                        <div className="flex items-start space-x-3 rounded-lg bg-muted p-3">
                          <Layers className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Bodenfliesen</p>
                            <p className="text-xs text-muted-foreground">Ja, inkludiert</p>
                          </div>
                        </div>
                      )}
                      {stepData.showerType !== 'none' && (
                        <div className="flex items-start space-x-3 rounded-lg bg-muted p-3">
                          <Droplets className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Installation</p>
                            <p className="text-xs text-muted-foreground">
                              {stepData.showerType === 'shower' && 'Dusche'}
                              {stepData.showerType === 'bathtub' && 'Badewanne'}
                              {stepData.showerType === 'both' && 'Dusche & Badewanne'}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start space-x-3 rounded-lg bg-muted p-3">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Material</p>
                          <p className="text-xs text-muted-foreground">
                            {materials.find((m) => m.id === stepData.material)?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA */}
              <Card variant="outlined" padding="lg" className="border-2 border-primary bg-primary">
                <CardContent>
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Jetzt kostenloses Angebot anfordern
                    </h3>
                    <p className="mb-6 text-sm text-primary-100">
                      Unsere Experten erstellen Ihnen ein detailliertes, kostenloses Angebot mit Vor-Ort-Beratung.
                      Innerhalb von 24 Stunden erhalten Sie eine persönliche Rückmeldung.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <a
                        href="#contact"
                        className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl"
                      >
                        Kostenloses Angebot erhalten
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                      <button
                        onClick={resetCalculator}
                        className="inline-flex items-center text-sm font-medium text-primary-100 hover:text-white"
                      >
                        Neu berechnen
                      </button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white">
                      <span className="flex items-center">
                        <CheckCircle2 className="mr-1 h-4 w-4 text-white" />
                        Kostenlos & unverbindlich
                      </span>
                      <span className="flex items-center">
                        <CheckCircle2 className="mr-1 h-4 w-4 text-white" />
                        Antwort in 24h
                      </span>
                      <span className="flex items-center">
                        <CheckCircle2 className="mr-1 h-4 w-4 text-white" />
                        Meisterbetrieb seit 25 Jahren
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <div className="rounded-lg border border-accent-200 bg-accent-50 p-4">
                <p className="text-xs text-accent-900">
                  <strong>Hinweis:</strong> Dies ist eine unverbindliche Kostenschätzung basierend auf Durchschnittswerten.
                  Der tatsächliche Preis kann je nach spezifischen Anforderungen, Untergrundvorbereitung, gewählten
                  Materialien und örtlichen Gegebenheiten variieren. Für ein genaues Angebot kontaktieren Sie uns bitte.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-accent-50 via-background to-primary-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <Badge variant="primary" size="md" className="mb-4">
              <Bath className="mr-2 h-4 w-4" />
              Bad-Renovierungsrechner
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Planen Sie Ihre Badsanierung
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              In 6 einfachen Schritten zu Ihrer Kostenschätzung
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>Schritt {currentStep + 1} von {totalSteps}</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Steps */}
          <Card variant="elevated" padding="lg" className="mb-6">
            <CardContent>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="inline-flex items-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {currentStep === totalSteps - 1 ? 'Ergebnis anzeigen' : 'Weiter'}
              {currentStep === totalSteps - 1 ? (
                <CheckCircle2 className="ml-2 h-4 w-4" />
              ) : (
                <ArrowRight className="ml-2 h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
