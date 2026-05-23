type Item = {

    question:
      string;
  
    answer:
      string;
  };
  
  type Props = {
  
    items:
      Item[];
  };
  
  export default function FAQSection({
    items,
  }: Props) {
  
    if (
      items.length === 0
    ) {
  
      return null;
    }
  
    const faqSchema = {
  
      "@context":
        "https://schema.org",
  
      "@type":
        "FAQPage",
  
      mainEntity:
        items.map(
          (
            item
          ) => ({
  
            "@type":
              "Question",
  
            name:
              item.question,
  
            acceptedAnswer: {
  
              "@type":
                "Answer",
  
              text:
                item.answer,
            },
          })
        ),
    };
  
    return (
  
      <section className="py-24">
  
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                faqSchema
              ),
          }}
        />
  
        <div className="mx-auto max-w-4xl px-6">
  
          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >
  
            FAQ
  
          </div>
  
          <div className="mt-12 space-y-6">
  
            {
              items.map(
                (
                  item
                ) => (
  
                  <div
                    key={
                      item.question
                    }
                    className="
                      rounded-[32px]
                      border
                      border-black/10
                      p-8
                    "
                  >
  
                    <h3
                      className="
                        text-2xl
                        font-semibold
                      "
                    >
  
                      {
                        item.question
                      }
  
                    </h3>
  
                    <p
                      className="
                        mt-4
                        text-lg
                        leading-relaxed
                        text-black/70
                      "
                    >
  
                      {
                        item.answer
                      }
  
                    </p>
  
                  </div>
                )
              )
            }
  
          </div>
  
        </div>
  
      </section>
    );
  }