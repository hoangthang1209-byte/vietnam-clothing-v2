const items = [
  { number: "01", title: "Product Development", description: "Translate buyer requirements into product specifications, samples and production plans." },
  { number: "02", title: "Supplier Sourcing", description: "Coordinate manufacturing partners based on product category, material and order requirements." },
  { number: "03", title: "Quality Coordination", description: "Support quality checkpoints, specifications and production follow-up across suppliers." },
  { number: "04", title: "Order Management", description: "Coordinate timelines, packing requirements and shipment preparation for B2B orders." },
];
  
  export default function WhyChooseUs() {
    return (
      <section className="relative overflow-hidden bg-white py-32">
  
        <div className="absolute inset-0 opacity-40">
  
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-neutral-100 blur-3xl" />
  
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-neutral-200 blur-3xl" />
  
        </div>
  
        <div className="relative z-10 mx-auto max-w-7xl px-6">
  
          <div className="mb-20 max-w-3xl">
  
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Why Choose Us
            </p>
  
            <h2 className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Sourcing & Production
              <br />
              Management In Vietnam
            </h2>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {items.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[36px] border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-10 transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
  
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-neutral-100 blur-3xl transition duration-500 group-hover:bg-neutral-200" />
  
                <div className="relative z-10">
  
                  <div className="mb-8 text-6xl font-bold tracking-tight">
                    {item.number}
                  </div>
  
                  <h3 className="mb-5 text-2xl font-semibold">
                    {item.title}
                  </h3>
  
                  <p className="leading-8 text-neutral-600">
                    {item.description}
                  </p>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }