'use client';

import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function StickyContactBar() {
  const whatsappNumber = '4989123456'; // Format: Ländercode + Nummer ohne +
  const whatsappMessage = encodeURIComponent(
    'Hallo, ich interessiere mich für ein kostenloses Festpreis-Angebot.'
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden">
      <div className="flex divide-x divide-primary-700 bg-primary shadow-lg">
        <a
          href="tel:+4989123456"
          className="flex flex-1 items-center justify-center space-x-2 py-3.5 text-white transition-colors hover:bg-primary-600 active:bg-primary-700"
        >
          <Phone className="h-5 w-5" />
          <span className="text-sm font-medium">Anrufen</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center space-x-2 py-3.5 text-white transition-colors hover:bg-primary-600 active:bg-primary-700"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>

        <a
          href="mailto:info@fliesenleger-muenchen.de"
          className="flex flex-1 items-center justify-center space-x-2 py-3.5 text-white transition-colors hover:bg-primary-600 active:bg-primary-700"
        >
          <Mail className="h-5 w-5" />
          <span className="text-sm font-medium">E-Mail</span>
        </a>
      </div>
    </div>
  );
}
