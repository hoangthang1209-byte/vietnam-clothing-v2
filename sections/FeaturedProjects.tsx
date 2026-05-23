const projects = [

    {
      title:
        "Global Streetwear Collection",
  
      category:
        "Streetwear",
  
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      title:
        "Corporate Uniform Program",
  
      category:
        "Corporate Uniforms",
  
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop",
    },
  
    {
      title:
        "Premium Merchandise Campaign",
  
      category:
        "Merchandise",
  
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",
    },
  ];
  
  export default function FeaturedProjects() {
  
    return (
  
      <section className="bg-neutral-100 py-32">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="max-w-4xl">
  
            <div className="text-sm uppercase tracking-[0.3em] text-black/40">
  
              Featured Projects
  
            </div>
  
            <h2
              className="
                mt-6
                text-6xl
                font-semibold
                leading-none
                tracking-tight
              "
            >
  
              Manufacturing
              Built For
              Modern Brands
  
            </h2>
  
          </div>
  
          <div className="mt-20 grid gap-8 md:grid-cols-3">
  
            {
              projects.map(
                (
                  project
                ) => (
  
                  <div
                    key={
                      project.title
                    }
                    className="
                      group
                    "
                  >
  
                    <div
                      className="
                        overflow-hidden
                        rounded-[40px]
                      "
                    >
  
                      <img
                        src={
                          project.image
                        }
                        alt={
                          project.title
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
  
                    <div className="mt-6">
  
                      <div
                        className="
                          text-sm
                          uppercase
                          tracking-[0.2em]
                          text-black/40
                        "
                      >
  
                        {
                          project.category
                        }
  
                      </div>
  
                      <div
                        className="
                          mt-3
                          text-3xl
                          font-semibold
                          tracking-tight
                        "
                      >
  
                        {
                          project.title
                        }
  
                      </div>
  
                    </div>
  
                  </div>
                )
              )
            }
  
          </div>
  
        </div>
  
      </section>
    );
  }