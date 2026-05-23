import type {
    Collection,
    CollectionSection,
  }
  from "@/types/product";
  
  type Props = {
    collection: Collection;
    section?: CollectionSection;
  };
  
  export default function CollectionCTA({
    collection,
    section,
  }: Props) {
  
    const variant =
      section?.variant ||
      "dark";
  
    const theme =
      section?.theme ||
      "dark";
  
    return (
  
      <section className="mx-auto max-w-7xl px-6 py-24">
  
        <div
          className={`
            rounded-[48px]
            px-10 py-20
            text-center
            lg:px-20
            ${
              theme === "dark"
                ? "bg-black text-white"
                : "border border-black/10 bg-white text-black"
            }
          `}
        >
  
          <div className="mx-auto max-w-4xl">
  
            <div
              className={`
                text-sm uppercase tracking-[0.3em]
                ${
                  theme === "dark"
                    ? "text-white/40"
                    : "text-black/40"
                }
              `}
            >
  
              Vietnam Clothing
  
            </div>
  
            <h2 className="mt-6 text-6xl font-semibold tracking-tight leading-none">
  
              Start Your
              Manufacturing Project
  
            </h2>
  
            <p
              className={`
                mx-auto mt-8 max-w-2xl
                text-xl leading-relaxed
                ${
                  theme === "dark"
                    ? "text-white/60"
                    : "text-black/60"
                }
              `}
            >
  
              Work directly with Vietnam Clothing
              for scalable OEM & ODM apparel manufacturing solutions.
  
            </p>
  
            <div className="mt-12">
  
              <button
                className={`
                  rounded-full px-10 py-5
                  ${
                    theme === "dark"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }
                `}
              >
  
                Request Quotation
  
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }