
function ProductCard({ product }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-60 items-center justify-center bg-white p-8">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col border-t border-gray-100 p-5">

                <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {product.category}
                </span>

                <h2 className="mb-3 line-clamp-2 min-h-12 text-sm font-semibold text-gray-900">
                    {product.title}
                </h2>

                <div className="mb-4 flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium text-gray-700">
                        {product.rating?.rate ?? "N/A"}
                    </span>
                    <span className="text-xs text-gray-400">
                        ({product.rating?.count ?? 0} avaliações)
                    </span>
                </div>

                <div className="mt-auto">
                    <p className="mb-4 text-2xl font-bold text-gray-900">
                        US$ {product.price.toFixed(2)}
                    </p>

                    <button
                        type="button"
                        onClick={() => alert(product.description)}
                        className="w-full cursor-pointer rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Ver detalhes
                    </button>
                </div>

            </div>
        </article>
    );
}

export default ProductCard;
