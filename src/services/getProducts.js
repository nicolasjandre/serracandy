export function getProducts(products, from, to) {
    return new Promise((resolve, reject) => {

        const data = products.slice(from, to);

        resolve ({
            count: products.length,
            data
        })
    })
}