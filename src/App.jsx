
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import ProductList from "./components/ProductList";

const categories = [
  { label: "Eletrônicos", value: "electronics" },
  { label: "Todos", value: "all" },
  { label: "Roupas masculinas", value: "men's clothing" },
  { label: "Roupas femininas", value: "women's clothing" },
  { label: "Joias", value: "jewelery" },
];

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("electronics");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "all" || product.category === category;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            LOJATECH
          </h1>

          <p className="mt-3 text-gray-500">
            Encontre os melhores produtos para você.
          </p>
        </div>

        <section className="mb-10">
          <div className="mb-6">
            <label
              htmlFor="search"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Pesquisar produtos
            </label>

            <input
              id="search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Digite o nome do produto..."
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm outline-none transition focus:border-blue-500 md:max-w-md"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setCategory(item.value)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition ${category === item.value
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-blue-500"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        {loading && (
          <p className="text-center text-gray-500">
            Carregando produtos...
          </p>
        )}

        {error && (
          <p role="alert" className="text-center text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <p className="mb-6 text-sm text-gray-500">
              {filteredProducts.length} produto(s) encontrado(s)
            </p>

            {filteredProducts.length > 0 ? (
              <ProductList products={filteredProducts} />
            ) : (
              <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  Nenhum produto encontrado
                </h2>
                <p className="mt-2 text-gray-500">
                  Tente pesquisar outro nome ou selecionar outra categoria.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default App;
