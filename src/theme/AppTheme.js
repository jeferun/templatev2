import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Un color azul corporativo serio
    },
    secondary: {
      main: '#ff6f00', // Color de acento para botones de acción (CTA)
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Bordes modernos
          textTransform: 'none', // Evitar mayúsculas forzadas
        },
      },
    },
  },
});
