import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Card, CardBody } from '@heroui/react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Footer({ isDark }) {
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
    <footer className="bg-black text-white">
      <div className="py-20 px-6 border-b border-dark-slate">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="text-4xl md:text-5xl font-black">Mantente Informado</h3>
          <p className="text-lg text-soft-gray">Recibe ofertas exclusivas del Plan Retoma y novedades sobre dispositivos Apple.</p>
          
          {status === 'success' ? (
            <Card className="bg-green-500/20 border border-green-500">
              <CardBody className="text-center py-4">
                <p className="text-green-100">✓ ¡Gracias! Revisa tu correo.</p>
              </CardBody>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-1"
                classNames={{
                  input: "bg-dark-slate text-white placeholder:text-soft-gray",
                  inputWrapper: "bg-dark-slate border border-zinc-700 backdrop-blur-md"
                }}
                aria-label="Correo electrónico para suscripción"
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-black font-semibold rounded-full hover:bg-zinc-100"
                aria-label="Suscribirse al newsletter"
              >
                {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
              </Button>
            </form>
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex justify-center gap-6 mb-8">
          <motion.a href="#" whileHover={{ scale: 1.2 }} aria-label="Facebook" className="text-silver hover:text-mint-green transition-colors">
            <Facebook size={24} />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2 }} aria-label="Instagram" className="text-silver hover:text-mint-green transition-colors">
            <Instagram size={24} />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2 }} aria-label="Twitter" className="text-silver hover:text-mint-green transition-colors">
            <Twitter size={24} />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2 }} aria-label="LinkedIn" className="text-silver hover:text-mint-green transition-colors">
            <Linkedin size={24} />
          </motion.a>
        </div>

        <div className="text-center space-y-4 text-dim-gray">
          <p className="text-sm">© 2025 Pipod. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 text-xs uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
