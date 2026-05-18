const caseStudies = [
    {
      brand: "Highlands Coffee",
      title: "Uniform & Merchandise System",
      description:
        "Premium uniforms and promotional merchandise for nationwide campaigns.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      brand: "Tech Startup",
      title: "Employee Welcome Kits",
      description:
        "Onboarding kits designed for modern technology companies and growing teams.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      brand: "Fitness Brand",
      title: "Performance Sportswear",
      description:
        "Custom activewear and sports uniforms for fitness communities.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
    },
  ];
  
  export default function CaseStudies() {
    return (
      <section className="bg-black py-32 text-white">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-20 max-w-3xl">
  
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/50">
              Case Studies
            </p>
  
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Trusted By
              <br />
              Modern Brands
            </h2>
  
          </div>
  
          <div className="grid gap-8 lg:grid-cols-3">
  
            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[32px] bg-neutral-900"
              >
  
                <div className="aspect-[4/5] overflow-hidden">
  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
  
                </div>
  
                <div className="p-8">
  
                  <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">
                    {item.brand}
                  </p>
  
                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>
  
                  <p className="mt-5 leading-7 text-white/70">
                    {item.description}
                  </p>
  
                  <button className="mt-8 rounded-full border border-white/20 px-5 py-3 text-sm transition hover:bg-white hover:text-black">
                    View Project
                  </button>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }