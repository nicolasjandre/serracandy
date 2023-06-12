import { createContext, useEffect, useState } from "react";

// Create the context
// @ts-ignore
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [isCartInitialized, setCartInitialized] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem("serracandy@cart");

        if (storedCart) {
            setCart(JSON.parse(storedCart));
            setCartInitialized(true);

            const total = getCartTotal(JSON.parse(storedCart));
            setCartTotal(total);
        }
    }, []);

    useEffect(() => {
        if (isCartInitialized) {
            localStorage.setItem("serracandy@cart", JSON.stringify(cart));

            const total = getCartTotal(cart);
            setCartTotal(total);
        }
    }, [cart, isCartInitialized]);

    function getCartTotal(cart) {
        return cart.reduce((acc, product) => {
            return acc + product.preco * product.qtdCarrinho;
        }, 0);
    }

    const addToCartBySum = (product, qtd) => {
        product.qtdCarrinho = qtd;

        let item = cart.find((item) => item.id === product.id);

        if (item) {
            const updatedItem = {
                ...item,
                qtdCarrinho:
                    item.quantidade < item.qtdCarrinho + qtd
                        ? item.quantidade
                        : item.qtdCarrinho + qtd,
            };

            setCart(cart.map((prod) => (prod.id === product.id ? updatedItem : prod)));
        } else {
            setCart([...cart, product]);
        }
    };

    const addToCartByInputQuantity = (product, qtd) => {
        product.qtdCarrinho = qtd;

        let item = cart.find((item) => item.id === product.id);

        if (item) {
            const updatedItem = {
                ...item,
                qtdCarrinho: qtd,
            };

            setCart(cart.map((prod) => (prod.id === product.id ? updatedItem : prod)));
        } else {
            setCart([...cart, product]);
        }
    };

    const removeProductFromCart = (product) => {
        setCart(cart.filter((prod) => prod.id !== product.id));
    };

    return (
        <CartContext.Provider
            value={
                // @ts-ignore
                {
                    isCartModalOpen,
                    setCartModalOpen,
                    cart,
                    setCart,
                    addToCartBySum,
                    cartTotal,
                    setCartTotal,
                    addToCartByInputQuantity,
                    removeProductFromCart,
                }
            }
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
