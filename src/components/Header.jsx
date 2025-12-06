import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b" style={{ borderColor: '#F3F4F6' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black" style={{ color: '#0066CC' }}>
          Pipod
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-semibold transition-colors duration-200 hover:opacity-70"
              style={{ color: '#1F2937' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ backgroundColor: mobileOpen ? '#F3F4F6' : 'transparent' }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t"
          style={{ borderColor: '#F3F4F6', backgroundColor: '#FFFFFF' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold py-2 transition-colors duration-200 hover:opacity-70"
                style={{ color: '#1F2937' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
