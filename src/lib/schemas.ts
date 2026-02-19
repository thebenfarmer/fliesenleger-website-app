import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { error: 'Name muss mindestens 2 Zeichen lang sein' }),
  email: z.email({ error: 'Ungültige E-Mail-Adresse' }),
  phone: z.string().optional(),
  service: z.string().min(1, { error: 'Bitte wählen Sie eine Leistung aus' }),
  message: z.string().min(10, { error: 'Nachricht muss mindestens 10 Zeichen lang sein' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
