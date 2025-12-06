bout Page (Nosotros)
**Archivo: src/pages/AboutPage.jsx**

```jsx
import { motion } from 'framer-motion';
import { Tabs, Tab, Card, CardBody, Accordion, AccordionItem } from '@heroui/react';

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