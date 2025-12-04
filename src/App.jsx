import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, Lightbulb, Heart, Leaf, Send, Search, FileText, Package, ChevronDown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.2 } } };

const BENEFITS = [
  { icon: Lightbulb, title: 'Ahorro inmediato', desc: 'Tu dispositivo usado se valora y ese monto se convierte en crédito o descuento para el nuevo.' },
  { icon: Heart, title: 'Proceso transparente', desc: 'Revisamos tu equipo, te mostramos cómo llegamos al valor. Sabes lo que estás entregando.' },
  { icon: Leaf, title: 'Sostenible', desc: 'Al dar tu equipo usado, se promueve su reutilización o reciclaje. Reduce residuos electrónicos.' },
  { icon: Send, title: 'Decisión flexible', desc: 'El crédito puede aplicarse a productos nuevos o reacondicionados. Puedes elegir qué equipo comprar.' }
];

const STEPS = [
  { icon: Search, title: 'Diagnóstico', desc: 'Trae tu equipo a nuestra tienda y solicita un diagnóstico. También podemos programar una recogida.' },
  { icon: FileText, title: 'Evaluación', desc: 'Revisamos tu equipo: IMEI, batería, pantalla, puertos, sensores de humedad y funcionamiento general.' },
  { icon: Package, title: 'Equipo Nuevo', desc: 'Aplicamos el crédito a la compra de un nuevo o reacondicionado. Te entregamos comprobante.' }
];

const CHECKLIST = ['Respaldar tu información', 'Cerrar sesiones activas', 'Desactivar Find My/Buscar mi dispositivo', 'Limpiar el dispositivo', 'Incluir cargador original si es posible'];

