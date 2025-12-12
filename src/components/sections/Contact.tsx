'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { Card } from '@/components/ui/Card';
import AvailabilityIndicator from '@/components/ui/AvailabilityIndicator';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Kostenlose Beratung vereinbaren
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie
            gerne und erstellen Ihnen einen kostenlosen Kostenvoranschlag.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            {/* Availability Indicator */}
            <AvailabilityIndicator weeksAhead={3} className="mb-6" />

            {submitSuccess ? (
              <Card variant="elevated" padding="lg" className="text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 text-2xl font-bold">Vielen Dank!</h3>
                <p className="text-muted-foreground">
                  Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns
                  schnellstmöglich bei Ihnen.
                </p>
                <Button
                  variant="primary"
                  className="mt-6"
                  onClick={() => setSubmitSuccess(false)}
                >
                  Weitere Anfrage senden
                </Button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Ihr Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Max Mustermann"
                />

                <Input
                  label="E-Mail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="max@mustermann.de"
                />

                <Input
                  label="Telefon"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="089 / 123 456"
                />

                <div className="w-full">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Leistung
                    <span className="ml-1 text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="flex h-11 w-full rounded-md border border-input bg-background px-4 py-2.5 text-base focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="bodenfliesen">Bodenfliesen</option>
                    <option value="wandfliesen">Wandfliesen</option>
                    <option value="naturstein">Naturstein</option>
                    <option value="mosaik">Mosaik</option>
                    <option value="badezimmer">Badezimmer</option>
                    <option value="aussenbereich">Außenbereich</option>
                    <option value="beratung">Allgemeine Beratung</option>
                  </select>
                </div>

                <Textarea
                  label="Ihre Nachricht"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Beschreiben Sie Ihr Projekt..."
                  rows={5}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                </Button>

                <p className="text-xs text-muted-foreground">
                  Mit dem Absenden stimmen Sie unserer{' '}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card variant="outlined" padding="lg">
              <h3 className="mb-6 text-xl font-semibold">Kontaktinformationen</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a
                      href="tel:+4989123456"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      089 / 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <a
                      href="mailto:info@fliesenleger-muenchen.de"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@fliesenleger-muenchen.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      Musterstraße 123
                      <br />
                      80331 München
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Öffnungszeiten</p>
                    <p className="text-muted-foreground">
                      Mo-Fr: 08:00 - 18:00 Uhr
                      <br />
                      Sa: Nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="outlined" padding="lg" className="bg-primary/5">
              <h3 className="mb-3 text-lg font-semibold">Schnelle Antwort garantiert</h3>
              <p className="text-sm text-muted-foreground">
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                Bei dringenden Anliegen rufen Sie uns einfach direkt an!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
