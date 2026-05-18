    export default function FactoryProcess() {
    return (
      <section className="bg-black py-32 text-white">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
  
            <div className="max-w-3xl">
  
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/40">
                Factory Tour
              </p>
  
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                Inside Vietnam
                <br />
                Clothing Factory
              </h2>
  
            </div>
  
            <p className="max-w-xl leading-8 text-white/60">
              Explore our apparel manufacturing workflow, quality control process and production capabilities for global clients.
            </p>
  
          </div>
  
          <div className="group relative overflow-hidden rounded-[40px]">
  
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop"
              alt="Factory"
              className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
  
            <div className="absolute inset-0 bg-black/40" />
  
            <div className="absolute inset-0 flex items-center justify-center">
  
              <button className="flex h-28 w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:scale-110 hover:bg-white/30">
  
                <div className="ml-2 text-4xl text-white">
                  ▶
                </div>
  
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }