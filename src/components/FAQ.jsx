import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from '@heroui/react';

const FAQS = [
  { q: '¿Cuánto tarda el proceso de valoración?', a: 'El diagnóstico inicial toma entre 30-60 minutos. La evaluación completa y oferta final se entrega el mismo día.' },
  { q: '¿Qué tipos de equipos reciben?', a: 'Aceptamos iPhone, MacBook, iMac, Apple Watch y otros dispositivos Apple.' },
  { q: '¿Aceptan equipos rotos o con pantalla partida?', a: 'Sí, evaluamos equipos con daños menores. El valor se ajusta según el estado real del dispositivo.' },
  { q: '¿Puedo vender mi equipo en efectivo sin hacer retoma?', a: 'Sí, ofrecemos opciones de compra directa en efectivo.' },
  { q: '¿Qué garantía tiene el equipo reacondicionado?', a: 'Los equipos reacondicionados incluyen garantía de 12 meses.' },
  { q: '¿Puedo pedir valoración sin llevar el equipo?', a: 'Puedes solicitar una valoración inicial por fotos o video.' },
  { q: '¿Puedo usar el crédito en cualquier producto?', a: 'El crédito se puede aplicar a productos nuevos o reacondicionados según tus preferencias.' },
  { q: '¿Qué pasa si mi dispositivo tiene datos?', a: 'Recomendamos respaldar y borrar todos tus datos antes de entregar el equipo.' },
  { q: '¿Qué pasa si no acepto la oferta?', a: 'Sin problema. Puedes rechazar la oferta sin compromiso.' },
  { q: '¿El crédito se puede transferir a otra persona?', a: 'El crédito es personal y no transferible.' },
  { q: '¿Puedo entregar más de un equipo?', a: 'Sí, puedes entregar múltiples equipos. Cada uno se evalúa por separado.' },
  { q: '¿Cómo funciona el domicilio?', a: 'Ofrecemos servicio de recogida a domicilio en Bogotá.' }
];

export default function FAQ({ isDark }) {
  return (
    <section id="faq" className={`py-32 px-6 ${isDark ? 'bg-charcoal' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16 space-y-4">
          <span className={`text-xs uppercase font-black tracking-widest ${isDark ? 'text-soft-gray' : 'text-soft-gray'}`}>Dudas</span>
          <h2 className={`text-5xl md:text-6xl font-black ${isDark ? 'text-white' : 'text-dark-gray'}`}>Preguntas Frecuentes</h2>
          <p className={`text-base ${isDark ? 'text-soft-gray' : 'text-dim-gray'}`}>Todo sobre el Plan Retoma</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Accordion 
            variant="splitted"
            className="gap-4"
            itemClasses={{
              base: `px-6 py-4 ${isDark ? 'bg-charcoal/50 border-zinc-600' : 'bg-white border-platinum'}`,
              title: `font-semibold ${isDark ? 'text-white' : 'text-dark-gray'}`,
              trigger: `hover:${isDark ? 'bg-charcoal/70' : 'bg-light-gray'}`,
              content: `text-sm ${isDark ? 'text-soft-gray' : 'text-cool-gray'}`
            }}
          >
            {FAQS.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                aria-label={faq.q}
                title={faq.q}
                className={`border rounded-xl backdrop-blur-md transition-all ${isDark ? 'border-zinc-600 hover:shadow-lg' : 'border-platinum hover:shadow-md'}`}
              >
                {faq.a}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
