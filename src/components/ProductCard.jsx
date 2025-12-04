import { Card, CardBody, CardFooter, Button, Badge } from '@heroui/react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardBody className="overflow-visible p-0">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-100">
            {product.isNew && (
              <Badge color="success" content="Nuevo" className="absolute top-2 right-2">
                <div />
              </Badge>
            )}
            {product.discount && (
              <Badge color="danger" content={`-${product.discount}%`} className="absolute top-2 left-2">
                <div />
              </Badge>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-3 p-4">
          <div className="w-full">
            <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.category}</p>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
            <span className="text-xs text-gray-600 ml-2">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
              )}
            </div>
          </div>

          <Button
            isIconOnly
            className="w-full bg-blue-500 text-white"
            onClick={handleAddToCart}
            startContent={<ShoppingCart size={18} />}
          >
            Agregar
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
