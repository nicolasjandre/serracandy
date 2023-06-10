import { api } from "../services/api.js"

export const useProducts = async () => {
    const response = await api.get("/produtos");

    return response.data;
}

export const useMostFavoritedProducts = async () => {
    const response = await api.get("/produtos");

    const sortedProducts = response.data.sort((a, b) => b.feedbacksPositivos - a.feedbacksPositivos);

    return sortedProducts.slice(0, 6);
}