import { motion } from 'framer-motion';
import { useSEO } from './hooks/useSEO';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-40" style={{ background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 100%)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-6xl md:text-7xl font-black" style={{ background: 'linear-gradient(135deg, #0066CC 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Blog
        </motion.h1>
      </div>
    </section>
  );
}

function ContentSection() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
          <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Artículos y noticias</h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
            Descubre los últimos artículos, tips y noticias sobre productos Apple y servicio técnico.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000' }} className="text-white">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center text-sm text-gray-500">
          <p>Copyright © 2010 - 2025 Pipod.co</p>
        </div>
      </div>
    </footer>
  );
}

export default function BlogPage() {
  useSEO({
    title: 'Pipod - Blog',
    description: 'Blog de Pipod - Artículos y noticias sobre Apple y servicio técnico.',
    keywords: 'blog, artículos, noticias, Apple',
    ogImage: 'https://pipod.co/og-image.jpg',
    ogUrl: 'https://pipod.co/blog'
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <ContentSection />
      <Footer />
    </motion.div>
  );
}
