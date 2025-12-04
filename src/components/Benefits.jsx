import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { BENEFITS } from '../data/constants';
import '../styles/shimmer.css';

const slideInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

export function Benefits() {
  return (
    <section id="beneficios" className="py-40 px-6" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <span className="text-[10px] uppercase font-black tracking-[0.4em]" style={{ color: '#9CA3AF' }}>APROVECHA TU EQUIPO USADO</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight shimmer-beneficios" style={{ letterSpacing: "-0.03em", color: '#F9FAFB' }} id="beneficios-heading">Beneficios</h2>
            <p className="text-base leading-relaxed" style={{ color: '#9CA3AF' }}>El Plan Retoma de Pipod te permite renovar tu equipo con beneficios económicos y ambientales. Obtén el mejor valor por tu dispositivo usado y contribuye a un futuro más sostenible.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-12">
              {BENEFITS.slice(0, 2).map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08, duration: 0.5 }} whileHover={{ y: -15, scale: 1.05, boxShadow: '0 20px 40px rgba(0, 102, 204, 0.2)' }} className="group">
                    <Card className="p-8 rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: '#121212', backdropFilter: 'blur(10px)', border: 'none' }}>
                      <CardBody className="flex flex-col items-center text-center" style={{ backgroundColor: '#121212', borderRadius: '1.5rem', border: 'none' }}>
                        <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shimmer-icon" style={{ backgroundColor: '#121212' }} data-icon-index={idx}>
                          <IconComponent size={40} className={`transition-colors ${item.hoverColor} icon-shimmer`} style={{ color: '#FFFFFF' }} />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug" style={{ color: '#FFFFFF' }}>{item.title}</h3>
                        <p className="text-base leading-relaxed" style={{ color: "#D1D5DB" }}>{item.desc}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            <div className="space-y-12 pt-0">
              {BENEFITS.slice(2, 4).map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={idx + 2} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (idx + 2) * 0.08, duration: 0.5 }} whileHover={{ y: -15, scale: 1.05 }} className="group">
                    <Card className="p-8 rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: '#121212', backdropFilter: 'blur(10px)', border: 'none' }}>
                      <CardBody className="flex flex-col items-center text-center" style={{ backgroundColor: '#121212', borderRadius: '1.5rem', border: 'none' }}>
                        <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shimmer-icon" style={{ backgroundColor: '#121212' }} data-icon-index={idx + 2}>
                          <IconComponent size={40} className={`transition-colors ${item.hoverColor} icon-shimmer`} style={{ color: '#FFFFFF' }} />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug" style={{ color: '#FFFFFF' }}>{item.title}</h3>
                        <p className="text-base leading-relaxed" style={{ color: "#D1D5DB" }}>{item.desc}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
