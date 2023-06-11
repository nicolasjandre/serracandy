import { api } from "../services/api.js";

export const useProducts = async () => {
    const response = await api.get("/produtos");

    return response.data;
};

export const getProductById = async (id) => {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
};

export const useMostFavoritedProducts = async () => {
    const products = useProducts();

    const sortedProducts = [...(await products)].sort(
        (a, b) => b.feedbacksPositivos - a.feedbacksPositivos
    );

    return sortedProducts.slice(0, 6);
};
