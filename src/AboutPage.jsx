import { motion } from 'framer-motion';
import { Tabs, Tab, Card, CardBody, Accordion, AccordionItem } from '@heroui/react';
import { useSEO } from './hooks/useSEO';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-40" style={{ background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 100%)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-6xl md:text-7xl font-black" style={{ background: 'linear-gradient(135deg, #0066CC 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Historia
        </motion.h1>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
          <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Nosotros</h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#4B5563' }}>
            <p>
              En <strong>Pipod.co</strong> llevamos más de <strong>15 años ofreciendo soluciones</strong> especializadas para usuarios Apple en Colombia
            </p>
            <p>
              Somos tienda física y E-commerce y ofrecemos servicio técnico certificado enfocado en <strong>equipos Apple</strong>
            </p>
            <p>
              Somos una combinación de experiencia técnica y atención personalizada
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TabsSection() {
  const values = [
    {
      title: 'Transparencia',
      content: 'Mostramos todo el proceso de diagnóstico y reparación al cliente, sin sorpresas ni letra pequeña. Creemos en la honestidad como base de la confianza.'
    },
    {
      title: 'Precisión técnica',
      content: 'Somos especialistas en Apple. Cada reparación se realiza con conocimiento profundo, herramientas adecuadas y atención al detalle.'
    },
    {
      title: 'Cercanía y atención humana',
      content: 'Escuchamos al cliente, explicamos con claridad y acompañamos cada decisión técnica desde la empatía y el respeto.'
    },
    {
      title: 'Agilidad y eficiencia',
      content: 'Optimizamos cada proceso para respetar el tiempo del cliente. Atendemos rápido, pero con calidad'
    },
    {
      title: 'Compromiso con el crecimiento',
      content: 'Nos preparamos para ofrecer soluciones técnicas a empresas, escalando nuestro modelo sin perder el trato humano que nos define.'
    },
    {
      title: 'Solución real, no reemplazo innecesario',
      content: 'Reparamos donde otros reemplazan. Buscamos siempre la solución más eficiente y sostenible.'
    }
  ];

  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Tabs aria-label="Información de Pipod" className="w-full">
            <Tab key="vision" title="Visión" className="w-full">
              <Card>
                <CardBody className="py-8">
                  <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                    Ser sinónimo de confianza y eficiencia en productos Apple, para personas y empresas en Colombia.
                  </p>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="mission" title="Misión" className="w-full">
              <Card>
                <CardBody className="py-8">
                  <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                    Ofrecemos soporte técnico especializado en productos Apple, combinando precisión profesional con atención humana y cercana. Nuestro compromiso es brindar soluciones ágiles, transparentes y confiables a usuarios particulares
                  </p>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="values" title="Valores" className="w-full">
              <Card>
                <CardBody className="py-8">
                  <Accordion>
                    {values.map((value, idx) => (
                      <AccordionItem key={idx} title={value.title}>
                        <p style={{ color: '#4B5563' }}>{value.content}</p>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000' }} className="text-white">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4">Soporte / Ayuda</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Contáctanos</a></li>
              <li><a href="#" className="hover:text-blue-400">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-blue-400">Política de Devoluciones</a></li>
              <li><a href="#" className="hover:text-blue-400">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-blue-400">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">PLAN RETOMA</a></li>
              <li><a href="#" className="hover:text-blue-400">NUEVOS</a></li>
              <li><a href="#" className="hover:text-blue-400">USADOS</a></li>
              <li><a href="#" className="hover:text-blue-400">ACCESORIOS</a></li>
              <li><a href="#" className="hover:text-blue-400">BLOG</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Servicio Técnico Apple</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">iPhones</a></li>
              <li><a href="#" className="hover:text-blue-400">iPads</a></li>
              <li><a href="#" className="hover:text-blue-400">iMacs</a></li>
              <li><a href="#" className="hover:text-blue-400">MacBooks</a></li>
              <li><a href="#" className="hover:text-blue-400">SmartWatch</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">SÍGUENOS</h4>
            <div className="space-y-2">
              <p className="text-sm">Disponible en Play Store</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>Copyright © 2010 - 2025 Pipod.co</p>
          <p>Powered by Pipod.co</p>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  useSEO({
    title: 'Pipod - Nosotros',
    description: 'Conoce la historia, visión, misión y valores de Pipod. Más de 15 años especializados en servicio técnico Apple.',
    keywords: 'Pipod, nosotros, historia, visión, misión, valores',
    ogImage: 'https://pipod.co/og-image.jpg',
    ogUrl: 'https://pipod.co/nosotros'
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <AboutSection />
      <TabsSection />
      <Footer />
    </motion.div>
  );
}
