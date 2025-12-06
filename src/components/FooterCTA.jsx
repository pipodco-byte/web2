import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { MessageCircle } from 'lucide-react';

export function FooterCTA() {
  return (
    <section id="contacto" className="relative py-16 md:py-20 px-8 overflow-hidden" style={{ backgroundColor: '#121212' }}>
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
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight whitespace-nowrap" 
              style={{ 
                color: '#F9FAFB',
                letterSpacing: '-0.03em' 
              }}
            >
              ¿Listo para renovar?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#D1D5DB' }}>
              Agenda tu diagnóstico hoy y descubre cuánto vale tu dispositivo Apple.
            </p>
          </motion.div>

          {/* Columna 2: Botón */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-start md:justify-start items-start pt-0"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                as="a"
                href="https://wa.me/573124813094"
                size="lg"
                className="text-white px-8 py-6 text-lg font-bold transition-all shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 flex items-center gap-2"
                style={{ 
                  backgroundColor: '#25D366',
                  borderRadius: '16px'
                }}
                aria-label="Contactar por WhatsApp"
                startContent={<MessageCircle size={20} />}
              >
                Whatsapp
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
