# Código Completo - Pipod Web2-Github

## 1. Header Component
**Archivo: src/components/Header.jsx**

```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Navbar } from '@heroui/react';
import { Link } from 'react-router-dom';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'TODO', href: '/' },
    { label: 'ACCESORIOS', href: '/' },
    { label: 'PLAN RETOMA', href: '/plan-retoma' },
    { label: 'NOSOTROS', href: '/nosotros' },
    { label: 'CONTÁCTANOS', href: '/' },
    { label: 'BLOG', href: '/' }
  ];

  return (
    <Navbar isBordered className="fixed z-50 bg-white/95 backdrop-blur-md">
      <div className="w-full flex flex-col items-center gap-4 py-2">
        <Link to="/" className="text-2xl font-bold" style={{ color: '#0066CC' }}>
          Pipod
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm font-semibold hover:text-blue-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden absolute right-4 top-4 p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-20 left-0 right-0 bg-white border-b md:hidden">
          <div className="flex flex-col gap-4 p-4 text-center">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm font-semibold hover:text-blue-600" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </Navbar>
  );
}
```

## 2. Home Page
**Archivo: src/pages/HomePage.jsx**

```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button, Card, CardBody } from '@heroui/react';

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-40" style={{ background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 100%)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl font-black leading-tight" style={{ background: 'linear-gradient(135deg, #0066CC 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Servicio Técnico Especializado en Apple
          </motion.h1>
          <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-light max-w-2xl" style={{ color: '#4B5563' }}>
            Diagnóstico preciso, repuestos de calidad y garantía en tu reparación
          </motion.h3>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
              CONOCER MÁS
            </Button>
            <Button as="a" href="https://wa.me/573124813094" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold">
              AGENDA
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientLogosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logos = [
    { id: 1, name: 'Cliente 1' },
    { id: 2, name: 'Cliente 2' },
    { id: 3, name: 'Cliente 3' },
    { id: 4, name: 'Cliente 4' },
    { id: 5, name: 'Cliente 5' }
  ];

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === logos.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: '#1F2937' }}>Nuestros Clientes</h2>
        </motion.div>
        <div className="flex items-center justify-between gap-4">
          <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100" aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>
          <div className="flex-1 overflow-hidden">
            <motion.div className="flex gap-8 justify-center" animate={{ x: -currentIndex * 100 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              {logos.map((logo) => (
                <div key={logo.id} className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100" aria-label="Siguiente">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: 'Reparación de equipos',
      description: 'Servicio técnico especializado en iPhone, MacBook, iMac y SmartWatch',
      features: 'Diagnóstico rápido, repuestos de calidad y garantía',
      cta: 'AGENDA'
    },
    {
      title: 'Plan Retoma',
      description: 'Cambia lo viejo por lo nuevo',
      features: 'Trae tu equipo usado y úsalo como parte de pago para la compra de un equipo nuevo, renovado o reparado',
      cta: 'Saber Más'
    },
    {
      title: 'Accesorios',
      description: 'Cargadores originales, cables, fundas y más',
      features: 'Protege tu inversión de tus equipos Apple',
      cta: 'IR A TIENDA'
    }
  ];

  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black" style={{ color: '#1F2937' }}>Nuestros Servicios</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -10 }}>
              <Card className="h-full">
                <CardBody className="space-y-4 p-8">
                  <h3 className="text-2xl font-bold" style={{ color: '#1F2937' }}>{service.title}</h3>
                  <p className="text-lg font-semibold" style={{ color: '#0066CC' }}>{service.description}</p>
                  <p style={{ color: '#4B5563' }}>{service.features}</p>
                  <Button className="bg-blue-600 text-white mt-4">
                    {service.cta}
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFeatures() {
  const features = [
    {
      title: 'Diagnóstico transparente',
      description: 'Te mostramos el estado real de tu equipo, sin sorpresas ni costos ocultos'
    },
    {
      title: 'Especialistas Apple',
      description: 'Más de 15 años de experiencia reparando exclusivamente productos Apple en Bogotá'
    },
    {
      title: 'Reparación ágil',
      description: 'Optimizamos procesos para devolverte tu dispositivo Apple en el menor tiempo posible'
    },
    {
      title: 'Trato humano y cercano',
      description: 'No tratamos con clientes, tratamos con personas. Te explicamos con claridad'
    }
  ];

  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#1F2937' }}>{feature.title}</h3>
              <p style={{ color: '#4B5563' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <ClientLogosCarousel />
      <ServicesSection />
      <ServiceFeatures />
      <HomeFooter />
    </motion.div>
  );
}
```

## 3. About Page (Nosotros)
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
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <AboutSection />
      <TabsSection />
      <Footer />
    </motion.div>
  );
}
```

## 4. App.jsx (Routing Principal)
**Archivo: src/App.jsx**

```jsx
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from './hooks/useSEO';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlanRetomaPage from './plan-retoma';

export default function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === '/';
  const isAbout = pathname === '/nosotros';
  const isPlanRetoma = pathname === '/plan-retoma';

  useSEO({
    title: isAbout ? 'Pipod - Nosotros' : isPlanRetoma ? 'Pipod - Plan Retoma' : 'Pipod - Servicio Técnico Especializado en Apple',
    description: isAbout ? 'Conoce la historia, visión, misión y valores de Pipod.' : isPlanRetoma ? 'Plan Retoma de Pipod - Entrega tu dispositivo usado y recibe crédito.' : 'Servicio Técnico Especializado en Apple.',
    keywords: 'Pipod, Apple, servicio técnico',
    ogImage: 'https://pipod.co/og-image.jpg',
    ogUrl: 'https://pipod.co'
  });

  return (
    <motion.div className="font-inter antialiased" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Header />
      {isHome && <HomePage />}
      {isAbout && <AboutPage />}
      {isPlanRetoma && <PlanRetomaPage />}
    </motion.div>
  );
}
```

## 5. useSEO Hook
**Archivo: src/hooks/useSEO.js**

```jsx
import { useEffect } from 'react';

export function useSEO({ title, description, keywords, ogImage, ogUrl }) {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
  }, [title, description, keywords]);
}
```

## Paleta de Colores
- **Primario**: #0066CC (Azul)
- **Secundario**: #06B6D4 (Cyan)
- **Fondo Oscuro**: #000000, #121212, #1B1B1B
- **Fondo Claro**: #FFFFFF, #F9FAFB, #F3F4F6
- **Texto**: #1F2937 (Dark Gray), #4B5563 (Cool Gray)
- **Acentos**: #86EFAC (Mint Green), #3B82F6 (Blue Primary)

## Rutas
- `/` - Home Page
- `/nosotros` - About Page
- `/plan-retoma` - Plan Retoma Page
