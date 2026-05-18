import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 flex items-end justify-between">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Categories
            </p>

            <h2 className="text-5xl font-bold tracking-tight">
              Manufacturing Solutions
            </h2>

          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-[32px] bg-neutral-100"
            >

              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">

                <h3 className="text-3xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                  {category.description}
                </p>

                <button className="mt-6 rounded-full border border-white/30 px-5 py-3 text-sm backdrop-blur transition hover:bg-white hover:text-black">
                  Explore
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}