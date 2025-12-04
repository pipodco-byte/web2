import { motion } from 'framer-motion';
import { Avatar } from '@heroui/react';
import { PRODUCTS } from '../data/constants';

export function Products() {
  return (
    <section className="py-16 px-8" style={{ background: 'linear-gradient(135deg, #F5F5F7 0%, #E0F2FE 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16">
          {PRODUCTS.map((product, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }} whileHover={{ scale: 1.08, y: -5 }} className={`cursor-pointer px-4 md:px-6 py-8 md:py-12 text-center transition-colors duration-300 ${i === 2 ? 'md:ml-12' : ''}`}>
              <Avatar src={product.img} alt={product.label} size="xl" className="w-20 h-20 mx-auto mb-4" isBordered color="primary" />
              <motion.div 
                className="text-4xl md:text-5xl font-bold tracking-wide"
                whileInView={{ 
                  background: 'linear-gradient(90deg, #1D1D1F 0%, #0066CC 50%, #1D1D1F 100%)',
                  backgroundPosition: '200% 0'
                }}
                initial={{ 
                  background: 'linear-gradient(90deg, #1D1D1F 0%, #0066CC 50%, #1D1D1F 100%)',
                  backgroundPosition: '-200% 0'
                }}
                transition={{ duration: 2, ease: 'ease-in-out' }}
                style={{
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: '#1D1D1F'
                }}
              >
                {product.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
