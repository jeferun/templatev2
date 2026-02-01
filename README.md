# Template Store App

Aplicación web moderna de e-commerce desarrollada con React + Vite, implementando la arquitectura MVVM (Model-View-ViewModel) para un código limpio, escalable y mantenible.

## 🚀 Características

- **Arquitectura MVVM**: Separación clara de responsabilidades entre Model, View y ViewModel
- **State Management**: Redux Toolkit para gestión global del estado
- **UI Moderna**: Material-UI (MUI) con diseño minimalista y responsive
- **Enrutamiento**: React Router DOM para navegación SPA
- **Notificaciones**: Sonner para feedback visual elegante
- **Code Quality**: ESLint + Prettier con formateo automático en commits
- **Hot Module Replacement**: Desarrollo rápido con Vite

## 📁 Estructura del Proyecto

```
src/
├── models/           # Redux slices y lógica de negocio
│   ├── store.js      # Configuración del store
│   └── productSlice.js
├── viewModel/        # Lógica de presentación
│   └── useProductViewModel.jsx
├── view/            # Componentes de UI
│   └── page/
│       └── ProductPage.jsx
├── router/          # Configuración de rutas
│   └── AppRouter.jsx
├── theme/           # Tema personalizado MUI
│   └── AppTheme.js
└── main.jsx         # Punto de entrada
```

## 🛠️ Tecnologías

- **React 19** - Biblioteca de interfaz de usuario
- **Vite 7** - Build tool y dev server ultrarrápido
- **Redux Toolkit** - State management simplificado
- **Material-UI** - Componentes de UI
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP
- **Sonner** - Sistema de notificaciones
- **Husky + lint-staged** - Git hooks para calidad de código

## 📦 Instalación

### Prerrequisitos

- Node.js 16+ y npm

### Pasos

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd templatev2
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🎯 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Compila la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |
| `npm run format` | Formatea todo el código con Prettier |

## 🏗️ Funcionamiento de la Aplicación

### Flujo de Datos (MVVM)

1. **Model** (`productSlice.js`): 
   - Define el estado inicial de productos y carrito
   - Contiene reducers para manejar acciones (agregar al carrito)
   - Gestiona la lógica de stock

2. **ViewModel** (`useProductViewModel.jsx`):
   - Hook personalizado que conecta el Model con la View
   - Extrae datos del store usando selectores
   - Expone funciones de acción (handleAddToCart)
   - Maneja notificaciones y validaciones

3. **View** (`ProductPage.jsx`):
   - Componente de presentación puro
   - Consume el ViewModel para obtener datos y funciones
   - Se enfoca únicamente en la UI y experiencia de usuario

### Características Implementadas

✅ **Catálogo de Productos**: Grid responsive con 6 productos de muestra  
✅ **Gestión de Carrito**: Agregar productos con control de stock  
✅ **Notificaciones**: Feedback visual al agregar productos  
✅ **Estados de Producto**: Badges de "Agotado" y "Últimas unidades"  
✅ **Diseño Responsive**: Adaptable a móvil, tablet y desktop  
✅ **Animaciones**: Efectos hover suaves en cards  
✅ **Control de Stock**: Actualización dinámica del inventario  

## 🎨 Personalización del Tema

El tema de Material-UI se configura en `src/theme/AppTheme.js`. Puedes personalizar colores, tipografía y componentes globalmente.

## 📝 Git Hooks

El proyecto está configurado con Husky para ejecutar automáticamente:
- **Pre-commit**: Formatea y valida el código con Prettier + ESLint

## 🔄 Estado de Desarrollo

- [x] Configuración base del proyecto
- [x] Arquitectura MVVM implementada
- [x] Sistema de gestión de productos
- [x] Carrito de compras funcional
- [x] UI responsive y moderna
- [ ] Integración con backend/API
- [ ] Sistema de autenticación
- [ ] Proceso de checkout
- [ ] Panel de administración

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
