import React from 'react';

const Founder: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-dark-800 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          
          <div className="w-full md:w-1/3">
             <div className="relative group">
                <div className="absolute inset-0 bg-gold-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                {/* Placeholder image for Jaime */}
                <img 
                  src="https://picsum.photos/id/1/400/500" 
                  alt="Jaime Rodríguez" 
                  className="relative w-full rounded-2xl border-2 border-gold-500/50 grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-2">Jaime Rodríguez</h2>
            <p className="text-gold-500 font-medium mb-6">Fundador IA Next Pro • Pionero en IA desde 2019</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                En 2019 vine a España a estudiar un Máster en IA cuando todos me preguntaban "¿Para qué sirve eso?". 
              </p>
              <p>
                Durante 3 años vi la evolución silenciosa de esta tecnología. Hoy, la brecha es real: hay quienes usan ChatGPT como un juguete y quienes lo usamos para 
                <strong className="text-white"> multiplicar nuestra productividad x10.</strong>
              </p>
              <p>
                Fundé <strong>IA Next Pro</strong> con una obsesión: no enseñarte teoría, sino mostrarte exactamente cómo uso 
                Claude Sonnet 4.5 y Artifacts en mi día a día para gestionar negocios, analizar datos y crear software sin programar.
              </p>
              <blockquote className="border-l-4 border-gold-500 pl-4 mt-6 italic text-white">
                "No quiero que veas videos. Quiero que en 4 semanas tengas un sistema de IA funcionando para tu profesión."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;