import React from 'react';
import { FEATURES } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Metodología <span className="text-gold-500">Radicalmente Diferente</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Olvídate de los cursos grabados donde te quedas con dudas. 
            IA Next Pro es una experiencia inmersiva, en vivo y de ejecución inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-dark-900 border border-white/10 p-8 rounded-2xl hover:border-gold-500/50 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-dark-800 to-black rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;