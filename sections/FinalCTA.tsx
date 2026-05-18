export default function FinalCTA() {
    return (
      <section className="relative overflow-hidden bg-black py-32 text-white">
  
        <div className="absolute inset-0 opacity-30">
  
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-neutral-700 blur-3xl" />
  
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-neutral-800 blur-3xl" />
  
        </div>
  
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
  
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            Start Your Project
          </p>
  
          <h2 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
            Ready To Build
            <br />
            Your Next
            <br />
            Apparel Project?
          </h2>
  
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/60">
            Vietnam Clothing provides premium OEM & ODM manufacturing
            solutions for apparel brands, corporate uniforms and
            merchandise projects worldwide.
          </p>
  
          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
  
            <button className="rounded-full bg-white px-10 py-5 text-sm font-medium text-black transition duration-300 hover:scale-105 hover:bg-neutral-200">
              Request Quotation
            </button>
  
            <button className="rounded-full border border-white/20 bg-white/5 px-10 py-5 text-sm backdrop-blur transition duration-300 hover:bg-white hover:text-black">
              Download Catalog
            </button>
  
          </div>
  
          <div className="mt-20 grid gap-6 border-t border-white/10 pt-12 text-left md:grid-cols-3">
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
  
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/40">
                Email
              </p>
  
              <p className="text-lg font-medium">
                support@vietnamclothing.vn
              </p>
  
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
  
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/40">
                Phone
              </p>
  
              <p className="text-lg font-medium">
                +84 867 40 1618
              </p>
  
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
  
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/40">
                Location
              </p>
  
              <p className="text-lg font-medium">
                Ho Chi Minh City, Vietnam
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  