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
            <p className="text-gold-500 font-medium mb-6">Fundador IA Next Pro • Consultor de IA para Directivos</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Como <strong>empresario, emprendedor y profesional</strong>, sé que tu activo más valioso es el tiempo. En 2019 vine a España a especializarme en IA, no para escribir código, sino para <strong>resolver problemas de negocio.</strong>
              </p>
              <p>
                He visto la brecha crecer: profesionales experimentados perdiendo relevancia por no adaptarse, y juniors usando herramientas potentes sin criterio estratégico.
              </p>
              <p>
                Fundé <strong>IA Next Pro</strong> con una premisa: <strong>Respetar tu tiempo y tu experiencia.</strong> No te enseñaré teoría básica. Te enseñaré a integrar las <strong>últimas versiones de Claude, ChatGPT y Artifacts</strong> en tu flujo de trabajo ejecutivo para multiplicar tu impacto.
              </p>
              <blockquote className="border-l-4 border-gold-500 pl-4 mt-6 italic text-white">
                "Este no es un curso para aprender a usar un chat. Es un entrenamiento para directivos que quieren escalar sus capacidades usando la mejor tecnología disponible."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;