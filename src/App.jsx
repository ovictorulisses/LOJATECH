
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";

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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
        LOJATECH
      </h1>

      {loading && (
        <p className="text-center">Carregando produtos...</p>
      )}

      {error && (
        <p role="alert" className="text-center text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="mb-4 h-40 w-full object-contain"
              />

              <h2 className="font-semibold">{product.title}</h2>

              <p className="mt-2 text-lg font-bold text-blue-600">
                US$ {product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
