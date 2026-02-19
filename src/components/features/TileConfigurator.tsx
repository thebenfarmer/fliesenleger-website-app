'use client';

import { useState } from 'react';
import { Palette, Share2, RotateCcw, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface Room {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface TilePattern {
  id: string;
  name: string;
  category: string;
  color: string;
  texture: string;
  price: string;
  image: string;
}

const rooms: Room[] = [
  {
    id: 'bathroom',
    name: 'Badezimmer',
    icon: '🛁',
    description: 'Modern & Wellness',
  },
  {
    id: 'kitchen',
    name: 'Küche',
    icon: '🍳',
    description: 'Hygienisch & Stilvoll',
  },
  {
    id: 'living',
    name: 'Wohnzimmer',
    icon: '🛋️',
    description: 'Elegant & Gemütlich',
  },
];

const tilePatterns: TilePattern[] = [
  {
    id: 'marble-white',
    name: 'Carrara Marmor',
    category: 'Naturstein',
    color: '#f5f5f4',
    texture: 'marble',
    price: 'ab 85€/m²',
    image: '/images/materials/marmor.jpg',
  },
  {
    id: 'concrete-grey',
    name: 'Betonoptik Grau',
    category: 'Feinsteinzeug',
    color: '#78716c',
    texture: 'concrete',
    price: 'ab 65€/m²',
    image: '/images/materials/feinsteinzeug.jpg',
  },
  {
    id: 'wood-oak',
    name: 'Eiche Holzoptik',
    category: 'Feinsteinzeug',
    color: '#d4a574',
    texture: 'wood',
    price: 'ab 55€/m²',
    image: '/images/materials/grossformat.jpg',
  },
  {
    id: 'granite-black',
    name: 'Granit Schwarz',
    category: 'Naturstein',
    color: '#1c1917',
    texture: 'granite',
    price: 'ab 95€/m²',
    image: '/images/materials/granit.jpg',
  },
  {
    id: 'terracotta',
    name: 'Terrakotta',
    category: 'Keramik',
    color: '#974C30',
    texture: 'terracotta',
    price: 'ab 45€/m²',
    image: '/images/materials/feinsteinzeug.jpg',
  },
  {
    id: 'slate-anthracite',
    name: 'Schiefer Anthrazit',
    category: 'Naturstein',
    color: '#44403c',
    texture: 'slate',
    price: 'ab 75€/m²',
    image: '/images/materials/schiefer.jpg',
  },
];

export default function TileConfigurator() {
  const [selectedRoom, setSelectedRoom] = useState<Room>(rooms[0]);
  const [selectedWallTile, setSelectedWallTile] = useState<TilePattern>(tilePatterns[0]);
  const [selectedFloorTile, setSelectedFloorTile] = useState<TilePattern>(tilePatterns[1]);
  const [groutColor, setGroutColor] = useState<'white' | 'grey' | 'dark'>('grey');
  const [showShareModal, setShowShareModal] = useState(false);

  const groutColors = [
    { id: 'white', name: 'Weiß', color: '#ffffff' },
    { id: 'grey', name: 'Grau', color: '#a8a29e' },
    { id: 'dark', name: 'Dunkel', color: '#44403c' },
  ] as const;

  const handleReset = () => {
    setSelectedWallTile(tilePatterns[0]);
    setSelectedFloorTile(tilePatterns[1]);
    setGroutColor('grey');
  };

  const getConfigSummary = () => {
    return `Mein Fliesen-Design: ${selectedRoom.name} – Wand: ${selectedWallTile.name} (${selectedWallTile.price}), Boden: ${selectedFloorTile.name} (${selectedFloorTile.price}), Fuge: ${groutColors.find(g => g.id === groutColor)?.name}`;
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  return (
    <section id="konfigurator" className="py-12 md:py-20 bg-gradient-to-br from-accent-50 via-background to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            <Palette className="mr-2 h-4 w-4" />
            <span lang="en">Design Studio</span>
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Welcher Stil passt zu Ihnen? Probieren Sie es aus.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Testen Sie verschiedene Fliesenarten, Farben und Formate. Kostenlos und unverbindlich.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Room Selection */}
          <div className="mb-8">
            <h3 className="mb-4 text-center text-lg font-semibold">Wählen Sie einen Raum</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={cn(
                    'group rounded-xl border-2 p-6 text-center transition-all hover:border-primary hover:shadow-lg',
                    selectedRoom.id === room.id
                      ? 'border-primary shadow-lg'
                      : 'border-border bg-background'
                  )}
                >
                  <div className="mb-3 text-5xl">{room.icon}</div>
                  <p className="mb-1 text-lg font-bold">{room.name}</p>
                  <p className="text-sm text-muted-foreground">{room.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Preview Section */}
            <div className="lg:col-span-3">
              <Card variant="elevated" padding="none">
                <CardContent className="p-0">
                  {/* 3D Preview Area */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-muted">
                    {/* Floor */}
                    <div
                      className="absolute bottom-0 h-1/2 w-full"
                      style={{
                        backgroundColor: selectedFloorTile.color,
                        backgroundImage: `
                          linear-gradient(${groutColors.find(g => g.id === groutColor)?.color} 2px, transparent 2px),
                          linear-gradient(90deg, ${groutColors.find(g => g.id === groutColor)?.color} 2px, transparent 2px)
                        `,
                        backgroundSize: '60px 60px',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    {/* Wall */}
                    <div
                      className="absolute left-0 top-0 h-1/2 w-full"
                      style={{
                        backgroundColor: selectedWallTile.color,
                        backgroundImage: `
                          linear-gradient(${groutColors.find(g => g.id === groutColor)?.color} 2px, transparent 2px),
                          linear-gradient(90deg, ${groutColors.find(g => g.id === groutColor)?.color} 2px, transparent 2px)
                        `,
                        backgroundSize: '80px 80px',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
                    </div>

                    {/* Room Indicator */}
                    <div className="absolute left-4 top-4">
                      <Badge variant="default" size="md" className="bg-white/90 backdrop-blur-xs">
                        {selectedRoom.name}
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute right-4 top-4 flex gap-2">
                      <button
                        onClick={handleReset}
                        className="rounded-lg bg-white/90 p-2 backdrop-blur-xs transition-all hover:bg-white hover:shadow-lg"
                        title="Zurücksetzen"
                      >
                        <RotateCcw className="h-5 w-5 text-foreground" />
                      </button>
                      <button
                        onClick={handleShare}
                        className="rounded-lg bg-white/90 p-2 backdrop-blur-xs transition-all hover:bg-white hover:shadow-lg"
                        title="Design teilen"
                      >
                        <Share2 className="h-5 w-5 text-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="px-6 pt-4 text-xs text-muted-foreground">
                    Vereinfachte Darstellung – echte Materialien und Muster weichen ab.
                  </p>

                  {/* Summary */}
                  <div className="grid gap-4 p-6 md:grid-cols-3">
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <p className="mb-1 text-xs font-medium text-muted-foreground">Wandfliesen</p>
                      <p className="font-semibold">{selectedWallTile.name}</p>
                      <p className="text-xs text-primary">{selectedWallTile.price}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <p className="mb-1 text-xs font-medium text-muted-foreground">Bodenfliesen</p>
                      <p className="font-semibold">{selectedFloorTile.name}</p>
                      <p className="text-xs text-primary">{selectedFloorTile.price}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <p className="mb-1 text-xs font-medium text-muted-foreground">Fugenfarbe</p>
                      <p className="font-semibold">
                        {groutColors.find(g => g.id === groutColor)?.name}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card variant="outlined" padding="md" className="mt-6 border-2 border-primary bg-primary-50">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 font-bold">Diese Fliesen bei Ihnen zu Hause sehen?</h4>
                      <p className="text-sm text-muted-foreground">
                        Kostenlose Vor-Ort-Beratung mit Materialproben vereinbaren
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl"
                    >
                      Beratung anfragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Options Panel */}
            <div className="space-y-6 lg:col-span-2">
              {/* Wall Tiles */}
              <Card variant="outlined" padding="lg">
                <CardContent>
                  <h3 className="mb-4 text-lg font-bold">Wandfliesen</h3>
                  <div className="space-y-2">
                    {tilePatterns.map((pattern) => (
                      <button
                        key={`wall-${pattern.id}`}
                        onClick={() => setSelectedWallTile(pattern)}
                        className={cn(
                          'group flex w-full items-center gap-3 rounded-lg border-2 p-3 text-left transition-all hover:border-primary',
                          selectedWallTile.id === pattern.id
                            ? 'border-primary shadow-md'
                            : 'border-border'
                        )}
                      >
                        <div
                          className="h-12 w-12 shrink-0 rounded-md border border-border"
                          style={{ backgroundColor: pattern.color }}
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{pattern.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {pattern.category} • {pattern.price}
                          </p>
                        </div>
                        {selectedWallTile.id === pattern.id && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Floor Tiles */}
              <Card variant="outlined" padding="lg">
                <CardContent>
                  <h3 className="mb-4 text-lg font-bold">Bodenfliesen</h3>
                  <div className="space-y-2">
                    {tilePatterns.map((pattern) => (
                      <button
                        key={`floor-${pattern.id}`}
                        onClick={() => setSelectedFloorTile(pattern)}
                        className={cn(
                          'group flex w-full items-center gap-3 rounded-lg border-2 p-3 text-left transition-all hover:border-primary',
                          selectedFloorTile.id === pattern.id
                            ? 'border-primary shadow-md'
                            : 'border-border'
                        )}
                      >
                        <div
                          className="h-12 w-12 shrink-0 rounded-md border border-border"
                          style={{ backgroundColor: pattern.color }}
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{pattern.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {pattern.category} • {pattern.price}
                          </p>
                        </div>
                        {selectedFloorTile.id === pattern.id && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Grout Color */}
              <Card variant="outlined" padding="lg">
                <CardContent>
                  <h3 className="mb-4 text-lg font-bold">Fugenfarbe</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {groutColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setGroutColor(color.id)}
                        className={cn(
                          'group flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all hover:border-primary',
                          groutColor === color.id
                            ? 'border-primary shadow-md'
                            : 'border-border'
                        )}
                      >
                        <div
                          className="h-10 w-10 rounded-full border-2 border-border shadow-inner"
                          style={{ backgroundColor: color.color }}
                        />
                        <p className="text-sm font-medium">{color.name}</p>
                        {groutColor === color.id && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Share Modal */}
        <AnimatePresence>
          {showShareModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setShowShareModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md"
              >
                <Card variant="elevated" padding="lg">
                  <CardContent>
                    <h3 className="mb-4 text-xl font-bold">Design teilen</h3>
                    <p className="mb-6 text-sm text-muted-foreground">
                      Teilen Sie Ihr Design mit Familie, Freunden oder direkt mit uns für ein Angebot!
                    </p>
                    <div className="space-y-3">
                      <a
                        href={`mailto:?subject=Mein%20Fliesen-Design&body=${encodeURIComponent(getConfigSummary())}`}
                        className="block w-full rounded-lg border border-border bg-background p-3 text-left font-semibold transition-all hover:bg-muted"
                        onClick={() => setShowShareModal(false)}
                      >
                        📧 Per E-Mail teilen
                      </a>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(getConfigSummary())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-lg border border-border bg-background p-3 text-left font-semibold transition-all hover:bg-muted"
                        onClick={() => setShowShareModal(false)}
                      >
                        💬 WhatsApp
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(getConfigSummary());
                          setShowShareModal(false);
                        }}
                        className="w-full rounded-lg border border-border bg-background p-3 text-left font-semibold transition-all hover:bg-muted"
                      >
                        📋 In Zwischenablage kopieren
                      </button>
                      <button
                        onClick={() => setShowShareModal(false)}
                        className="w-full rounded-lg bg-muted p-3 font-semibold transition-all hover:bg-muted/80"
                      >
                        Schließen
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
