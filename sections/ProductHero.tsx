import ProductGallery
from "@/components/ProductGallery";

type Props = {
  product: any;
};

export default function ProductHero({
  product,
}: Props) {

  return (

    <section className="grid gap-16 lg:grid-cols-2">

      <ProductGallery
        images={product.gallery}
      />

      <div>

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {product.category}
        </p>

        <h1 className="text-6xl font-bold tracking-tight leading-none">
          {product.title}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
          {product.description}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">

          <button className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">
            Request Quotation
          </button>

          <button className="rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white">
            Download Catalog
          </button>

        </div>

      </div>

    </section>
  );
}