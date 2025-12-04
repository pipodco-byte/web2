import { PRODUCTS } from '../data/constants';
import '../styles/shimmer.css';

export function Products() {
  return (
    <section className="py-16 px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16">
          {PRODUCTS.map((product, i) => (
            <div key={i} className="cursor-pointer px-4 md:px-6 py-8 md:py-12 text-center">
              <div 
                className="text-4xl md:text-5xl font-bold tracking-wide shimmer-word"
                style={{ 
                  '--delay': `${i * 0.4}s`,
                  '--duration': `${PRODUCTS.length * 0.4}s`
                }}
              >
                {product.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
