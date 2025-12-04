import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Lightbulb, Heart, Leaf, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input, Card, CardBody, Accordion, AccordionItem } from '@heroui/react';

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.2 } } };

const BENEFITS = [
  { icon: Lightbulb, title: 'Ahorro inmediato', desc: 'Tu dispositivo usado se valora y ese monto se convierte en crédito o descuento para el nuevo. Esto permite reducir el costo al momento de la compra.', hoverColor: 'group-hover:text-yellow-400' },
  { icon: Heart, title: 'Proceso transparente', desc: 'Revisamos tu equipo, te mostramos cómo llegamos al valor. Sabes lo que estás entregando, lo que vale y lo que recibirás.', hoverColor: 'group-hover:text-red-400' },
  { icon: Leaf, title: 'Sostenible', desc: 'Al dar tu equipo usado, se promueve su reutilización o reciclaje. Esto reduce residuos electrónicos y beneficia al medio ambiente.', hoverColor: 'group-hover:text-green-400' },
  { icon: Send, title: 'Decisión flexible', desc: 'El crédito que obtienes puede aplicarse a productos nuevos o reacondicionados (según tus reglas). Puedes elegir qué equipo comprar.', hoverColor: 'group-hover:text-blue-400' }
];

const STEPS = [
  { number: '1', title: 'Diagnóstico', desc: 'Trae tu equipo a nuestra tienda y solicita un diagnóstico. También podemos programar una recogida.' },
  { number: '2', title: 'Evaluación', desc: 'Revisamos tu equipo: IMEI, batería, pantalla, puertos, sensores de humedad y funcionamiento general.' },
  { number: '3', title: 'Equipo Nuevo', desc: 'Aplicamos el crédito a la compra de un nuevo o reacondicionado. Te entregamos comprobante.' }
];

const CHECKLIST = ['Respaldar tu información', 'Cerrar sesiones activas', 'Desactivar Find My/Buscar mi dispositivo', 'Limpiar el dispositivo', 'Incluir cargador original si es posible'];

