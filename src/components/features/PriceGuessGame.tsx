'use client';

import { useState } from 'react';
import { Trophy, ArrowRight, RefreshCw, TrendingUp, TrendingDown, Minus, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import BeforeAfterSlider from '@/components/features/BeforeAfterSlider';
import { cn } from '@/lib/utils';

interface GameProject {
  id: string;
  title: string;
  category: string;
  material: string;
  area: string;
  before: string;
  after: string;
  actualCost: number;
  description: string;
}

const gameProjects: GameProject[] = [
  {
    id: 'badezimmer-modern-01',
    title: 'Modernes Badezimmer mit Großformatfliesen',
    category: 'Badezimmer',
    material: 'Feinsteinzeug Großformat',
    area: '12m²',
    before: '/images/projects/bad-modern-01-before.png',
    after: '/images/projects/bad-modern-01-after.png',
    actualCost: 9400,
    description: 'Komplette Badsanierung mit edlen Großformatfliesen in Betonoptik. Bodengleiche Dusche und hochwertige Wandverkleidung.',
  },
  {
    id: 'badezimmer-marmor-01',
    title: 'Luxusbad mit Carrara-Marmor',
    category: 'Badezimmer',
    material: 'Carrara-Marmor',
    area: '18m²',
    before: '/images/projects/bad-marmor-01-before.jpg',
    after: '/images/projects/bad-marmor-01-after.jpg',
    actualCost: 18500,
    description: 'Exklusive Badgestaltung mit weißem Carrara-Marmor. Durchgängig verfliest mit akzentuierter Mosaikbordüre.',
  },
  {
    id: 'terrasse-holzoptik-01',
    title: 'Terrasse in Holzoptik',
    category: 'Terrasse',
    material: 'Feinsteinzeug Holzoptik',
    area: '35m²',
    before: '/images/projects/terrasse-01-before.jpg',
    after: '/images/projects/terrasse-01-after.jpg',
    actualCost: 12800,
    description: 'Wetterfeste Terrassengestaltung mit täuschend echten Holzoptikfliesen. Frostbeständig und pflegeleicht.',
  },
  {
    id: 'wohnzimmer-grossformat-01',
    title: 'Offener Wohnbereich mit XXL-Fliesen',
    category: 'Wohnbereich',
    material: 'Feinsteinzeug Großformat',
    area: '65m²',
    before: '/images/projects/wohnzimmer-01-before.jpg',
    after: '/images/projects/wohnzimmer-01-after.jpg',
    actualCost: 22500,
    description: 'Offene Wohnraumgestaltung mit XXL-Fliesen 120x120cm in Betonoptik. Durchgängig verlegt über Wohnzimmer, Essbereich und Küche.',
  },
];

export default function PriceGuessGame() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [guessedPrice, setGuessedPrice] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const currentProject = gameProjects[currentProjectIndex];

  const handleGuess = () => {
    const guess = parseInt(inputValue);
    if (isNaN(guess) || guess <= 0) return;

    setGuessedPrice(guess);
    setShowResult(true);
    setGamesPlayed((prev) => prev + 1);

    // Calculate score based on accuracy
    const difference = Math.abs(guess - currentProject.actualCost);
    const percentageDiff = (difference / currentProject.actualCost) * 100;

    let points = 0;
    if (percentageDiff <= 5) points = 100; // Perfect!
    else if (percentageDiff <= 10) points = 80; // Very good
    else if (percentageDiff <= 20) points = 60; // Good
    else if (percentageDiff <= 30) points = 40; // Okay
    else if (percentageDiff <= 50) points = 20; // Not bad
    else points = 10; // Try again

    setScore((prev) => prev + points);
  };

  const nextProject = () => {
    if (currentProjectIndex < gameProjects.length - 1) {
      setCurrentProjectIndex((prev) => prev + 1);
      setGuessedPrice(null);
      setInputValue('');
      setShowResult(false);
    }
  };

  const resetGame = () => {
    setCurrentProjectIndex(0);
    setGuessedPrice(null);
    setInputValue('');
    setShowResult(false);
    setScore(0);
    setGamesPlayed(0);
  };

  const difference = guessedPrice ? guessedPrice - currentProject.actualCost : 0;
  const percentageDiff = guessedPrice
    ? Math.abs((difference / currentProject.actualCost) * 100)
    : 0;

  const getAccuracyMessage = () => {
    if (percentageDiff <= 5) return { text: 'Perfekt! 🎯', color: 'text-green-600' };
    if (percentageDiff <= 10) return { text: 'Sehr gut! 👏', color: 'text-green-500' };
    if (percentageDiff <= 20) return { text: 'Gut geschätzt! 👍', color: 'text-blue-500' };
    if (percentageDiff <= 30) return { text: 'Nicht schlecht! 👌', color: 'text-yellow-600' };
    if (percentageDiff <= 50) return { text: 'Da geht noch was! 🤔', color: 'text-orange-500' };
    return { text: 'Weit daneben! 😅', color: 'text-red-500' };
  };

  const accuracyMessage = getAccuracyMessage();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-accent-50 via-background to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            <Trophy className="mr-2 h-4 w-4" />
            Preis-Rätsel
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Was hat diese Renovierung gekostet?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Testen Sie Ihr Gespür für Renovierungskosten! Raten Sie den Preis und vergleichen Sie mit dem tatsächlichen Wert.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Score Display */}
          {gamesPlayed > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center justify-center gap-6"
            >
              <div className="rounded-lg bg-primary-50 px-6 py-3 text-center">
                <p className="text-sm text-muted-foreground">Dein Score</p>
                <p className="text-2xl font-bold text-primary">{score} Punkte</p>
              </div>
              <div className="rounded-lg bg-muted px-6 py-3 text-center">
                <p className="text-sm text-muted-foreground">Gespielt</p>
                <p className="text-2xl font-bold text-foreground">
                  {currentProjectIndex + 1} / {gameProjects.length}
                </p>
              </div>
            </motion.div>
          )}

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Project Display */}
            <div>
              <Card variant="elevated" padding="none">
                <CardContent className="p-0">
                  {/* Before/After Slider */}
                  <div className="mb-4">
                    <BeforeAfterSlider
                      beforeImage={currentProject.before}
                      afterImage={currentProject.after}
                      beforeLabel="Vorher"
                      afterLabel="Nachher"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge variant="secondary" size="sm">
                        {currentProject.category}
                      </Badge>
                      <Badge variant="default" size="sm">
                        {currentProject.material}
                      </Badge>
                      <Badge variant="default" size="sm">
                        {currentProject.area}
                      </Badge>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{currentProject.title}</h3>
                    <p className="text-sm text-muted-foreground">{currentProject.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Guess Input */}
            <div>
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key="input"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Card variant="elevated" padding="lg">
                      <CardContent>
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-2 text-2xl font-bold">Ihre Schätzung</h3>
                            <p className="text-sm text-muted-foreground">
                              Was denken Sie, hat diese Renovierung gekostet?
                            </p>
                          </div>

                          <div>
                            <label htmlFor="price-guess" className="mb-2 block text-sm font-medium">
                              Geschätzter Preis
                            </label>
                            <div className="relative">
                              <input
                                id="price-guess"
                                type="number"
                                min="0"
                                step="100"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleGuess()}
                                placeholder="z.B. 12000"
                                className="w-full rounded-lg border border-border bg-background px-4 py-4 pr-12 text-lg font-semibold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                              />
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
                                €
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={handleGuess}
                            disabled={!inputValue || parseInt(inputValue) <= 0}
                            className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Preis prüfen
                            <ArrowRight className="ml-2 inline h-5 w-5" />
                          </button>

                          <div className="rounded-lg border border-accent-200 bg-accent-50 p-4">
                            <p className="text-xs text-accent-900">
                              <strong>Tipp:</strong> Berücksichtigen Sie Material, Fläche und Komplexität der Arbeit. Die Preise beinhalten Material und Arbeitskosten.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Card variant="elevated" padding="lg" className="border-2 border-primary">
                      <CardContent>
                        <div className="space-y-6">
                          {/* Result Header */}
                          <div className="text-center">
                            <Sparkles className="mx-auto mb-3 h-12 w-12 text-primary" />
                            <h3 className={cn('mb-2 text-3xl font-bold', accuracyMessage.color)}>
                              {accuracyMessage.text}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Sie waren {percentageDiff.toFixed(0)}% vom tatsächlichen Preis entfernt
                            </p>
                          </div>

                          {/* Price Comparison */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                              <span className="text-sm font-medium text-muted-foreground">Ihre Schätzung</span>
                              <span className="text-xl font-bold">
                                {guessedPrice?.toLocaleString('de-DE')}€
                              </span>
                            </div>
                            <div className="flex items-center justify-center">
                              {difference > 0 ? (
                                <div className="flex items-center text-red-500">
                                  <TrendingUp className="mr-2 h-5 w-5" />
                                  <span className="font-semibold">
                                    {Math.abs(difference).toLocaleString('de-DE')}€ zu hoch
                                  </span>
                                </div>
                              ) : difference < 0 ? (
                                <div className="flex items-center text-blue-500">
                                  <TrendingDown className="mr-2 h-5 w-5" />
                                  <span className="font-semibold">
                                    {Math.abs(difference).toLocaleString('de-DE')}€ zu niedrig
                                  </span>
                                </div>
                              ) : (
                                <div className="flex items-center text-green-500">
                                  <Minus className="mr-2 h-5 w-5" />
                                  <span className="font-semibold">Exakt richtig!</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-primary p-4 text-white">
                              <span className="text-sm font-medium">Tatsächlicher Preis</span>
                              <span className="text-2xl font-bold">
                                {currentProject.actualCost.toLocaleString('de-DE')}€
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="space-y-3">
                            {currentProjectIndex < gameProjects.length - 1 ? (
                              <button
                                onClick={nextProject}
                                className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl"
                              >
                                Nächstes Projekt
                                <ArrowRight className="ml-2 inline h-5 w-5" />
                              </button>
                            ) : (
                              <div className="space-y-3">
                                <Card variant="outlined" padding="md" className="bg-gradient-to-br from-primary-50 to-accent-50 text-center">
                                  <p className="mb-2 text-lg font-bold text-foreground">
                                    Spiel beendet! 🎉
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    Ihr Endstand: <strong>{score} Punkte</strong>
                                  </p>
                                </Card>
                                <button
                                  onClick={resetGame}
                                  className="w-full rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                                >
                                  <RefreshCw className="mr-2 inline h-4 w-4" />
                                  Nochmal spielen
                                </button>
                              </div>
                            )}

                            <a
                              href="#contact"
                              className="block w-full rounded-lg border-2 border-primary bg-background px-6 py-3 text-center text-sm font-semibold text-primary transition-all hover:bg-primary-50"
                            >
                              Kostenloses Angebot für Ihr Projekt
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 rounded-lg border border-accent-200 bg-accent-50 p-6 text-center">
            <p className="text-sm text-accent-900">
              <strong>Hinweis:</strong> Die gezeigten Preise sind realistische Schätzungen basierend auf Material, Fläche und Arbeitsaufwand.
              Jedes Projekt ist individuell – kontaktieren Sie uns für ein genaues Angebot für Ihre Renovierung!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
