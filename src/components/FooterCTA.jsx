import { motion } from 'framer-motion';
import { Button } from '@heroui/react';

export function FooterCTA() {
  return (
    <section id="contacto" className="relative py-48 px-8 overflow-hidden" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Columna 1: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              ¿Listo para renovar?
            </h2>
            <p className="text-base md:text-lg" style={{ color: '#D1D5DB' }}>
              Agenda tu diagnóstico hoy y descubre cuánto vale tu dispositivo Apple.
            </p>
          </motion.div>

          {/* Columna 2: Botón */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 h-full justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Button
                className="w-full text-white text-lg px-12 py-6 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all"
                style={{ backgroundColor: '#0066CC' }}
                aria-label="Agendar cita de retoma"
              >
                Agendar Cita
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
