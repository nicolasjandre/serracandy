import { Paper, Grid, Typography } from "@mui/material";
import { formatPreco } from "../../utils/formatPreco";

export function ProductCheckoutCard({ item }) {
    return (
        <Paper sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img src={item.imgUrl} alt={item.nome} style={{ width: "120px", height: "120px" }} />
                </Grid>
                <Grid item xs={9}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                        }}
                    >
                        <Typography variant="h6">{item.nome}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            {formatPreco(item.preco)} unidade
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Quantidade: {item.qtdCarrinho}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}