const FAQS = [
  { q: '¿Cuánto tarda el proceso de valoración?', a: 'El diagnóstico inicial toma entre 30-60 minutos. La evaluación completa y oferta final se entrega el mismo día.' },
  { q: '¿Qué tipos de equipos reciben?', a: 'Aceptamos iPhone, MacBook, iMac, Apple Watch y otros dispositivos Apple. Evaluamos cada equipo según modelo, estado y funcionalidad.' },
  { q: '¿Aceptan equipos rotos o con pantalla partida?', a: 'Sí, evaluamos equipos con daños menores. El valor se ajusta según el estado real del dispositivo tras el diagnóstico.' },
  { q: '¿Puedo vender mi equipo en efectivo sin hacer retoma?', a: 'Sí, ofrecemos opciones de compra directa en efectivo. Contáctanos para conocer los detalles y condiciones.' },
  { q: '¿Qué garantía tiene el equipo reacondicionado que compre con mi crédito?', a: 'Los equipos reacondicionados incluyen garantía de 12 meses. Todos pasan por un proceso riguroso de revisión y certificación.' },
  { q: '¿Puedo pedir valoración sin llevar el equipo?', a: 'Puedes solicitar una valoración inicial por fotos o video. La oferta final se confirma después de la inspección física en tienda.' },
  { q: '¿Puedo usar el crédito en cualquier producto?', a: 'El crédito se puede aplicar a productos nuevos o reacondicionados según tus preferencias. Consulta disponibilidad de modelos.' },
  { q: '¿Qué pasa si mi dispositivo tiene datos?', a: 'Recomendamos respaldar y borrar todos tus datos antes de entregar el equipo. Nosotros realizamos un borrado seguro adicional.' },
  { q: '¿Qué pasa si no acepto la oferta?', a: 'Sin problema. Puedes rechazar la oferta sin compromiso. Tu equipo se devuelve en las mismas condiciones.' },
  { q: '¿El crédito se puede transferir a otra persona?', a: 'El crédito es personal y no transferible. Debe ser utilizado por quien realizó la retoma.' },
  { q: '¿Puedo entregar más de un equipo?', a: 'Sí, puedes entregar múltiples equipos. Cada uno se evalúa por separado y los créditos se suman.' },
  { q: '¿Cómo funciona el domicilio?', a: 'Ofrecemos servicio de recogida a domicilio en Bogotá. Coordina con nuestro equipo para agendar según disponibilidad de tu zona.' }
];

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar isBordered={scrolled} className={`fixed z-50 transition-all duration-300 ${scrolled ? 'bg-gray-100/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <NavbarBrand>
        <div className={`text-3xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>Pipod</div>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-10" justify="end">
        <NavbarItem><a href="#beneficios" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:opacity-70`}>Beneficios</a></NavbarItem>
        <NavbarItem><a href="#como-funciona" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:opacity-70`}>Cómo funciona</a></NavbarItem>
        <NavbarItem><a href="#recomendaciones" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:opacity-70`}>Recomendaciones</a></NavbarItem>
        <NavbarItem><a href="#faq" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:opacity-70`}>FAQ</a></NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-20" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Sparkles size={16} style={{ color: '#06B6D4' }} />
            <span className="text-xs font-semibold tracking-wider" style={{ color: '#FFFFFF' }}>PLAN RETOMA 2025</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight" style={{ color: '#FFFFFF' }}>Renueva tu<br/>equipo</motion.h1>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl" style={{ color: '#D1D5DB' }}>El Plan Retoma de Pipod te permite entregar tu dispositivo Apple usado (iPhone, Macbook, iMac, SmartWatch) y recibir un descuento por la compra de un equipo nuevo o reacondicionado. Aplicable para clientes particulares y empresas.</motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl" style={{ backgroundColor: '#3B82F6' }}>
                Agendar cita
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold" style={{ border: '2px solid #FFFFFF', color: '#FFFFFF', backgroundColor: 'transparent' }}>
                Ver proceso
              </Button>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-16 pt-16 md:pt-20 pb-12 px-4 md:px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[{ label: 'iPhone' }, { label: 'MacBook' }, { label: 'iMac' }, { label: 'iPad' }, { label: 'Apple Watch' }].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ delay: i * 0.1, duration: 0.6 }} 
                whileHover={{ scale: 1.05, color: '#86EFAC' }}
                className={`cursor-pointer px-4 md:px-6 py-8 md:py-12 text-center transition-colors duration-300 ${i === 2 ? 'md:ml-12' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold tracking-wide mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="py-40 px-6" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <span className="text-[10px] uppercase font-black tracking-[0.4em]" style={{ color: '#9CA3AF' }}>APROVECHA TU EQUIPO USADO</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ color: '#F9FAFB' }}>Beneficios</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>El Plan Retoma de Pipod te permite renovar tu equipo con beneficios económicos y ambientales. Obtén el mejor valor por tu dispositivo usado y contribuye a un futuro más sostenible.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-12">
              {BENEFITS.slice(0, 2).map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} whileHover={{ y: -10, scale: 1.02 }}>
                    <Card className="group p-8 rounded-3xl cursor-pointer" style={{ backgroundColor: '#FFFFFF' }}>
                      <CardBody className="flex flex-col items-center text-center">
                        <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F3F4F6' }}>
                          <IconComponent size={40} className={`transition-colors ${item.hoverColor}`} style={{ color: '#D1D5DB' }} />
                        </motion.div>
                        <h3 className="text-xl font-black mb-3" style={{ color: '#1F2937' }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>{item.desc}</p>
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
                  <motion.div key={idx + 2} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (idx + 2) * 0.1, duration: 0.6 }} whileHover={{ y: -10, scale: 1.02 }}>
                    <Card className="group p-8 rounded-3xl cursor-pointer" style={{ backgroundColor: '#FFFFFF' }}>
                      <CardBody className="flex flex-col items-center text-center">
                        <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F3F4F6' }}>
                          <IconComponent size={40} className={`transition-colors ${item.hoverColor}`} style={{ color: '#D1D5DB' }} />
                        </motion.div>
                        <h3 className="text-xl font-black mb-3" style={{ color: '#1F2937' }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>{item.desc}</p>
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
    <section id="como-funciona" className="py-40 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-32 space-y-6">
          <span className="text-[10px] uppercase font-black tracking-[0.4em]" style={{ color: '#9CA3AF' }}>PROCESO</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight" style={{ color: '#1F2937' }}>Tres pasos: Un nuevo equipo</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {STEPS.map((step, idx) => {
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} whileHover={{ y: -10 }} className="relative text-center group cursor-pointer">
                <Card className="relative z-10 w-28 h-28 rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-10" style={{ backgroundColor: '#FFFFFF', border: '4px solid #E0E0E0' }}>
                  <CardBody className="flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.1, rotate: 6 }}>
                      <span className="text-5xl font-black" style={{ color: '#06B6D4' }}>{step.number}</span>
                    </motion.div>
                  </CardBody>
                </Card>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-8xl font-black -z-10" style={{ color: '#E0E0E0' }}>{idx + 1}</div>
                <h3 className="text-4xl font-black mb-4" style={{ color: '#1F2937' }}>{step.title}</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>{step.desc}</p>
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
    <section id="recomendaciones" className="py-32 px-6" style={{ backgroundColor: '#1B1B1B' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-32 space-y-6">
          <span className="text-[10px] uppercase font-black tracking-[0.4em]" style={{ color: '#9CA3AF' }}>RECOMENDACIONES</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight" style={{ color: '#F9FAFB' }}>Antes de entregar tu equipo</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {CHECKLIST.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.5 }} whileHover={{ scale: 1.05 }}>
              <Card className="group p-8 rounded-2xl cursor-pointer" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CardBody className="flex flex-row items-center gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(6,182,212,0.2)' }}>
                    <CheckCircle style={{ color: '#06B6D4' }} size={24} />
                  </div>
                  <span className="text-xl font-semibold" style={{ color: '#D1D5DB' }}>{item}</span>
                </CardBody>
              </Card>
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
      <Accordion>
        {faqs.map((faq, idx) => (
          <AccordionItem key={startIdx + idx} title={faq.q} className="text-xl font-semibold" style={{ color: '#1F2937' }}>
            <div className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>{faq.a}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <section id="faq" className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-4 block" style={{ color: '#9CA3AF' }}>Dudas</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4" style={{ color: '#1F2937' }}>Preguntas Frecuentes</h2>
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

function FooterCTA() {
  return (
    <section id="contacto" className="relative py-32 px-6 text-center overflow-hidden" style={{ backgroundColor: '#1B1B1B' }}>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6" style={{ color: '#FFFFFF' }}>¿Listo para renovar tu equipo Apple?</h2>
          <p className="text-base sm:text-lg md:text-2xl mb-8 sm:mb-12" style={{ color: '#9CA3AF' }}>Agenda tu cita y obtén el mejor valor por tu dispositivo usado</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="text-white text-lg px-16 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl" style={{ backgroundColor: '#3B82F6' }}>
              Agendar Cita de Retoma
            </Button>
          </motion.div>
        </motion.div>
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
    timeoutRef.current = setTimeout(() => {
      setStatus('success');
      setEmail('');
      timeoutRef.current = setTimeout(() => setStatus('idle'), 3000);
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
      <p className="mb-10 text-base md:text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>Recibe ofertas exclusivas del Plan Retoma y novedades sobre dispositivos Apple.<br/><span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#9CA3AF' }}>Sin spam, solo valor</span></p>
      {status === 'success' ? (
        <div className="p-8 rounded-2xl shadow-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', fontSize: '1.125rem' }}>✓ ¡Gracias! Revisa tu correo.</div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-2xl p-2 shadow-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col sm:flex-row items-stretch gap-0">
            <Input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === 'loading'} className="flex-1" style={{ backgroundColor: 'transparent', color: '#FFFFFF' }} required />
            <Button type="submit" disabled={status === 'loading'} className="text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all disabled:opacity-70 rounded-xl sm:rounded-l-none sm:rounded-r-xl mt-2 sm:mt-0 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#3B82F6' }}>
              {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
            </Button>
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000' }}>
      <div className="py-32" style={{ borderBottom: '1px solid #1B1B1B' }}>
        <Newsletter />
      </div>
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex justify-center space-x-8 mb-12">
          <Facebook className="cursor-pointer transition-all hover:scale-125" style={{ color: '#D1D5DB' }} size={28} />
          <Instagram className="cursor-pointer transition-all hover:scale-125" style={{ color: '#D1D5DB' }} size={28} />
          <Twitter className="cursor-pointer transition-all hover:scale-125" style={{ color: '#D1D5DB' }} size={28} />
          <Linkedin className="cursor-pointer transition-all hover:scale-125" style={{ color: '#D1D5DB' }} size={28} />
        </div>
        <div className="text-center" style={{ color: '#6E6E6E' }}>
          <p className="text-lg mb-6">© 2025 Pipod. Todos los derechos reservados.</p>
          <div className="space-x-8 text-sm uppercase tracking-[0.15em]">
            <a href="#" className="transition-colors" style={{ color: '#6E6E6E' }}>Privacidad</a>
            <a href="#" className="transition-colors" style={{ color: '#6E6E6E' }}>Términos</a>
            <a href="#" className="transition-colors" style={{ color: '#6E6E6E' }}>Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-poppins antialiased">
      <NavbarComponent />
      <Hero />
      <Benefits />
      <Steps />
      <Checklist />
      <FAQ />
      <FooterCTA />
      <Footer />
    </div>
  );
}
