export default function HomepageCTA() {

    return (
  
      <section
        className="
          relative
          overflow-hidden
          bg-black
          py-40
          text-white
        "
      >
  
        <div
          className="
            absolute inset-0
            opacity-20
          "
        >
  
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="
              h-full w-full
              object-cover
            "
          />
  
        </div>
  
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            px-6
            text-center
          "
        >
  
          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
  
            Start Your Project
  
          </div>
  
          <h2
            className="
              mx-auto
              mt-8
              max-w-5xl
              text-6xl
              font-semibold
              leading-none
              tracking-tight
  
              md:text-8xl
            "
          >
  
            Premium Apparel
            Manufacturing
            For Global Brands
  
          </h2>
  
          <p
            className="
              mx-auto
              mt-10
              max-w-2xl
              text-xl
              leading-relaxed
              text-white/70
            "
          >
  
            Partner with Vietnam Clothing
            for scalable OEM & ODM apparel
            manufacturing solutions built
            for modern fashion brands.
  
          </p>
  
          <div
            className="
              mt-14
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
  
            <a
              href="/en/contact"
              className="
                rounded-full
                bg-white
                px-8 py-4
                text-black
                transition
                hover:opacity-90
              "
            >
  
              Request Quotation
  
            </a>
  
            <a
              href="/collections"
              className="
                rounded-full
                border border-white/20
                px-8 py-4
                text-white
                transition
                hover:bg-white/10
              "
            >
  
              Explore Collections
  
            </a>
  
          </div>
  
        </div>
  
      </section>
    );
  }