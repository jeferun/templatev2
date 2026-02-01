//import api from './axiosConfig';

// MOCK DATA: Simula lo que respondería tu base de datos en NestJS
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Auriculares Premium Wompi',
    price: 250000,
    stock: 10,
    description: 'Cancelación de ruido activa y sonido de alta fidelidad.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  },
  {
    id: '2',
    name: 'Reloj Inteligente V2',
    price: 450000,
    stock: 5,
    description: 'Seguimiento deportivo y notificaciones en tiempo real.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  },
];

export const productService = {
  // Método para obtener todos los productos
  getProducts: async () => {
    // SIMULACIÓN DE MOCK (Luego lo cambias por: return api.get('/products'))
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: MOCK_PRODUCTS });
      }, 800); // 800ms de retraso para probar loaders
    });
  },

  // Método para obtener un producto por ID
  getProductById: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = MOCK_PRODUCTS.find((p) => p.id === id);
        resolve({ data: product });
      }, 500);
    });
  },
};
