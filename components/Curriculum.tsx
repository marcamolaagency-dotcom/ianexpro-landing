import React from 'react';
import { SYLLABUS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan de Estudios <span className="text-gold-500">Enero 2026</span></h2>
          <p className="text-gray-400">4 Semanas de inmersión total y construcción de portafolio.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SYLLABUS.map((week, idx) => (
            <div key={idx} className="bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors">
              <div className="text-gold-500 text-sm font-bold tracking-wider mb-2">{week.week}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{week.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{week.description}</p>
              <ul className="space-y-2">
                {week.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <ChevronRight className="w-4 h-4 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;