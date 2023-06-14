import "./style.css";

const Search = ({ produtos, setProdutos }) => {
    function filtrarPorNome(busca) {
        const prodOrdenados = produtos.filter((produto) =>
            produto.nome.toLowerCase().includes(busca.toLowerCase())
        );
        setProdutos(prodOrdenados);
    }

    return (
        <div className="seacrhInput">
            <h1 className="titulo">Nossos Doces</h1>
            <input
                className="input"
                type="text"
                placeholder="Pesquisa"
                onChange={(e) => filtrarPorNome(e.target.value)}
            />
        </div>
    );
};

export default Search;