const FAQS = [
  { q: '¿Qué dispositivos Apple aceptan?', a: 'Aceptamos iPhone, MacBook, iMac, Apple Watch y otros dispositivos Apple. Evaluamos cada equipo según modelo, estado y funcionalidad.' },
  { q: '¿Cuánto tiempo tarda el proceso?', a: 'El diagnóstico inicial toma entre 30-60 minutos. La evaluación completa y oferta final se entrega el mismo día.' },
  { q: '¿Cómo determinan el valor?', a: 'Evaluamos IMEI, batería, pantalla, puertos, sensores de humedad y funcionamiento general. Te mostramos cómo llegamos al valor final.' },
  { q: '¿El crédito tiene vencimiento?', a: 'El crédito del Plan Retoma es válido por 90 días desde la fecha de emisión para la compra de equipos nuevos o reacondicionados.' },
  { q: '¿Puedo entregar equipos con daños?', a: 'Sí, evaluamos equipos con daños menores. El valor se ajusta según el estado real del dispositivo tras el diagnóstico.' },
  { q: '¿Ofrecen servicio de recogida?', a: 'Sí, podemos programar recogida o pick-up en tu zona según acuerdos y condiciones. Consulta disponibilidad en tu área.' }
];

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-6 ${scrolled ? 'bg-gray-100/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`text-3xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>Pipod</div>
        <div className={`hidden md:flex space-x-10 text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
          <a href="#beneficios" className="hover:opacity-70">Beneficios</a>
          <a href="#como-funciona" className="hover:opacity-70">Cómo funciona</a>
          <a href="#recomendaciones" className="hover:opacity-70">Recomendaciones</a>
          <a href="#faq" className="hover:opacity-70">FAQ</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white px-6 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider">PLAN RETOMA 2025</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-7xl md:text-8xl font-black leading-tight">Renueva tu<br/>equipo</motion.h1>
          <motion.p variants={fadeInUp} className="text-2xl leading-relaxed font-light text-gray-300 max-w-xl">Sin complicaciones. Entrega tu dispositivo Apple usado y recibe descuento inmediato.</motion.p>
          <motion.div variants={fadeInUp} className="flex gap-5 pt-6">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl flex items-center gap-2">
              Agendar cita <ArrowRight size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10">Ver proceso</motion.button>
          </motion.div>
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
            {[{ label: 'iPhone', sub: 'MacBook' }, { label: 'iMac', sub: 'Watch' }, { label: '90', sub: 'Días válido' }].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <div className="text-5xl font-black mb-2 text-white">{stat.label}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{stat.sub}</div>
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
    <section id="beneficios" className="py-40 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-32 space-y-6">
          <span className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-400">APROVECHA TU EQUIPO USADO</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight text-white">Beneficios</h2>
          <p className="text-xl text-gray-300">El Plan Retoma de Pipod te permite renovar tu equipo con beneficios económicos y ambientales</p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-10">
          {BENEFITS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} whileHover={{ y: -10, scale: 1.02 }} className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-cyan-500/30 cursor-pointer">
                <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <IconComponent size={32} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section id="como-funciona" className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-32 space-y-6">
          <span className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-500">PROCESO</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight text-black">Tres pasos: Un nuevo equipo</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-16">
          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} whileHover={{ y: -10 }} className="relative text-center group cursor-pointer">
                <motion.div whileHover={{ scale: 1.1, rotate: 6 }} className="relative z-10 w-28 h-28 rounded-3xl bg-white shadow-2xl border-4 border-gray-200 flex items-center justify-center mx-auto mb-10">
                  <IconComponent size={48} className="text-blue-600" />
                </motion.div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-gray-200 -z-10">{idx + 1}</div>
                <h3 className="text-3xl font-black text-black mb-4">{step.title}</h3>
                <p className="leading-relaxed text-gray-600">{step.desc}</p>
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
    <section id="recomendaciones" className="py-32 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-32 space-y-6">
          <span className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-400">RECOMENDACIONES</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight text-white">Antes de entregar tu equipo</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {CHECKLIST.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.5 }} whileHover={{ scale: 1.05 }} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 flex items-center gap-5 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-cyan-400" size={24} />
              </div>
              <span className="text-lg text-white font-semibold">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 mb-4 block">Dudas</span>
          <h2 className="text-5xl font-bold text-black mb-4">Preguntas Frecuentes</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-600">Todo sobre el Plan Retoma</p>
        </motion.div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.5 }} whileHover={{ scale: 1.01 }} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 overflow-hidden">
              <motion.button onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)} className="w-full px-8 py-6 flex justify-between items-center text-left group-hover:bg-blue-50">
                <span className="font-semibold text-lg text-black">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={24} className="text-blue-600" />
                </motion.div>
              </motion.button>
              {openIndex === idx && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-8 pb-6 text-gray-600 leading-relaxed bg-blue-50">
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section id="contacto" className="relative py-32 px-6 text-center text-white overflow-hidden bg-gray-900">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-6xl font-bold mb-6">¿Listo para renovar tu equipo Apple?</h2>
          <p className="text-2xl mb-12 text-gray-300">Agenda tu cita y obtén el mejor valor por tu dispositivo usado</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white text-lg px-16 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            Agendar Cita de Retoma <ArrowRight size={20} />
          </motion.button>
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
      <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Mantente Informado</h3>
      <p className="text-gray-300 mb-10 text-base md:text-lg leading-relaxed">Recibe ofertas exclusivas del Plan Retoma y novedades sobre dispositivos Apple.<br/><span className="text-xs uppercase tracking-[0.2em] text-gray-400">Sin spam, solo valor</span></p>
      {status === 'success' ? (
        <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 text-white text-lg rounded-2xl shadow-2xl">✓ ¡Gracias! Revisa tu correo.</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-stretch gap-0">
            <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === 'loading'} className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400 outline-none rounded-xl" required />
            <button type="submit" disabled={status === 'loading'} className="bg-blue-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-blue-700 transition-all disabled:opacity-70 rounded-xl sm:rounded-l-none sm:rounded-r-xl mt-2 sm:mt-0 shadow-lg hover:shadow-xl">
              {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
            </button>
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="py-32 border-b border-gray-800">
        <Newsletter />
      </div>
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex justify-center space-x-8 mb-12">
          <Facebook className="cursor-pointer hover:text-blue-400 transition-all hover:scale-125" size={28} />
          <Instagram className="cursor-pointer hover:text-pink-400 transition-all hover:scale-125" size={28} />
          <Twitter className="cursor-pointer hover:text-blue-300 transition-all hover:scale-125" size={28} />
          <Linkedin className="cursor-pointer hover:text-blue-500 transition-all hover:scale-125" size={28} />
        </div>
        <div className="text-center text-gray-400">
          <p className="text-lg mb-6">© 2025 Pipod. Todos los derechos reservados.</p>
          <div className="space-x-8 text-sm uppercase tracking-[0.15em]">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-poppins antialiased">
      <Navbar />
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
