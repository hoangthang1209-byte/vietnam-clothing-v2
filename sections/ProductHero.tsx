import type {
  ProductSectionProps,
}
from "@/types/product";

export default function ProductHero({
  product,
  section,
}: ProductSectionProps) {

  const variant =
    section?.variant ||
    "centered";

  if (
    variant ===
    "split"
  ) {

    return (

      <section className="grid min-h-screen items-center gap-20 py-24 lg:grid-cols-2">

        <div>

          <div className="text-sm uppercase tracking-[0.3em] text-black/40">

            Vietnam Clothing

          </div>

          <h1 className="mt-6 text-7xl font-semibold leading-none tracking-tight">

            {product.title}

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/60">

            {product.description}

          </p>

        </div>

        <div className="overflow-hidden rounded-[48px]">

          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />

        </div>

      </section>
    );
  }

  return (

    <section className="py-32 text-center">

      <div className="mx-auto max-w-5xl">

        <div className="text-sm uppercase tracking-[0.3em] text-black/40">

          Vietnam Clothing

        </div>

        <h1 className="mt-6 text-8xl font-semibold leading-none tracking-tight">

          {product.title}

        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-black/60">

          {product.description}

        </p>

      </div>

      <div className="mt-20 overflow-hidden rounded-[48px]">

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />

      </div>

    </section>
  );
}