import React from 'react';
import { Calendar, Video, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20 pb-16">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[20%] w-[2px] h-[2px] bg-white opacity-20 shadow-[0_0_100px_100px_rgba(255,255,255,0.1)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 font-semibold text-sm backdrop-blur-md animate-pulse-slow">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            EN VIVO • 4 CLASES DE 90 MIN
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-semibold text-sm backdrop-blur-md">
            <Calendar className="w-4 h-4" />
            INICIO: 1ª SEMANA ENERO 2026
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
          Domina <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Claude Sonnet 4.5</span>
          <br /> y GPT-5.2 en 2026
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 font-light leading-relaxed">
          Diseñado exclusivamente para <strong className="text-white font-semibold">CEOs, emprendedores y profesionales senior</strong> con poco tiempo.
          <br className="hidden md:block" />
          Domina el <strong className="text-gold-400">Prompt Engineering Avanzado</strong> en 4 sesiones de 90 minutos, 100% prácticas y sin teoría de relleno.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full font-bold text-black text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-3"
          >
            Aplicar para una plaza
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="text-gray-400 text-sm font-medium">
            ⚠️ Solo 10 plazas para perfiles cualificados
          </div>
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Tecnologías para Alta Dirección</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold flex items-center gap-2"><span className="text-gold-500 text-2xl">✦</span> Claude 4.5</span>
             <span className="text-xl font-bold flex items-center gap-2"><span className="text-green-500 text-2xl">●</span> GPT-5.2</span>
             <span className="text-xl font-bold flex items-center gap-2"><span className="text-blue-400 text-2xl">◈</span> Perplexity</span>
             <span className="text-xl font-bold flex items-center gap-2"><span className="text-purple-500 text-2xl">⚡</span> Artifacts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;