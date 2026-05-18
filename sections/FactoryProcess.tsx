const processes = [
    {
      step: "01",
      title: "Fabric Sourcing",
      description:
        "Premium fabric sourcing with stable quality standards and color consistency.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      step: "02",
      title: "Pattern & Sampling",
      description:
        "Professional pattern development and fast sampling for bulk production approval.",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      step: "03",
      title: "Printing & Embroidery",
      description:
        "High-quality screen printing, DTF, embroidery and finishing solutions.",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      step: "04",
      title: "Quality Control",
      description:
        "Strict QC standards before packaging and global export delivery.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    },
  ];
  
  export default function FactoryProcess() {
    return (
      <section className="bg-black py-32 text-white">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-20 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
  
            <div className="max-w-3xl">
  
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/40">
                Manufacturing Process
              </p>
  
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                Inside Our
                <br />
                Factory Workflow
              </h2>
  
            </div>
  
            <p className="max-w-xl leading-8 text-white/60">
              End-to-end apparel manufacturing solutions from sourcing to final production with international quality standards.
            </p>
  
          </div>
  
          <div className="grid gap-8 lg:grid-cols-2">
  
            {processes.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[32px] bg-neutral-900"
              >
  
                <div className="relative aspect-[4/3] overflow-hidden">
  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
  
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/50 px-5 py-2 text-sm backdrop-blur">
                    Step {item.step}
                  </div>
  
                </div>
  
                <div className="p-10">
  
                  <h3 className="mb-5 text-3xl font-bold">
                    {item.title}
                  </h3>
  
                  <p className="leading-8 text-white/60">
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