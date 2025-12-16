import React from 'react';
import { Check, ShieldCheck, AlertTriangle } from 'lucide-react';
import { PRICING_INCLUDES, WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-black">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto bg-dark-800 rounded-3xl border border-gold-500/30 overflow-hidden relative shadow-[0_0_60px_rgba(212,175,55,0.1)]">
          
          {/* Badge */}
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-black text-center py-2 font-bold uppercase tracking-wider text-sm">
            Precio de Lanzamiento "Cohorte Beta 2026"
          </div>

          <div className="p-8 md:p-12 text-center">
            
            <div className="mb-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl text-left">
              <p className="text-blue-200 text-sm flex gap-3 items-start">
                <span className="text-xl">💡</span>
                <span>
                  <strong>Dato Clave:</strong> Una consultora técnica te cobraría más de <strong>€2,500</strong> solo por configurarte los agentes que aprenderás a crear tú mismo en la primera semana.
                </span>
              </p>
            </div>

            <h3 className="text-xl text-gray-400 mb-2">Inversión Única (Sin mensualidades)</h3>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-gray-600 line-through text-2xl decoration-red-500">€1,497</span>
              <span className="text-7xl font-black text-white tracking-tighter">€497</span>
            </div>
            <p className="text-gold-500 font-medium mb-8 text-sm uppercase tracking-wide">
              Solo disponible para las 10 plazas de Enero
            </p>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative w-full block bg-white text-black font-black text-xl py-5 rounded-xl hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg mb-8"
            >
              SOLICITAR ENTREVISTA DE ACCESO
              <span className="block text-xs font-normal text-gray-600 mt-1 group-hover:text-black">
                Sin compromiso de compra. Filtramos por perfil profesional.
              </span>
            </a>

            <div className="text-left space-y-4 bg-dark-900/50 p-6 rounded-xl border border-white/5">
              <p className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-center md:text-left">Tu Arsenal Incluye:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {PRICING_INCLUDES.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-gray-400 text-xs border-t border-white/10 pt-6">
               <div className="flex items-center gap-2 text-gold-400 font-bold">
                 <ShieldCheck className="w-5 h-5" />
                 GARANTÍA DE "RIESGO CERO"
               </div>
               <p className="max-w-md mx-auto">
                 Si en la <strong>Clase 1</strong> no has automatizado al menos una tarea real de tu negocio, te devolvemos el 100% del dinero. Sin preguntas.
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;