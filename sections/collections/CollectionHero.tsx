import type {
    Collection,
    CollectionSection,
  }
  from "@/types/product";
  
  type Props = {
    collection: Collection;
    section?: CollectionSection;
  };
  
  export default function CollectionHero({
    collection,
  }: Props) {
  
    return (
  
      <section className="relative overflow-hidden pt-40">
  
        <img
          src={collection.heroImage}
          alt={collection.title}
          className="
            absolute inset-0
            h-full w-full
            object-cover
          "
        />
  
        <div className="absolute inset-0 bg-black/60" />
  
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-white">
  
          <div className="max-w-4xl">
  
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">
  
              Vietnam Clothing
  
            </div>
  
            <h1
              className="
                mt-6
                text-7xl
                font-semibold
                leading-none
                tracking-tight
              "
            >
  
              {collection.title}
  
            </h1>
  
            <p
              className="
                mt-8
                max-w-2xl
                text-xl
                leading-relaxed
                text-white/70
              "
            >
  
              {collection.description}
  
            </p>
  
          </div>
  
        </div>
  
      </section>
    );
  }