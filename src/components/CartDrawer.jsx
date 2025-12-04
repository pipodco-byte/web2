import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Badge } from '@heroui/react';
import { ShoppingCart, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onOpenChange }) {
  const items = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, quantity: 1, image: 'https://via.placeholder.com/80' },
    { id: 2, name: 'MacBook Air M3', price: 1299, quantity: 1, image: 'https://via.placeholder.com/80' }
  ];

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="md">
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <ShoppingCart size={24} />
            <span>Carrito ({itemCount})</span>
          </div>
        </DrawerHeader>
        <DrawerBody>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <ShoppingCart size={48} className="text-gray-300" />
              <p className="text-gray-600">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button isIconOnly size="sm" variant="bordered">-</Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button isIconOnly size="sm" variant="bordered">+</Button>
                      <Button isIconOnly size="sm" color="danger" variant="light">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </DrawerBody>
        <DrawerFooter>
          <div className="w-full space-y-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button fullWidth color="primary" size="lg">
              Ir al Checkout
            </Button>
            <Button fullWidth variant="bordered">
              Continuar comprando
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
