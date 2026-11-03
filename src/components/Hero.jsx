
function Hero() {
    return (
        <section
            id="inicio"
            className="mx-auto max-w-7xl px-6 pt-8"
        >
            <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-8 py-16 text-white md:px-16 md:py-24">

                <div className="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full border-[70px] border-blue-500/15" />
                <div className="pointer-events-none absolute -bottom-40 right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="pointer-events-none absolute right-16 top-24 hidden h-56 w-56 rotate-12 rounded-[3rem] border border-blue-400/30 bg-gradient-to-br from-blue-400/20 to-transparent shadow-2xl lg:block" />

                <div className="relative z-10 max-w-2xl">
                    <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
                        Bem-vindo à LOJATECH
                    </span>

                    <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                        Tecnologia para
                        <span className="block text-blue-400">
                            ir mais longe.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 md:text-lg">
                        Explore nossa seleção de eletrônicos e encontre
                        produtos para acompanhar seu dia a dia.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <a
                            href="#produtos"
                            className="rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                        >
                            Ver produtos
                        </a>

                        <a
                            href="#sobre"
                            className="rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            Conheça a loja
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
