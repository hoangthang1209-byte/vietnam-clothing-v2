import type {
    CollectionSection,
  } from "@/types/collection";
  
  type Props = {
    sections:
      CollectionSection[];
  };
  
  export default function CollectionContentRenderer({
    sections,
  }: Props) {
  
    return (
  
      <section className="py-24">
  
        <div className="mx-auto max-w-5xl px-6">
  
          {
            sections.map(
              (
                section,
                index
              ) => (
  
                <div
                  key={index}
                  className="mt-20"
                >
  
                  <div
                    className="
                      text-sm
                      uppercase
                      tracking-[0.3em]
                      text-black/40
                    "
                  >
  
                    {
                      section.type
                    }
  
                  </div>
  
                  <h2
                    className="
                      mt-4
                      text-5xl
                      font-semibold
                      tracking-tight
                      leading-none
                    "
                  >
  
                    {
                      section.title
                    }
  
                  </h2>
  
                  <p
                    className="
                      mt-8
                      text-xl
                      leading-relaxed
                      text-black/70
                    "
                  >
  
                    {
                      section.content
                    }
  
                  </p>
  
                </div>
              )
            )
          }
  
        </div>
  
      </section>
    );
  }