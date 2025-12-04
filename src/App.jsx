import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Menu, X, HelpCircle } from 'lucide-react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input, Card, CardBody, Accordion, AccordionItem, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Image, Chip, ButtonGroup, Spinner, Avatar, Divider } from '@heroui/react';
import { useSEO } from './hooks/useSEO';
import { FooterCTA } from './components/FooterCTA';
import { Hero } from './components/Hero';
import { BENEFITS, STEPS, CHECKLIST, FAQS, PRODUCTS } from './data/constants';

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };
const slideInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const slideInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['beneficios', 'como-funciona', 'recomendaciones', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Recomendaciones', href: '#recomendaciones' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <Navbar isBordered={scrolled} className={`fixed z-50 transition-all duration-300 ${scrolled ? 'bg-gray-100/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <NavbarBrand>
          <div className={`text-3xl font-bold ${scrolled ? 'text-black' : 'text-black'}`}>Pipod</div>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-10" justify="end">
          {navLinks.map((link) => (
            <NavbarItem key={link.href}>
              <a href={link.href} className={`text-sm font-medium text-gray-700 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 rounded ${activeSection === link.href.slice(1) ? 'opacity-100 font-bold' : ''}`}>
                {link.label}
              </a>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent className="md:hidden" justify="end">
          <button onClick={() => setMobileOpen(true)} className="p-2 text-black focus-visible:outline-2 focus-visible:outline-offset-2 rounded" aria-label="Abrir menú">
            <Menu size={24} />
          </button>
        </NavbarContent>
      </Navbar>

      <Drawer isOpen={mobileOpen} onOpenChange={setMobileOpen} placement="right">
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center">
            <span className="text-2xl font-bold">Menú</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Cerrar menú" className="focus-visible:outline-2 focus-visible:outline-offset-2 rounded">
              <X size={24} />
            </button>
          </DrawerHeader>
          <DrawerBody>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`block text-lg font-medium py-2 px-4 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    activeSection === link.href.slice(1)
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function Products() {
  return (
    <section className="py-16 px-8" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16">
          {PRODUCTS.map((product, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }} whileHover={{ scale: 1.08, y: -5 }} className={`cursor-pointer px-4 md:px-6 py-8 md:py-12 text-center transition-colors duration-300 ${i === 2 ? 'md:ml-12' : ''}`}>
              <Avatar src={product.img} alt={product.label} size="xl" className="w-20 h-20 mx-auto mb-4" isBordered color="primary" />
              <div className="text-4xl md:text-5xl font-bold tracking-wide" style={{ color: '#1D1D1F' }}>{product.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="py-40 px-6" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <span className="text-[10px] uppercase font-black tracking-[0.4em]" style={{ color: '#9CA3AF' }}>APROVECHA TU EQUIPO USADO</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ letterSpacing: "-0.03em" }} style={{ color: '#F9FAFB' }} id="beneficios-heading">Beneficios</h2>
            <p className="text-base leading-relaxed" style={{ color: '#9CA3AF' }}>El Plan Retoma de Pipod te permite renovar tu equipo con beneficios económicos y ambientales. Obtén el mejor valor por tu dispositivo usado y contribuye a un futuro más sostenible.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-12">
              {BENEFITS.slice(0, 2).map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08, duration: 0.5 }} whileHover={{ y: -15, scale: 1.05 }} className="group">
                    <Card className="p-8 rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: '#FFFFFF' }}>
                      <CardBody className="flex flex-col items-center text-center">
                        <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F3F4F6' }}>
                          <IconComponent size={40} className={`transition-colors ${item.hoverColor}`} style={{ color: '#000000' }} />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug" style={{ color: '#1F2937' }}>{item.title}</h3>
                        <p className="text-base leading-relaxed" style={{ color: "#4B5563" }}>{item.desc}</p>
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
                    <Card className="p-8 rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: '#FFFFFF' }}>
                      <CardBody className="flex flex-col items-center text-center">
                        <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F3F4F6' }}>
                          <IconComponent size={40} className={`transition-colors ${item.hoverColor}`} style={{ color: '#000000' }} />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug" style={{ color: '#1F2937' }}>{item.title}</h3>
                        <p className="text-base leading-relaxed" style={{ color: "#4B5563" }}>{item.desc}</p>
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

function Steps() {
  return (
    <section id="como-funciona" className="py-32 px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-24 space-y-8">
          <h2 className="text-6xl md:text-7xl font-black tracking-tight" style={{ color: '#1F2937' }} id="steps-heading">Tres pasos: un nuevo equipo</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {STEPS.map((step, idx) => {
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08, duration: 0.5 }} whileHover={{ y: -15 }} className="relative text-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 rounded">
                <motion.div whileHover={{ scale: 1.15, rotate: 8 }} transition={{ type: 'spring', stiffness: 300 }} className="relative z-10 mx-auto mb-10">
                  <Chip size="lg" variant="solid" color="primary" className="text-4xl font-black w-28 h-28 shadow-2xl hover:shadow-3xl transition-shadow" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
                    {step.number}
                  </Chip>
                </motion.div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-8xl font-black -z-10" style={{ color: '#E0E0E0' }} aria-hidden="true">{idx + 1}</div>
                <h3 className="text-4xl font-black mb-4" style={{ color: '#1F2937' }}>{step.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Checklist() {
  return (
    <section id="recomendaciones" className="py-32 px-8" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-24 space-y-8">
          <span className="text-[10px] uppercase font-black tracking-[0.4em]" style={{ color: '#9CA3AF' }}>RECOMENDACIONES</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight" style={{ color: '#F9FAFB' }} id="checklist-heading">Antes de entregar tu equipo, asegúrate de</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHECKLIST.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08, duration: 0.4 }} whileHover={{ scale: 1.05, x: 5 }} className="flex items-start gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 rounded p-2">
              <motion.div whileHover={{ rotate: 12 }} className="flex-shrink-0 mt-1">
                <item.icon style={{ color: '#0066CC' }} size={28} />
              </motion.div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#FFFFFF' }}>{item.title}</h3>
                <p className="text-base" style={{ color: '#D1D5DB' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const leftFAQs = FAQS.slice(0, 6);
  const rightFAQs = FAQS.slice(6, 12);

  const FAQColumn = ({ faqs, startIdx }) => (
    <div className="space-y-4">
      <Accordion variant="splitted" selectionMode="multiple" hideIndicator>
        {faqs.map((faq, idx) => (
          <AccordionItem key={startIdx + idx} title={faq.q} className="text-xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-2" style={{ color: '#1F2937' }} startContent={<HelpCircle size={20} style={{ color: '#0066CC' }} />}>
            <div className="text-base leading-relaxed" style={{ color: '#4B5563' }}>{faq.a}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <section id="faq" className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-4 block" style={{ color: '#9CA3AF' }}>Dudas</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4" style={{ color: '#1F2937' }} id="faq-heading">Preguntas Frecuentes</h2>
          <p className="text-base uppercase tracking-[0.2em]" style={{ color: '#6E6E6E' }}>Todo sobre el Plan Retoma</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <FAQColumn faqs={leftFAQs} startIdx={0} />
          <FAQColumn faqs={rightFAQs} startIdx={6} />
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [status, setStatus] = useState('idle');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const timeoutRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setError('');
    if (!validateEmail(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }
    setStatus('loading');
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setStatus('success');
      setEmail('');
      const successTimeout = setTimeout(() => setStatus('idle'), 3000);
      return () => clearTimeout(successTimeout);
    }, 1500);
  }, [email]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="max-w-xl mx-auto px-6 text-center">
      <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Mantente Informado</h3>
      <p className="mb-10 text-base md:text-base leading-relaxed" style={{ color: '#D1D5DB' }}>Recibe ofertas exclusivas del Plan Retoma y novedades sobre dispositivos Apple.<br/><span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#9CA3AF' }}>Sin spam, solo valor</span></p>
      {status === 'success' ? (
        <div className="p-8 rounded-2xl shadow-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', fontSize: '1.125rem' }}>✓ ¡Gracias! Revisa tu correo.</div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-2xl p-2 shadow-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <ButtonGroup className="w-full">
            <label htmlFor="newsletter-email" className="sr-only">Correo electrónico</label>
            <Input id="newsletter-email" type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === 'loading'} className="flex-1 text-base focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: 'transparent', color: '#FFFFFF' }} required />
            <Button type="submit" disabled={status === 'loading'} className="text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all disabled:opacity-70 shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: '#3B82F6' }}>
              {status === 'loading' ? (
                <><Spinner size="sm" className="mr-2" />Enviando...</>
              ) : (
                'Suscribirse'
              )}
            </Button>
          </ButtonGroup>
          {error && <p className="text-red-400 text-sm mt-2" role="alert">{error}</p>}
        </form>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000' }}>
      <div className="py-32">
        <Newsletter />
      </div>
      <Divider className="bg-gray-800" />
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" aria-label="Facebook" className="focus-visible:outline-2 focus-visible:outline-offset-2 rounded">
            <Facebook className="cursor-pointer transition-all hover:scale-125" style={{ color: '#FFFFFF' }} size={28} />
          </a>
          <a href="#" aria-label="Instagram" className="focus-visible:outline-2 focus-visible:outline-offset-2 rounded">
            <Instagram className="cursor-pointer transition-all hover:scale-125" style={{ color: '#FFFFFF' }} size={28} />
          </a>
          <a href="#" aria-label="Twitter" className="focus-visible:outline-2 focus-visible:outline-offset-2 rounded">
            <Twitter className="cursor-pointer transition-all hover:scale-125" style={{ color: '#FFFFFF' }} size={28} />
          </a>
          <a href="#" aria-label="LinkedIn" className="focus-visible:outline-2 focus-visible:outline-offset-2 rounded">
            <Linkedin className="cursor-pointer transition-all hover:scale-125" style={{ color: '#FFFFFF' }} size={28} />
          </a>
        </div>
        <div className="text-center" style={{ color: '#6E6E6E' }}>
          <p className="text-lg mb-6">© 2025 Pipod. Todos los derechos reservados.</p>
          <div className="space-x-8 text-sm uppercase tracking-[0.15em]">
            <a href="#" className="transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 rounded" style={{ color: '#6E6E6E' }}>Privacidad</a>
            <a href="#" className="transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 rounded" style={{ color: '#6E6E6E' }}>Términos</a>
            <a href="#" className="transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 rounded" style={{ color: '#6E6E6E' }}>Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useSEO({
    title: 'Pipod - Plan Retoma de Dispositivos Apple',
    description: 'Entrega tu dispositivo Apple usado (iPhone, MacBook, iMac, Apple Watch) y recibe crédito para comprar equipo nuevo o reacondicionado. Proceso transparente, sostenible y flexible.',
    keywords: 'retoma, iPhone, MacBook, Apple, dispositivos usados, crédito, descuento, Bogotá, Plan Retoma',
    ogImage: 'https://pipod.co/og-image.jpg',
    ogUrl: 'https://pipod.co'
  });

  return (
    <motion.div className="font-inter antialiased" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <NavbarComponent />
      <Hero />
      <Products />
      <Benefits />
      <Steps />
      <Checklist />
      <FAQ />
      <FooterCTA />
      <Footer />
    </motion.div>
  );
}
