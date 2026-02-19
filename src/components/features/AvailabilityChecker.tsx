'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight, User, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AvailableDate {
  date: Date;
  slots: TimeSlot[];
}

// Generiere verfügbare Termine für die nächsten 14 Tage
const generateAvailableDates = (): AvailableDate[] => {
  const dates: AvailableDate[] = [];
  const today = new Date();

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Nur Werktage (Mo-Fr)
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;

    // Verfügbare Slots pro Tag
    const allSlots = ['09:00', '10:30', '13:00', '14:30', '16:00'];
    const slots: TimeSlot[] = allSlots.map(time => ({
      time,
      available: Math.random() > 0.4, // 60% verfügbar
    }));

    dates.push({ date, slots });
  }

  return dates;
};

export default function AvailabilityChecker() {
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setAvailableDates(generateAvailableDates());
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const selectedDateData = availableDates.find(
    d => d.date.toDateString() === selectedDate?.toDateString()
  );

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep('form');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise API-Call stattfinden
    setStep('success');
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('de-DE', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    }).format(date);
  };

  const formatFullDate = (date: Date) => {
    return new Intl.DateTimeFormat('de-DE', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary-50 via-background to-accent-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            Terminbuchung
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Wann kann Ihr Projekt starten?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Als Meisterbetrieb betreuen wir nur 2-3 Projekte gleichzeitig -- für volle
            Aufmerksamkeit auf Ihr Projekt. Prüfen Sie unsere aktuelle Verfügbarkeit.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {step === 'calendar' && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  {/* Calendar Section */}
                  <div className="lg:col-span-2">
                    <Card variant="elevated" padding="lg">
                      <CardContent>
                        <h3 className="mb-6 flex items-center text-xl font-bold">
                          <Calendar className="mr-2 h-5 w-5 text-primary" />
                          Verfügbare Termine
                        </h3>

                        {/* Date Grid */}
                        <div className="mb-6 grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                          {availableDates.slice(0, 10).map((dateData) => {
                            const isSelected = selectedDate?.toDateString() === dateData.date.toDateString();
                            const availableSlots = dateData.slots.filter(s => s.available).length;

                            return (
                              <button
                                key={dateData.date.toISOString()}
                                onClick={() => handleDateSelect(dateData.date)}
                                className={cn(
                                  'group rounded-lg border-2 p-3 text-center transition-all hover:border-primary hover:shadow-md',
                                  isSelected
                                    ? 'border-primary shadow-lg'
                                    : 'border-border bg-background'
                                )}
                              >
                                <p className="mb-1 text-xs font-medium text-muted-foreground">
                                  {formatDate(dateData.date).split(',')[0]}
                                </p>
                                <p className="mb-2 text-lg font-bold">
                                  {dateData.date.getDate()}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {availableSlots} {availableSlots === 1 ? 'Slot' : 'Slots'}
                                </p>
                              </button>
                            );
                          })}
                        </div>

                        {/* Time Slots */}
                        {selectedDate && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="rounded-lg border border-border bg-muted/30 p-4">
                              <h4 className="mb-4 flex items-center text-sm font-semibold">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                Verfügbare Zeiten am {formatFullDate(selectedDate)}
                              </h4>
                              <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-5">
                                {selectedDateData?.slots.map((slot) => (
                                  <button
                                    key={slot.time}
                                    onClick={() => slot.available && handleTimeSelect(slot.time)}
                                    disabled={!slot.available}
                                    className={cn(
                                      'rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all',
                                      selectedTime === slot.time
                                        ? 'border-primary bg-primary text-white'
                                        : slot.available
                                        ? 'border-border bg-background hover:border-primary hover:shadow-md'
                                        : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                                    )}
                                  >
                                    {slot.time}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Summary Section */}
                  <div>
                    <Card variant="outlined" padding="lg" className="sticky top-24">
                      <CardContent>
                        <h3 className="mb-4 text-lg font-bold">Ihre Auswahl</h3>

                        <div className="mb-6 space-y-3">
                          <div className="flex items-start space-x-3 rounded-lg bg-muted p-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Datum</p>
                              <p className="font-semibold">
                                {selectedDate ? formatFullDate(selectedDate) : 'Nicht ausgewählt'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 rounded-lg bg-muted p-3">
                            <Clock className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Uhrzeit</p>
                              <p className="font-semibold">
                                {selectedTime || 'Nicht ausgewählt'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleContinue}
                          disabled={!selectedDate || !selectedTime}
                          className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Weiter zur Buchung
                          <ArrowRight className="ml-2 inline h-4 w-4" />
                        </button>

                        <div className="mt-6 rounded-lg border border-accent-200 bg-accent-50 p-4">
                          <p className="text-xs text-accent-900">
                            <strong>✓</strong> Kostenlos & unverbindlich<br />
                            <strong>✓</strong> Persönliche Beratung<br />
                            <strong>✓</strong> Individuelles Angebot
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto max-w-2xl">
                  <Card variant="elevated" padding="lg">
                    <CardContent>
                      <h3 className="mb-6 text-2xl font-bold">Ihre Kontaktdaten</h3>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            <User className="mr-2 inline h-4 w-4" />
                            Vor- und Nachname *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Max Mustermann"
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                              <Mail className="mr-2 inline h-4 w-4" />
                              E-Mail *
                            </label>
                            <input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="max@beispiel.de"
                              className="w-full rounded-lg border border-border bg-background px-4 py-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                              <Phone className="mr-2 inline h-4 w-4" />
                              Telefon *
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="089 / 123 456"
                              className="w-full rounded-lg border border-border bg-background px-4 py-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="address" className="mb-2 block text-sm font-medium">
                            <MapPin className="mr-2 inline h-4 w-4" />
                            Adresse des Projekts *
                          </label>
                          <input
                            id="address"
                            type="text"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            placeholder="Musterstraße 123, 80333 München"
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="mb-2 block text-sm font-medium">
                            Ihr Projekt (optional)
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        </div>

                        <div className="rounded-lg bg-primary-50 p-4">
                          <p className="mb-2 text-sm font-semibold">Ihr gewählter Termin:</p>
                          <p className="text-sm">
                            📅 {selectedDate && formatFullDate(selectedDate)}<br />
                            🕐 {selectedTime} Uhr
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setStep('calendar')}
                            className="flex-1 rounded-lg border border-border bg-background px-6 py-3 font-semibold transition-all hover:bg-muted"
                          >
                            Zurück
                          </button>
                          <button
                            type="submit"
                            className="flex-1 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl"
                          >
                            Termin bestätigen
                          </button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mx-auto max-w-2xl text-center">
                  <Card variant="elevated" padding="lg" className="border-2 border-green-500">
                    <CardContent>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle2 className="mx-auto mb-6 h-20 w-20 text-green-500" />
                      </motion.div>

                      <h3 className="mb-4 text-3xl font-bold text-green-600">
                        Termin erfolgreich gebucht! 🎉
                      </h3>

                      <p className="mb-6 text-lg text-muted-foreground">
                        Vielen Dank, {formData.name}! Wir haben Ihren Termin für den{' '}
                        <strong>{selectedDate && formatFullDate(selectedDate)}</strong> um{' '}
                        <strong>{selectedTime} Uhr</strong> vorgemerkt.
                      </p>

                      <div className="mb-6 rounded-lg bg-muted p-6 text-left">
                        <h4 className="mb-3 font-semibold">Was passiert jetzt?</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>Sie erhalten eine Bestätigungs-E-Mail an <strong>{formData.email}</strong></span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>Wir rufen Sie vorher unter <strong>{formData.phone}</strong> an</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>Unser Meister kommt pünktlich zu Ihnen nach <strong>{formData.address}</strong></span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>Sie erhalten noch am selben Tag ein kostenloses Angebot</span>
                          </li>
                        </ul>
                      </div>

                      <button
                        onClick={() => {
                          setStep('calendar');
                          setSelectedDate(null);
                          setSelectedTime(null);
                          setFormData({ name: '', email: '', phone: '', address: '', message: '' });
                        }}
                        className="rounded-lg border border-border bg-background px-6 py-3 font-semibold transition-all hover:bg-muted"
                      >
                        Weiteren Termin buchen
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
