import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Badge,
  IconButton,
  Box,
  Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useProductViewModel } from '../../viewModel/useProductViewModel';

export const ProductPage = () => {
  const { products, cartTotalItems, handleAddToCart } = useProductViewModel();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa' }}>
      {/* Navbar Minimalista */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              color: 'text.primary',
              letterSpacing: '-0.5px',
            }}
          >
            Template Store
          </Typography>
          <IconButton
            sx={{
              color: 'text.primary',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Badge
              badgeContent={cartTotalItems}
              color="primary"
              sx={{
                '& .MuiBadge-badge': {
                  fontWeight: 600,
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Contenido Principal */}
      <Container sx={{ py: 6 }} maxWidth="lg">
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: 'text.primary',
              letterSpacing: '-1px',
            }}
          >
            Productos Destacados
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Encuentra los mejores productos de tecnología
          </Typography>
        </Box>

        {/* Grid de Productos */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  {product.stock === 0 && (
                    <Chip
                      label="Agotado"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'error.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  )}
                  {product.stock > 0 && product.stock <= 3 && (
                    <Chip
                      label="Últimas unidades"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'warning.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Chip
                    label={product.category}
                    size="small"
                    sx={{
                      mb: 1.5,
                      height: 24,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      bgcolor: 'primary.50',
                      color: 'primary.main',
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: '1.1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    ${product.price.toLocaleString('es-CO')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.875rem' }}
                  >
                    {product.stock > 0
                      ? `${product.stock} disponibles`
                      : 'Sin stock'}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    fullWidth
                    variant={product.stock === 0 ? 'outlined' : 'contained'}
                    disabled={product.stock === 0}
                    onClick={() => handleAddToCart(product)}
                    startIcon={<AddShoppingCartIcon />}
                    sx={{
                      py: 1.2,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      boxShadow: 'none',
                      '&:hover': {
                        boxShadow: 'none',
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    {product.stock === 0 ? 'Agotado' : 'Agregar al carrito'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
