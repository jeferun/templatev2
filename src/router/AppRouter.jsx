import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProductPage } from '../view/page/ProductPage';

export const router = createBrowserRouter([
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    // Redirección por defecto: Si el usuario entra a "/" o cualquier ruta desconocida,
    // lo mandamos a productos (cumpliendo el flujo de la prueba)
    path: '/*',
    element: <Navigate to="/products" />,
  },
]);
