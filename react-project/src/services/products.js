import { products } from "../data/products";


const delay = (ms) => new Promise((res) => setTimeout(res, ms));


export async function getProducts() {
    await delay(600);
    return products;
}


export async function getProductsByCategory(categoryId) {
    await delay(600);
    return products.filter((p) => p.category === categoryId);
}


export async function getProductById(id) {
    await delay(600);
    const prod = products.find((p) => p.id === Number(id));
    if (!prod) throw new Error("Producto no encontrado");
    return prod;
}


export function getCategories() {
    return [...new Set(products.map((p) => p.category))];
}
