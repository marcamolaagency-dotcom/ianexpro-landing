import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Problem Side */}
          <div className="relative p-8 rounded-3xl bg-red-950/10 border border-red-900/30">
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm">✕</span>
              La mayoría en 2025
            </h3>
            <ul className="space-y-4">
              {[
                "Usan ChatGPT solo como un 'Google mejorado'.",
                "Se pierden en la teoría sin aplicar nada real.",
                "Tardan horas en tareas que la IA hace en segundos.",
                "No saben integrar Claude con sus flujos de trabajo.",
                "Sienten ansiedad por el avance rápido de la tecnología."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Side */}
          <div className="relative p-8 rounded-3xl bg-green-950/10 border border-green-900/30 shadow-[0_0_50px_rgba(20,83,45,0.2)]">
            <h3 className="text-2xl font-bold text-green-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-sm">✓</span>
              Tú en Febrero 2026
            </h3>
            <ul className="space-y-4">
              {[
                "Dominas Claude 4.5 para análisis estratégico profundo.",
                "Creas apps funcionales con Artifacts sin saber código.",
                "Tienes 7+ agentes IA trabajando para ti 24/7.",
                "Multiplicas x5 tu velocidad de producción profesional.",
                "Te posicionas como el experto en IA de tu sector."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;