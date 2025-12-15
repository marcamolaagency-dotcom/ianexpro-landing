import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { PRICING_INCLUDES, WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-black">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto bg-dark-800 rounded-3xl border border-gold-500/30 overflow-hidden relative shadow-[0_0_60px_rgba(212,175,55,0.1)]">
          
          {/* Badge */}
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-black text-center py-2 font-bold uppercase tracking-wider text-sm">
            Cierre de Inscripciones: 31 Diciembre
          </div>

          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl text-gray-300 mb-4">Inversión Total Programa Enero 2026</h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-gray-500 line-through text-2xl">€1,497</span>
              <span className="text-6xl font-black text-white">€497</span>
            </div>
            <p className="text-gold-500 font-semibold mb-8">IVA Incluido • Opción de 2 pagos disponible</p>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full block bg-white text-black font-black text-xl py-5 rounded-xl hover:bg-gray-200 transition-colors mb-8"
            >
              SOLICITAR PLAZA AHORA
            </a>

            <div className="text-left space-y-3 bg-dark-900/50 p-6 rounded-xl border border-white/5">
              <p className="text-white font-bold mb-2">¿Qué incluye?</p>
              {PRICING_INCLUDES.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                  <Check className="w-4 h-4 text-gold-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-xs">
               <ShieldCheck className="w-4 h-4" />
               Garantía de Resultados: Si no mejoras tu productividad, te devolvemos el dinero.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;