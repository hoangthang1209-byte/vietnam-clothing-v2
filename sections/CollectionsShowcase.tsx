const collections = [

    {
      title:
        "Streetwear",
  
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      title:
        "Corporate Uniforms",
  
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      title:
        "Activewear",
  
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      title:
        "Merchandise",
  
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",
    },
  ];
  
  export default function CollectionsShowcase() {
  
    return (
  
      <section className="py-32">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="max-w-3xl">
  
            <div className="text-sm uppercase tracking-[0.3em] text-black/40">
  
              Collections
  
            </div>
  
            <h2
              className="
                mt-6
                text-6xl
                font-semibold
                tracking-tight
                leading-none
              "
            >
  
              Built For
              Modern Apparel
              Brands
  
            </h2>
  
          </div>
  
          <div className="mt-20 grid gap-8 md:grid-cols-2">
  
            {
              collections.map(
                (
                  collection
                ) => (
  
                  <a
                    key={
                      collection.title
                    }
                    href="/collections"
                    className="group block"
                  >
  
                    <div
                      className="
                        overflow-hidden
                        rounded-[40px]
                      "
                    >
  
                      <img
                        src={
                          collection.image
                        }
                        alt={
                          collection.title
                        }
                        className="
                          aspect-[4/5]
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />
  
                    </div>
  
                    <div className="mt-6 flex items-center justify-between">
  
                      <div className="text-3xl font-semibold">
  
                        {
                          collection.title
                        }
  
                      </div>
  
                      <div className="text-black/40">
  
                        Explore →
  
                      </div>
  
                    </div>
  
                  </a>
                )
              )
            }
  
          </div>
  
        </div>
  
      </section>
    );
  }