const Search = ({ produtos, setProdutos }) => {

    function filtrarPorNome( busca ) {
        const prodOrdenados = produtos.filter(produto => produto.nome.toLowerCase().includes(busca.toLowerCase())) 
        setProdutos(prodOrdenados);
    }

    return (
        <div className="seacrhInput">
            <h1>Nosso Doces:</h1>
            <input 
                type="text" 
                placeholder='Busca' 
                onChange={(e) => filtrarPorNome(e.target.value)} 
            />
        </div>
    );
}

export default Search;
