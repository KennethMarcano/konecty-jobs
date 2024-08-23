import { Product } from "@/types/product";

export async function fetchProducts(query: string) {
    const response = await fetch(`/api/products?${query}`);
    if (!response.ok) {
        throw new Error('Error al cargar los productos');
    }
    const data: Product[] = await response.json();
    return data;
}