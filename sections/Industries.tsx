const industries = [
  {
    title: "Corporate Uniforms",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "F&B Chains",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Fashion Brands",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Corporate Gifts",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Industries() {
  return (
    <section className="bg-neutral-100 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Industries
          </p>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight">
            Apparel Manufacturing Solutions
            For Every Industry
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-[40px]"
            >

              <div className="absolute inset-0 z-10 bg-black/30" />

              <img
                src={industry.image}
                alt={industry.title}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 z-20 p-10 text-white">

                <h3 className="text-4xl font-bold">
                  {industry.title}
                </h3>

                <p className="mt-4 max-w-md text-lg text-white/80">
                  Premium manufacturing solutions tailored for your industry.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
