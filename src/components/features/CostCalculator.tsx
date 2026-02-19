'use client';

import { useState, useEffect } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Ruler, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface Material {
  id: string;
  name: string;
  category: string;
  priceMin: number;
  priceMax: number;
  icon: string;
}

const materials: Material[] = [
  {
    id: 'feinsteinzeug',
    name: 'Feinsteinzeug',
    category: 'Keramik',
    priceMin: 35,
    priceMax: 85,
    icon: '🏛️',
  },
  {
    id: 'marmor',
    name: 'Marmor',
    category: 'Naturstein',
    priceMin: 85,
    priceMax: 250,
    icon: '💎',
  },
  {
    id: 'granit',
    name: 'Granit',
    category: 'Naturstein',
    priceMin: 75,
    priceMax: 180,
    icon: '⛰️',
  },
  {
    id: 'glasmosaik',
    name: 'Glasmosaik',
    category: 'Mosaik',
    priceMin: 45,
    priceMax: 95,
    icon: '✨',
  },
  {
    id: 'grossformat',
    name: 'Großformat XXL',
    category: 'XXL-Fliesen',
    priceMin: 65,
    priceMax: 150,
    icon: '📐',
  },
  {
    id: 'schiefer',
    name: 'Schiefer',
    category: 'Naturstein',
    priceMin: 65,
    priceMax: 120,
    icon: '🪨',
  },
];

