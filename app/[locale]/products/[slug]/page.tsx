import { Metadata } from "next";
import { products } from "../../../../data/products";
import ProductGallery from "../../../../components/ProductGallery";
import RelatedProducts from "../../../../components/RelatedProducts";
import FactoryProcess from "../../../../sections/FactoryProcess";
import InquiryCTA from "../../../../components/InquiryCTA";
import InquiryForm from "../../../../components/InquiryForm";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product =
    products[slug as keyof typeof products];

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product =
    products[slug as keyof typeof products];

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Product not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-40 text-black">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          <ProductGallery images={product.gallery} />

          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Product Category
            </p>

            <h1 className="text-6xl font-bold tracking-tight">
              {product.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              {product.description}
            </p>

            <div className="mt-12 flex gap-4">

              <button className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">
                Request Quotation
              </button>

              <button className="rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white">
                Download Catalog
              </button>

            </div>

          </div>

        </div>

        <section className="mt-24">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-[32px] bg-neutral-100 p-10">

              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                MOQ
              </p>

              <div className="text-4xl font-bold">
                100 pcs
              </div>

            </div>

            <div className="rounded-[32px] bg-neutral-100 p-10">

              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Lead Time
              </p>

              <div className="text-4xl font-bold">
                7-21 Days
              </div>

            </div>

            <div className="rounded-[32px] bg-neutral-100 p-10">

              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                OEM & ODM
              </p>

              <div className="text-4xl font-bold">
                Supported
              </div>

            </div>

            <div className="rounded-[32px] bg-neutral-100 p-10">

              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Capacity
              </p>

              <div className="text-4xl font-bold">
                500K+
              </div>

            </div>

          </div>

        </section>

        <section className="mt-32 grid gap-20 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Features
            </p>

            <h2 className="mb-10 text-4xl font-bold">
              Manufacturing Capabilities
            </h2>

            <div className="space-y-5">

              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-neutral-200 p-6"
                >
                  {feature}
                </div>
              ))}

            </div>

          </div>

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Materials
            </p>

            <h2 className="mb-10 text-4xl font-bold">
              Available Fabrics
            </h2>

            <div className="flex flex-wrap gap-4">

              {product.materials.map((material) => (
                <div
                  key={material}
                  className="rounded-full border border-neutral-300 px-6 py-3"
                >
                  {material}
                </div>
              ))}

            </div>

          </div>

        </section>

        <section className="mt-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Specifications
          </p>

          <h2 className="mb-10 text-4xl font-bold">
            Product Specifications
          </h2>

          <div className="overflow-hidden rounded-[32px] border border-neutral-200">

            {product.specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 border-b border-neutral-200 px-8 py-6 last:border-0"
              >

                <div className="font-medium">
                  {spec.label}
                </div>

                <div className="text-neutral-600">
                  {spec.value}
                </div>

              </div>
            ))}

          </div>

        </section>

        <section className="mt-32 grid gap-20 lg:grid-cols-2">

          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Customization
            </p>

            <h2 className="mb-10 text-5xl font-bold leading-tight">
              Full OEM & ODM
              Manufacturing Support
            </h2>

            <div className="space-y-5">

              {[
                "Custom fabrics & materials",
                "Private labels & packaging",
                "Screen printing & embroidery",
                "Pantone color matching",
                "Custom sizing",
                "Global export support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 p-6"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="overflow-hidden rounded-[40px]">

            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="h-full w-full object-cover"
            />

          </div>

        </section>

        <section className="mt-32">

          <div className="mb-16 max-w-3xl">

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Frequently Asked Questions
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Product FAQs
            </h2>

          </div>

          <div className="space-y-5">

            {[
              {
                q: "What is your minimum order quantity?",
                a: "Our MOQ typically starts from 100 pieces depending on product type and customization requirements.",
              },

              {
                q: "Do you support OEM & ODM manufacturing?",
                a: "Yes. We provide full OEM & ODM apparel manufacturing solutions for global brands and businesses.",
              },

              {
                q: "Can you provide custom labels and packaging?",
                a: "Yes. We support woven labels, hangtags, polybags and full private label packaging.",
              },

              {
                q: "Do you ship internationally?",
                a: "Yes. We export apparel and merchandise products worldwide.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-[32px] border border-neutral-200 p-8"
              >

                <h3 className="text-2xl font-semibold">
                  {faq.q}
                </h3>

                <p className="mt-5 max-w-4xl leading-8 text-neutral-600">
                  {faq.a}
                </p>

              </div>
            ))}

          </div>

        </section>

        <FactoryProcess />

        <InquiryCTA />

        <InquiryForm />

        <RelatedProducts currentSlug={slug} />

      </div>

    </main>
  );
}
