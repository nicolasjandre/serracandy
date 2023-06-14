import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
// @ts-ignore
import { DefaultButton } from "../../components/DefaultButton";
import { formatPreco } from "../../utils/formatPreco";
import { formatarData } from "../../utils/formatData";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const columns = [
    { id: "id", label: "ID", minWidth: 80 },
    {
        id: "data",
        label: "Data",
        minWidth: 100,
        format: (value) => formatarData(new Date(value)),
    },
    {
        id: "frete",
        label: "Frete",
        minWidth: 120,
        align: "right",
        format: (value) => formatPreco(value),
    },
    {
        id: "valorTotal",
        label: "Total",
        minWidth: 170,
        align: "right",
        format: (value) => formatPreco(value),
    },
];

export function Pedidos() {
    const { authenticatedUser } = useContext(AuthContext);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const navigate = useNavigate();

    // @ts-ignore
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        if (
            (Object.keys(authenticatedUser).length === 0 &&
                authenticatedUser.constructor === Object) &&
            localStorage.getItem("serracandy@token") === null
        ) {
            toast.error("Você precisa estar autenticado para acessar os seus pedidos");
            navigate("/login");
        }
    }, []);

    return (
        <>
            <Header />
            <Box maxWidth="1200px" marginX="auto" mb="4.5vw" mt="2.5vw">
                <Typography fontSize="1vw">Olá, {authenticatedUser.nome}!</Typography>
                <Typography fontSize="2.5vw">Meus Pedidos</Typography>
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            // @ts-ignore
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {authenticatedUser.pedidos &&
                                    authenticatedUser.pedidos.sort((a, b) => a.id < b.id ? 1 : -1)
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.id}
                                                >
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell
                                                                key={column.id}
                                                                // @ts-ignore
                                                                align={column.align}
                                                            >
                                                                {(column.format &&
                                                                    typeof value === "number") ||
                                                                typeof value === "string"
                                                                    ? column.format(value)
                                                                    : value instanceof Date
                                                                    ? formatarData(new Date(value))
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                    <TableCell align="right">
                                                        <Link to={`/pedidos/${row.id}`}>
                                                            <DefaultButton sx={{ height: "40px" }}>
                                                                <Typography fontSize=".9rem">
                                                                    Detalhes
                                                                </Typography>
                                                            </DefaultButton>
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20]}
                        component="div"
                        count={authenticatedUser.pedidos ? authenticatedUser.pedidos.length : 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
            <Footer />
        </>
    );
}
