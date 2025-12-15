import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white fill-white" />
    </a>
  );
};

export default FloatingWhatsApp;