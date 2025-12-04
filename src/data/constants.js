import { Lightbulb, Heart, Leaf, Send, HardDrive, Lock, Smartphone, Zap, FileText, HelpCircle } from 'lucide-react';

export const BENEFITS = [
  { icon: Lightbulb, title: 'Ahorro inmediato', desc: 'Tu dispositivo usado se valora y ese monto se convierte en crédito o descuento para el nuevo. Esto permite reducir el costo al momento de la compra.', hoverColor: 'group-hover:text-yellow-400' },
  { icon: Heart, title: 'Proceso transparente', desc: 'Revisamos tu equipo, te mostramos cómo llegamos al valor. Sabes lo que estás entregando, lo que vale y lo que recibirás.', hoverColor: 'group-hover:text-red-400' },
  { icon: Leaf, title: 'Sostenible', desc: 'Al dar tu equipo usado, se promueve su reutilización o reciclaje. Esto reduce residuos electrónicos y beneficia al medio ambiente.', hoverColor: 'group-hover:text-green-400' },
  { icon: Send, title: 'Decisión flexible', desc: 'El crédito que obtienes puede aplicarse a productos nuevos o reacondicionados (según tus reglas). Puedes elegir qué equipo comprar.', hoverColor: 'group-hover:text-blue-400' }
];

export const STEPS = [
  { number: '1', title: 'Diagnóstico', desc: 'Trae tu equipo a nuestra tienda y solicita un diagnóstico. También podemos programar una recogida.' },
  { number: '2', title: 'Evaluación', desc: 'Revisamos tu equipo: IMEI, batería, pantalla, puertos, sensores de humedad y funcionamiento general.' },
  { number: '3', title: 'Equipo Nuevo', desc: 'Aplicamos el crédito a la compra de un nuevo o reacondicionado. Te entregamos comprobante.' }
];

export const CHECKLIST = [
  { title: 'Respalda tu información', desc: 'Realizar un respaldo (backup) y, si lo prefieres, restablecerlo de fábrica.', icon: HardDrive },
  { title: 'Desvincula tu cuenta Apple', desc: 'Desactivar "Buscar mi iPhone" y eliminar tu cuenta de iCloud.', icon: Lock },
  { title: 'Cuida tus accesorios', desc: 'Retirar tarjetas SIM, fundas y accesorios personales.', icon: Smartphone },
  { title: 'Recuerda el cargador', desc: 'Incluir el cargador si hace parte de la oferta puede aumentar el valor final.', icon: Zap },
  { title: 'Documentación', desc: 'Traer factura, documento de propiedad o cajas de producto si lo tienes disponible.', icon: FileText },
  { title: '¿No sabes cómo hacerlo?', desc: 'No te preocupes — nuestro equipo en tienda puede ayudarte con el respaldo, restablecimiento y desactivación de iCloud.', icon: HelpCircle }
];

export const FAQS = [
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

export const PRODUCTS = [
  { label: 'iPhone', img: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=200&h=200&fit=crop' },
  { label: 'MacBook', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop' },
  { label: 'iMac', img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop' },
  { label: 'iPad', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop' },
  { label: 'Apple Watch', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' }
];
