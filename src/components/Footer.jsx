
function Footer() {
    return (
        <footer
            id="sobre"
            className="mt-20 border-t border-gray-200 bg-white"
        >
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row md:items-center">

                <div>
                    <h2 className="text-xl font-black text-gray-950">
                        LOJA<span className="text-blue-600">TECH.</span>
                    </h2>

                    <p className="mt-2 max-w-md text-sm text-gray-500">
                        Catálogo demonstrativo desenvolvido com React,
                        Vite, Tailwind CSS e Fake Store API.
                    </p>
                </div>

                <div className="text-sm text-gray-500">
                    Projeto acadêmico · 2026
                </div>

            </div>
        </footer>
    );
}

export default Footer;
