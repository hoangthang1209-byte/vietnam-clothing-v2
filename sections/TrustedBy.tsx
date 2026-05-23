const logos = [
    "Nike",
    "Adidas",
    "Puma",
    "Uniqlo",
    "H&M",
    "Zara",
  ];
  
  export default function TrustedBy() {
  
    return (
  
      <section className="border-y border-black/10 py-10">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center text-sm uppercase tracking-[0.3em] text-black/40">
  
            Trusted by global brands
  
          </div>
  
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6">
  
            {
              logos.map(
                (
                  logo
                ) => (
  
                  <div
                    key={logo}
                    className="
                      flex items-center justify-center
                      text-xl font-semibold
                      text-black/40
                    "
                  >
  
                    {logo}
  
                  </div>
                )
              )
            }
  
          </div>
  
        </div>
  
      </section>
    );
  }