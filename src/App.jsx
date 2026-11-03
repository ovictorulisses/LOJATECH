
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            LOJATECH
          </h1>

          <p className="mt-3 text-gray-500">
            Confira nossa seleção de produtos.
          </p>
        </div>

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
          <ProductList products={products} />
        )}
      </div>
    </main>
  );
}

export default App;
