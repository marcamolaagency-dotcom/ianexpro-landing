import React from 'react';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Comparison from './components/Comparison';
import Curriculum from './components/Curriculum';
import Founder from './components/Founder';
import Pricing from './components/Pricing';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500 selection:text-black">
      <Hero />
      <Methodology />
      <Comparison />
      <Curriculum />
      <Founder />
      <Pricing />
      
      <footer className="bg-black py-10 text-center text-gray-600 border-t border-white/5">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2026 IA Next Pro. Todos los derechos reservados.</p>
          <p className="text-sm">Edición Enero 2026 • Formación Online Presencial</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;