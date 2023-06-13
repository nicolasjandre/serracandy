// @ts-nocheck
import { useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const cartItems = [
  { name: 'Pudim de pote', price: 14.99, quantity: 2, image: 'img1' },
  { name: 'Brigadeiro Gourmet', price: 9.99, quantity: 1, image: 'img2' },
  { name: 'Cupcake', price: 29.99, quantity: 3, image: 'img3' },
  { name: 'Brownie de chocolate', price: 49.99, quantity: 1, image: 'img4' }
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#ed7201',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: theme => theme.palette.primary.main,
        },
        input: {
          color: theme => theme.palette.primary.main,
        },
      },
    },
  },
});

const calcularValorTotal = () => {
  let total = 0;

  for (const item of cartItems) {
    total += item.price * item.quantity;
  }

  return total;
};

function CarrinhoCompras() {
  const [cupom, setCupom] = useState('');
  const valorTotal = calcularValorTotal();
  const frete = 22.70;

  const aplicarDesconto = () => {
    if (cupom === 'SERRATEC10') {
      return valorTotal * 0.9;
    }
    return valorTotal;
  };

  const calcularValorComFrete = () => {
    const valorSemDesconto = valorTotal + frete;
    const valorComDesconto = aplicarDesconto();
    return valorSemDesconto - valorComDesconto;
  };

  const handleCupomChange = (event) => {
    setCupom(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography variant="h4" align="center" sx={{ mb: 2.5 }}>
            <ShoppingCartIcon fontSize="large" />
            Carrinho de Compras
          </Typography>
        </Grid>
        <Grid item xs={7}>
          {cartItems.map((item, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <img src={item.image} alt={item.name} style={{ width: '120px' }} />
                </Grid>
                <Grid item xs={9}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      R${item.price.toFixed(2)} unidade
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>Quantidade: {item.quantity}</Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={5}>
          <Paper sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <ThemeProvider theme={theme}>
                <Grid item xs={12}>
                  <TextField
                    label="Código promocional"
                    fullWidth
                    InputProps={{
                      color: 'primary',
                    }}
                    value={cupom}
                    onChange={handleCupomChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="CEP"
                    fullWidth
                    InputProps={{
                      color: 'primary',
                    }}
                  />
                </Grid>
              </ThemeProvider>
              <Grid item xs={12}>
                <Typography variant="subtitle1" align="right" sx={{ mt: 1 }}>
                  Frete: R$ {frete.toFixed(2)}
                </Typography>
                <Typography variant="subtitle1" align="right">
                  Subtotal: R${(valorTotal + frete).toFixed(2)}
                </Typography>
                <Typography variant="subtitle1" align="right">
                  Desconto: R${(valorTotal - aplicarDesconto()).toFixed(2)}
                </Typography>
                <Typography variant="subtitle1" align="right" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Total: R${(frete + aplicarDesconto()).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth sx={{ mt: -1, backgroundColor: '#ED7201', '&:hover': { backgroundColor: '#ff9900' }} }>
                  Finalizar Compra
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export function Checkout() {
  return (
    <>
      <Header />
      <CarrinhoCompras />
      <Footer />
    </>
  );
}
