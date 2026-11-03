
function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
                <a
                    href="#inicio"
                    className="text-2xl font-black tracking-tight text-gray-950"
                >
                    LOJA<span className="text-blue-600">TECH.</span>
                </a>

                <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
                    <a href="#inicio" className="hover:text-blue-600">
                        Início
                    </a>
                    <a href="#produtos" className="hover:text-blue-600">
                        Produtos
                    </a>
                    <a href="#sobre" className="hover:text-blue-600">
                        Sobre
                    </a>
                </nav>

                <a
                    href="#produtos"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                    Explorar loja
                </a>
            </div>
        </header>
    );
}

export default Navbar;
