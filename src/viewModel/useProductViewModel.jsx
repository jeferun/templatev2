import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, addToCart } from '../models/productSlice';
import { toast } from 'sonner';

export const useProductViewModel = () => {
  const dispatch = useDispatch();

  // Extraemos todo del Store
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const cart = useSelector((state) => state.products.cart);

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    // Solo disparamos la petición si el store está vacío (evita peticiones innecesarias)
    if (status === 'idle') {
      dispatch(fetchProductsAsync());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      toast.error('Sin stock disponible');
      return;
    }
    dispatch(addToCart(product));
    toast.success(`${product.name} añadido al carrito`);
  };

  return {
    products,
    isLoading: status === 'loading',
    error,
    cartTotalItems,
    handleAddToCart,
  };
};
