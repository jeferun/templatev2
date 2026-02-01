import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage por defecto
import productReducer from './productSlice'; // Lo crearemos abajo

const rootReducer = combineReducers({
  products: productReducer,
  // Aquí iría transactionReducer, etc.
});

const persistConfig = {
  key: 'template-root-v1',
  storage,
  whitelist: ['products'], // Solo persistimos lo necesario
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necesario para redux-persist
    }),
});

export const persistor = persistStore(store);
