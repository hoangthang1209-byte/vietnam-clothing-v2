const images = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",
  
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1400&auto=format&fit=crop",
  
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop",
  
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1400&auto=format&fit=crop",
  ];
  
  export default function FactoryGallery() {
    return (
      <section className="bg-black py-32 text-white">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-20 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
  
            <div className="max-w-3xl">
  
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/40">
                Factory Gallery
              </p>
  
              <h2 className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
                Inside Vietnam
                <br />
                Clothing Production
              </h2>
  
            </div>
  
            <p className="max-w-xl leading-8 text-white/60">
              Explore our manufacturing process, production workflow and apparel development capabilities for global clients.
            </p>
  
          </div>
  
          <div className="grid gap-6 lg:grid-cols-12">
  
            <div className="overflow-hidden rounded-[36px] lg:col-span-7">
  
              <img
                src={images[0]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
  
            </div>
  
            <div className="grid gap-6 lg:col-span-5">
  
              <div className="overflow-hidden rounded-[36px]">
  
                <img
                  src={images[1]}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
  
              </div>
  
              <div className="grid grid-cols-2 gap-6">
  
                {images.slice(2).map((image) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-[36px]"
                  >
  
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
  
                  </div>
                ))}
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }