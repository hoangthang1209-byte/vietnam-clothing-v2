const countries = [
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "Japan",
    "Singapore",
    "South Korea",
    "United Kingdom",
  ];
  
  export default function GlobalExport() {
    return (
      <section className="bg-white py-32">
  
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">
  
          <div>
  
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Global Export
            </p>
  
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Exporting Vietnamese
              <br />
              Manufacturing Worldwide
            </h2>
  
            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              Vietnam Clothing provides OEM & ODM apparel manufacturing services for brands, corporate uniforms and merchandise campaigns across global markets.
            </p>
  
            <div className="mt-12 grid grid-cols-2 gap-4">
  
              {countries.map((country) => (
                <div
                  key={country}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5 text-sm font-medium"
                >
                  {country}
                </div>
              ))}
  
            </div>
  
          </div>
  
          <div className="relative overflow-hidden rounded-[40px] bg-black p-10 text-white">
  
            <div className="absolute inset-0 opacity-20">
  
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
  
              <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-white blur-3xl" />
  
            </div>
  
            <div className="relative z-10">
  
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/40">
                Export Statistics
              </p>
  
              <div className="space-y-10">
  
                <div>
  
                  <div className="text-6xl font-bold">
                    30+
                  </div>
  
                  <p className="mt-3 text-white/60">
                    Countries Exported
                  </p>
  
                </div>
  
                <div>
  
                  <div className="text-6xl font-bold">
                    500K
                  </div>
  
                  <p className="mt-3 text-white/60">
                    Pieces Monthly Capacity
                  </p>
  
                </div>
  
                <div>
  
                  <div className="text-6xl font-bold">
                    OEM
                  </div>
  
                  <p className="mt-3 text-white/60">
                    Full Package Manufacturing
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }