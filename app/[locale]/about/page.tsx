import MegaMenu from "../../../components/MegaMenu";
import Footer from "../../../sections/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      <MegaMenu />

      <section className="relative overflow-hidden bg-black px-6 pb-32 pt-52 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            About Vietnam Clothing
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-tight tracking-tight lg:text-8xl">
            Premium Apparel
            Manufacturing
            Partner From Vietnam
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/60">
            Vietnam Clothing provides OEM & ODM apparel manufacturing solutions for fashion brands, corporate uniforms and merchandise projects worldwide.
          </p>

        </div>

      </section>

      <section className="py-32">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Our Story
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Built For
              <br />
              Global Manufacturing
            </h2>

            <p className="mt-10 leading-8 text-neutral-600">
              Vietnam Clothing was established to deliver premium apparel manufacturing solutions with stable quality, fast communication and flexible production support for global brands and businesses.
            </p>

            <p className="mt-6 leading-8 text-neutral-600">
              We specialize in corporate uniforms, merchandise production, OEM & ODM apparel manufacturing and export solutions worldwide.
            </p>

          </div>

          <div className="overflow-hidden rounded-[40px]">

            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="h-[700px] w-full object-cover"
            />

          </div>

        </div>

      </section>

      <section className="bg-neutral-100 py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 max-w-3xl">

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Manufacturing Capabilities
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Reliable OEM &
              ODM Production
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "500K+",
                desc: "Monthly Capacity",
              },

              {
                title: "100+",
                desc: "Global Clients",
              },

              {
                title: "OEM",
                desc: "Full Package Production",
              },

              {
                title: "24/7",
                desc: "Production Support",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-10"
              >

                <div className="text-5xl font-bold">
                  {item.title}
                </div>

                <p className="mt-4 text-neutral-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 max-w-3xl">

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Core Values
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Manufacturing With
              Quality & Reliability
            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {[
              {
                title: "Stable Quality",
                desc: "Strict quality control standards across all manufacturing stages.",
              },

              {
                title: "Fast Communication",
                desc: "Responsive support for international clients and project management.",
              },

              {
                title: "Flexible Production",
                desc: "OEM & ODM solutions tailored for different business needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-neutral-200 p-10"
              >

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-black px-6 py-32 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/40">
            Start Your Project
          </p>

          <h2 className="text-6xl font-bold leading-tight tracking-tight">
            Let’s Build
            <br />
            Your Next
            <br />
            Apparel Project
          </h2>

          <p className="mx-auto mt-10 max-w-2xl leading-8 text-white/60">
            Contact Vietnam Clothing for OEM & ODM apparel manufacturing solutions tailored to your business.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <button className="rounded-full bg-white px-10 py-5 text-black transition hover:scale-105">
              Request Quotation
            </button>

            <button className="rounded-full border border-white/20 px-10 py-5 transition hover:bg-white hover:text-black">
              Download Catalog
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
