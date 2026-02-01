import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../models/productSlice';
import { toast } from 'sonner'; // Para feedback visual elegante

export const useProductViewModel = () => {
  const dispatch = useDispatch();

  // Selectores: Extraer datos del store
  const products = useSelector((state) => state.products.list);
  const cart = useSelector((state) => state.products.cart);

  // Lógica derivada (Computed properties)
  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Funciones (Actions)
  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      toast.error('¡Lo sentimos! No hay stock disponible.');
      return;
    }

    dispatch(addToCart(product));
    toast.success(`Agregaste ${product.name} al carrito`);
  };

  return {
    products,
    cart,
    cartTotalItems,
    handleAddToCart,
  };
};