export default function CostCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [includeWalls, setIncludeWalls] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);
  const [showResult, setShowResult] = useState(false);

  const lengthNum = parseFloat(length) || 0;
  const widthNum = parseFloat(width) || 0;
  const heightNum = parseFloat(height) || 0;

  // Berechnungen
  const floorArea = lengthNum * widthNum;
  const wallArea = includeWalls && heightNum > 0
    ? 2 * (lengthNum * heightNum) + 2 * (widthNum * heightNum)
    : 0;
  const totalArea = floorArea + wallArea;

  const materialCostMin = totalArea * selectedMaterial.priceMin;
  const materialCostMax = totalArea * selectedMaterial.priceMax;

  // Arbeitskosten (ca. 30-50€/m²)
  const laborCostMin = totalArea * 30;
  const laborCostMax = totalArea * 50;

  const totalCostMin = materialCostMin + laborCostMin;
  const totalCostMax = materialCostMax + laborCostMax;

  useEffect(() => {
    if (totalArea > 0) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [totalArea]);

  const handleReset = () => {
    setLength('');
    setWidth('');
    setHeight('');
    setIncludeWalls(false);
    setShowResult(false);
  };

  return (
    <section id="kostenrechner" className="py-12 md:py-20 bg-gradient-to-br from-primary-50 via-background to-accent-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            <Calculator className="mr-2 h-4 w-4" />
            Kostenrechner
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Was kostet Ihr Projekt? Finden Sie es in 30 Sekunden heraus.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Unser Kalkulator gibt Ihnen eine erste Schätzung. Für den verbindlichen
            Festpreis vereinbaren Sie eine kostenlose Beratung.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <Card variant="elevated" padding="lg">
              <CardContent>
                <div className="space-y-6">
                  {/* Material Selection */}
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-foreground">
                      <Layers className="mr-2 inline h-4 w-4" />
                      Material auswählen
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {materials.map((material) => (
                        <button
                          key={material.id}
                          onClick={() => setSelectedMaterial(material)}
                          className={cn(
                            'group relative rounded-lg border-2 p-4 text-left transition-all hover:border-primary hover:shadow-md',
                            selectedMaterial.id === material.id
                              ? 'border-primary bg-primary-50 shadow-md'
                              : 'border-border bg-background'
                          )}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="mb-1 flex items-center space-x-2">
                                <span className="text-2xl">{material.icon}</span>
                                <span className="font-semibold text-sm">{material.name}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{material.category}</p>
                              <p className="mt-2 text-xs font-medium text-primary">
                                {material.priceMin}-{material.priceMax}€/m²
                              </p>
                            </div>
                            {selectedMaterial.id === material.id && (
                              <CheckCircle2 className="h-5 w-5 text-primary" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-foreground">
                      <Ruler className="mr-2 inline h-4 w-4" />
                      Raummaße eingeben
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="length" className="mb-2 block text-xs font-medium text-muted-foreground">
                          Länge (Meter)
                        </label>
                        <input
                          id="length"
                          type="number"
                          step="0.1"
                          min="0"
                          max="50"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          placeholder="z.B. 4.5"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                        />
                      </div>
                      <div>
                        <label htmlFor="width" className="mb-2 block text-xs font-medium text-muted-foreground">
                          Breite (Meter)
                        </label>
                        <input
                          id="width"
                          type="number"
                          step="0.1"
                          min="0"
                          max="50"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          placeholder="z.B. 3.2"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Wall Tiles Option */}
                  <div>
                    <label className="flex cursor-pointer items-center space-x-3 rounded-lg border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50">
                      <input
                        type="checkbox"
                        checked={includeWalls}
                        onChange={(e) => setIncludeWalls(e.target.checked)}
                        className="h-5 w-5 rounded border-border text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                      <div className="flex-1">
                        <span className="block text-sm font-medium text-foreground">
                          Wandfliesen inkludieren
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Fügen Sie die Wandfläche zu Ihrer Berechnung hinzu
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Wall Height (conditional) */}
                  <AnimatePresence>
                    {includeWalls && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <label htmlFor="height" className="mb-2 block text-xs font-medium text-muted-foreground">
                          Wandhöhe (Meter)
                        </label>
                        <input
                          id="height"
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          placeholder="z.B. 2.4"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Reset Button */}
                  {showResult && (
                    <button
                      onClick={handleReset}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      Eingaben zurücksetzen
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Result Section */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {showResult ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    {/* Warning for extreme values */}
                    {totalArea > 200 && (
                      <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
                        <p className="text-sm text-amber-800">
                          <strong>Hinweis:</strong> Bei Flächen über 200 m² empfehlen wir eine individuelle Beratung für eine genauere Kalkulation.
                        </p>
                      </div>
                    )}

                    {/* Summary Card */}
                    <Card variant="elevated" padding="lg" className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-white/90">Geschätzte Gesamtkosten (inkl. MwSt.)</p>
                            <motion.p
                              key={`${totalCostMin}-${totalCostMax}`}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                              className="mt-2 text-2xl font-bold text-white md:text-3xl"
                            >
                              {totalCostMin.toLocaleString('de-DE', { maximumFractionDigits: 0 })}€ -{' '}
                              {totalCostMax.toLocaleString('de-DE', { maximumFractionDigits: 0 })}€
                            </motion.p>
                          </div>
                          <div className="flex items-center space-x-4 border-t border-white/30 pt-4">
                            <div>
                              <p className="text-xs text-white/80">Gesamtfläche</p>
                              <p className="text-xl font-semibold text-white">{totalArea.toFixed(1)} m²</p>
                            </div>
                            <div className="h-8 w-px bg-white/30" />
                            <div>
                              <p className="text-xs text-white/80">Material</p>
                              <p className="text-xl font-semibold text-white">{selectedMaterial.name}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Breakdown */}
                    <Card variant="outlined" padding="lg">
                      <CardContent>
                        <h3 className="mb-4 text-lg font-semibold text-foreground">Kostenaufschlüsselung</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                            <div>
                              <p className="text-sm font-medium text-foreground">Materialkosten</p>
                              <p className="text-xs text-muted-foreground">
                                {totalArea.toFixed(1)} m² × {selectedMaterial.priceMin}-{selectedMaterial.priceMax}€/m²
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-primary">
                              {materialCostMin.toLocaleString('de-DE', { maximumFractionDigits: 0 })}€ -{' '}
                              {materialCostMax.toLocaleString('de-DE', { maximumFractionDigits: 0 })}€
                            </p>
                          </div>
                          <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                            <div>
                              <p className="text-sm font-medium text-foreground">Arbeitskosten</p>
                              <p className="text-xs text-muted-foreground">
                                {totalArea.toFixed(1)} m² × 30-50€/m²
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-primary">
                              {laborCostMin.toLocaleString('de-DE', { maximumFractionDigits: 0 })}€ -{' '}
                              {laborCostMax.toLocaleString('de-DE', { maximumFractionDigits: 0 })}€
                            </p>
                          </div>
                          {floorArea > 0 && (
                            <div className="flex items-center justify-between border-t border-border pt-3">
                              <p className="text-sm text-muted-foreground">Bodenfläche</p>
                              <p className="text-sm font-medium">{floorArea.toFixed(1)} m²</p>
                            </div>
                          )}
                          {wallArea > 0 && (
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-muted-foreground">Wandfläche</p>
                              <p className="text-sm font-medium">{wallArea.toFixed(1)} m²</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card variant="outlined" padding="lg" className="border-2 border-primary bg-primary-50">
                      <CardContent>
                        <div className="text-center">
                          <h3 className="mb-2 text-lg font-semibold text-foreground">
                            Das ist eine erste Schätzung.
                          </h3>
                          <p className="mb-4 text-sm text-muted-foreground">
                            Ihren verbindlichen Festpreis erhalten Sie nach einer kostenlosen Vor-Ort-Beratung – garantiert ohne Nachforderungen.
                          </p>
                          <a
                            href="#contact"
                            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl"
                          >
                            Jetzt kostenloses Festpreis-Angebot anfordern
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                          <p className="mt-3 text-xs text-muted-foreground">
                            Kostenlos & unverbindlich. Antwort in 24h. Festpreis-Garantie.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[400px] items-center justify-center"
                  >
                    <Card variant="outlined" padding="lg" className="w-full">
                      <CardContent>
                        <div className="text-center">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                            <Calculator className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-foreground">
                            Bereit für die Berechnung
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Geben Sie die Raummaße ein, um eine Kostenschätzung zu erhalten.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Info Notice */}
              <div className="rounded-lg border border-accent-200 bg-accent-50 p-4">
                <p className="text-xs text-accent-900">
                  <strong>Hinweis:</strong> Dies ist eine unverbindliche Schätzung. Der tatsächliche Preis kann je nach spezifischen Anforderungen, Untergrundvorbereitung und örtlichen Gegebenheiten variieren. Für ein genaues Angebot kontaktieren Sie uns bitte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
