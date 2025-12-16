import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La Diferencia es <span className="text-gold-500">Estratégica</span></h2>
            <p className="text-gray-400">No se trata de saber usar la herramienta, se trata de saber dirigirla.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Problem Side */}
          <div className="relative p-8 rounded-3xl bg-red-950/10 border border-red-900/30">
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm">✕</span>
              El Profesional Saturado
            </h3>
            <ul className="space-y-4">
              {[
                "Usa GPT-4o para corregir correos, infrautilizando su potencial.",
                "Pierde horas intentando que la IA entienda el contexto del negocio.",
                "Sigue operativo en tareas que deberían estar automatizadas.",
                "Siente que su equipo o competencia avanza más rápido.",
                "No tiene tiempo para aprender con cursos teóricos interminables."
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
              Tú como Líder Aumentado
            </h3>
            <ul className="space-y-4">
              {[
                "Dominas el Prompt Engineering para dirigir, no para operar.",
                "Tienes agentes IA ejecutando tareas complejas 24/7.",
                "Analizas estrategias y datos masivos en minutos, no días.",
                "Creas software y soluciones internas sin depender de terceros.",
                "Te conviertes en el referente tecnológico de tu sector."
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