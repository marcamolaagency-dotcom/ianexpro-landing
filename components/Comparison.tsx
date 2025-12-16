import React from 'react';
import { Check, X, Clock, Zap, Award, BookOpen } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              No estudies teoría. <span className="text-gold-500">Instala un Sistema.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Mientras otros dedican 4 meses a ver vídeos grabados, tú tendrás tu "Command Center" operativo en 4 semanas.
            </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 items-center">
          
          {/* Competitor Column */}
          <div className="bg-dark-900/50 border border-white/5 rounded-2xl p-8 md:col-span-1 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-gray-400 mb-2">Escuelas de Negocio / Mass Market</h3>
            <div className="text-2xl font-bold text-gray-500 mb-8 line-through decoration-red-500/50">€1,000 - €3,500</div>
            
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0" />
                <span><strong className="block text-gray-300">Lento (3-6 Meses)</strong>Demasiada teoría, poco tiempo para ejecutar.</span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-red-500 shrink-0" />
                <span><strong className="block text-gray-300">Vídeos Grabados</strong>Dudas sin resolver y contenido desactualizado al mes siguiente.</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-red-500 shrink-0" />
                <span><strong className="block text-gray-300">Solo un Título</strong>Un diploma para LinkedIn, pero sin impacto real en tu cuenta de resultados.</span>
              </li>
            </ul>
          </div>

          {/* IA Next Pro Column (Winner) */}
          <div className="bg-gradient-to-b from-dark-800 to-black border-2 border-gold-500 rounded-3xl p-8 md:p-10 md:col-span-2 relative shadow-[0_0_50px_rgba(212,175,55,0.15)] transform md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MEJOR ROI DEL MERCADO
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-black text-white italic">IA Next Pro</h3>
                <p className="text-gold-500 text-sm font-semibold tracking-wider">ACTION CAMP PARA DIRECTIVOS</p>
              </div>
              <div className="text-right">
                 <div className="text-sm text-gray-400 line-through">Valor real: €1,497</div>
                 <div className="text-4xl md:text-5xl font-black text-white">€497</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <strong className="block text-white text-lg">Velocidad Extrema (4 Semanas)</strong>
                    <p className="text-gray-400 text-sm">Sin paja. Solo estrategias de implementación inmediata en sesiones de 90 min.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <strong className="block text-white text-lg">100% En Vivo & Práctico</strong>
                    <p className="text-gray-400 text-sm">Implementas CONMIGO en tiempo real. Sales de clase con el trabajo hecho.</p>
                  </div>
                </li>
              </ul>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <strong className="block text-white text-lg">Sistema Operativo CEO</strong>
                    <p className="text-gray-400 text-sm">No te doy un título, te doy una ventaja competitiva injusta (Agents, Artifacts, Análisis).</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-900/40 flex items-center justify-center shrink-0">
                    <span className="text-green-500 font-bold">€</span>
                  </div>
                  <div>
                    <strong className="block text-white text-lg">Ahorro Masivo</strong>
                    <p className="text-gray-400 text-sm">No contrates una consultora por €3,000. Aprende a dirigir la IA tú mismo.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;