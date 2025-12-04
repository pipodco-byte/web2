import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Diagnóstico Experto",
    desc: "Evaluación profesional de tu dispositivo Apple con tecnología de última generación.",
    img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=800&auto=format&fit=crop",
    delay: 0.2
  },
  {
    title: "Reparación Certificada",
    desc: "Técnicos especializados en Apple con garantía de 12 meses en todos los servicios.",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    delay: 0.4
  },
  {
    title: "Plan Retoma Premium",
    desc: "Obtén el mejor valor por tu equipo usado y aplícalo a tu próxima compra.",
    img: "https://images.unsplash.com/photo-1507608869274-2c33ee13db69?q=80&w=800&auto=format&fit=crop",
    delay: 0.6
  }
];

const PipodFeatures = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900 rounded-full mix-blend-screen filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Título de la Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4" style={{ color: '#F9FAFB' }}>
            Servicios Premium
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ background: 'linear-gradient(to right, transparent, #06B6D4, transparent)' }} />
        </motion.div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item.delay, type: "spring", stiffness: 50 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
            >
              
              {/* Imagen con efecto Zoom al hacer Hover */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-80" />
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido de Texto */}
              <div className="p-8 relative z-20 -mt-12">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors" style={{ color: '#F9FAFB' }}>
                  {item.title}
                </h3>
                <p className="text-stone-300 leading-relaxed text-base" style={{ color: '#D1D5DB' }}>
                  {item.desc}
                </p>
                
                {/* Botón sutil */}
                <div className="mt-6 flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" style={{ color: '#06B6D4' }}>
                  Explorar 
                  <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipodFeatures;
