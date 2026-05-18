const testimonials = [
    {
      name: "Michael Chen",
      company: "Global F&B Brand",
      logo: "/brands/mcdonalds-seeklogo.png",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      quote:
        "Vietnam Clothing delivered excellent product quality and stable lead times for our nationwide uniform rollout.",
    },
  
    {
      name: "Sarah Williams",
      company: "Corporate Merchandise Team",
      logo: "/brands/mercedes-benz-seeklogo.png",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      quote:
        "Professional communication, fast sampling and premium manufacturing quality throughout the project.",
    },
  
    {
      name: "David Nguyen",
      company: "Fashion Startup",
      logo: "/brands/heineken-seeklogo.png",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      quote:
        "A reliable OEM partner for apparel production with strong attention to detail and finishing quality.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="relative overflow-hidden bg-white py-32">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-20 max-w-3xl">
  
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Testimonials
            </p>
  
            <h2 className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Trusted By Global
              <br />
              Brands & Teams
            </h2>
  
          </div>
  
          <div className="grid gap-8 lg:grid-cols-3">
  
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-[36px] border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
  
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-neutral-100 blur-3xl transition duration-500 group-hover:bg-neutral-200" />
  
                <div className="relative z-10 flex h-full flex-col">
  
                  <div className="mb-8 flex items-center justify-between">
  
                    <div className="flex gap-1">
  
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4 text-black"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.256 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
  
                    </div>
  
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-10 w-auto object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
  
                  </div>
  
                  <div className="mb-4 text-5xl leading-none text-neutral-200">
                    “
                  </div>
  
                  <p className="text-lg leading-8 text-neutral-700">
                    {item.quote}
                  </p>
  
                  <div className="mt-auto flex items-center gap-4 border-t border-neutral-200 pt-6">
  
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
  
                    <div>
  
                      <h3 className="text-xl font-semibold">
                        {item.name}
                      </h3>
  
                      <p className="mt-1 text-sm text-neutral-500">
                        {item.company}
                      </p>
  
                    </div>
  
                  </div>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  