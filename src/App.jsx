import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRouter';

function App() {
  return (
    // Aquí podrías envolver con otros Providers si fuera necesario,
    // pero la lógica de navegación ya está en el router
    <RouterProvider router={router} />
  );
}

export default App;
