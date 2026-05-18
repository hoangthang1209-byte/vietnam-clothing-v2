export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-32">

        <div className="grid gap-20 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              Vietnam Clothing
            </p>

            <h2 className="max-w-md text-5xl font-bold leading-tight tracking-tight">
              Premium Apparel &
              Merchandise Manufacturing
              From Vietnam
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-white/60">
              Vietnam Clothing provides OEM & ODM apparel manufacturing services for corporate uniforms, merchandise and global fashion brands.
            </p>

            <div className="mt-10 flex gap-4">

              <button className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-105">
                Get Quotation
              </button>

              <button className="rounded-full border border-white/20 px-8 py-4 text-sm transition hover:bg-white hover:text-black">
                Download Catalog
              </button>

            </div>

          </div>

          <div>

            <h3 className="mb-8 text-lg font-semibold">
              Products
            </h3>

            <ul className="space-y-5 text-white/60">

              <li className="transition hover:text-white">
                T-Shirts
              </li>

              <li className="transition hover:text-white">
                Polo Shirts
              </li>

              <li className="transition hover:text-white">
                Hoodies
              </li>

              <li className="transition hover:text-white">
                Corporate Gifts
              </li>

              <li className="transition hover:text-white">
                Uniforms
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-8 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-5 text-white/60">

              <li className="transition hover:text-white">
                About Us
              </li>

              <li className="transition hover:text-white">
                Factory
              </li>

              <li className="transition hover:text-white">
                Capabilities
              </li>

              <li className="transition hover:text-white">
                Clients
              </li>

              <li className="transition hover:text-white">
                Contact
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-8 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-6 text-white/60">

              <p>
                support@vietnamclothing.vn
              </p>

              <p>
                0867401618
              </p>

              <p>
                Ho Chi Minh City,
                Vietnam
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-white/40 lg:flex-row lg:items-center lg:justify-between">

          <p>
            © 2026 Vietnam Clothing.
            All rights reserved.
          </p>

          <div className="flex gap-8">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Facebook
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}