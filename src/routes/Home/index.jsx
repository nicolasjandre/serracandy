import { Button, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Home() {
    return (
        <Stack gap={"10px"} width={"500px"} margin={"auto"}>
            <Button color="success" variant="contained">
                Teste
            </Button>
            <Button color="warning" variant="contained">
                Teste
            </Button>
            <Button color="error" variant="contained">
                Teste
            </Button>
            <ShoppingCartIcon color="success" fontSize="large" />
            <Button variant="contained">Teste</Button>
        </Stack>
    );
}

// Nicolas
