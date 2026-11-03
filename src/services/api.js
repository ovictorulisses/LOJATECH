
const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
    }

    return response.json();
}
