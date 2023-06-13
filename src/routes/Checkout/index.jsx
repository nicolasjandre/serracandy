// @ts-nocheck
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useContext } from 'react';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CartContext } from '../../contexts/CartContext';
import { formatPreco } from '../../utils/formatPreco';
import { DefaultButton } from '../../components/DefaultButton';

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


function CarrinhoCompras() {
  const { isCartModalOpen, setCartModalOpen, cart, cartTotal } = useContext(CartContext);
  const [cupom, setCupom] = useState('');
  const frete = 22.70;

  const aplicarDesconto = () => {
    if (cupom === 'SERRATEC10') {
      return cartTotal * 0.9;
    }
    return cartTotal;
  };

  const handleCupomChange = (event) => {
    setCupom(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography variant="h4" display="flex" justifyContent="center" align="center" alignItems="center" sx={{ mb: 2.5 }}>
            Carrinho de Compras
            <ShoppingCartIcon fontSize="large" sx={{ ml: "10px" }} />
          </Typography>
        </Grid>
        <Grid item xs={7}>
          {cart.map((item) => (
            <Paper key={item.id} sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <img src={item.imgUrl} alt={item.nome} style={{ width: '120px' }} />
                </Grid>
                <Grid item xs={9}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="h6">{item.nome}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {formatPreco(item.preco)} unidade
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>Quantidade: {item.qtdCarrinho}</Typography>
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
                  Frete: {formatPreco(frete)}
                </Typography>
                <Typography variant="subtitle1" align="right">
                  Subtotal: {formatPreco(cartTotal + frete)}
                </Typography>
                <Typography variant="subtitle1" align="right">
                  Desconto: {formatPreco((cartTotal - aplicarDesconto()))}
                </Typography>
                <Typography variant="subtitle1" align="right" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Total: {formatPreco(aplicarDesconto() + frete)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <DefaultButton sx={{ width: "100%" }} >
                  Finalizar Compra
                </DefaultButton>
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
