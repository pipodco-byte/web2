import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@heroui/react';

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20
    });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 100%)' }} onMouseMove={handleMouseMove}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-16 pt-0">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)' }} role="status" aria-label="Plan Retoma 2025">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} aria-hidden="true">
                <Sparkles size={16} style={{ color: '#06B6D4' }} />
              </motion.div>
              <span className="text-xs font-semibold tracking-wider" style={{ color: '#1D1D1F' }}>PLAN RETOMA 2025</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mt-0" style={{ color: '#1D1D1F' }} animate={{ y: mousePosition.y * 0.5 }} transition={{ type: 'spring', stiffness: 100, damping: 30 }}>Renueva tu<br/>equipo</motion.h1>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl" style={{ color: '#4B5563' }} animate={{ y: mousePosition.y * 0.3 }} transition={{ type: 'spring', stiffness: 100, damping: 30 }}>El Plan Retoma de Pipod te permite entregar tu dispositivo Apple usado (iPhone, Macbook, iMac, SmartWatch) y recibir un descuento por la compra de un equipo nuevo o reacondicionado. Aplicable para clientes particulares y empresas.</motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Button className="text-white px-8 sm:px-14 py-4 sm:py-5 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all" style={{ backgroundColor: '#0066CC' }} aria-label="Agendar cita para Plan Retoma">
                  Agendar Cita
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold border-2 hover:bg-gray-100 transition-all" style={{ borderColor: '#0066CC', color: '#0066CC', backgroundColor: 'transparent' }} aria-label="Ver proceso del Plan Retoma">
                  Ver proceso
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="video-container mt-0">
            <iframe src="https://player.vimeo.com/video/732211917" frameBorder="none" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups" style={{ border: 'none' }}></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
