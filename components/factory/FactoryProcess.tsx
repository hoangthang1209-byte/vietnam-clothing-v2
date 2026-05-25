const steps = [

    {
      title:
        "Consultation",
  
      description:
        "Discuss product requirements, MOQ, fabrics and production goals.",
    },
  
    {
      title:
        "Sampling",
  
      description:
        "Develop samples and prototypes for approval before production.",
    },
  
    {
      title:
        "Production",
  
      description:
        "Bulk apparel manufacturing with strict quality control process.",
    },
  
    {
      title:
        "Shipping",
  
      description:
        "Global export support and delivery for international brands.",
    },
  ];
  
  export default function FactoryProcess() {
  
    return (
  
      <section
        className="
          border-t
          border-black/10
          px-6
          py-24
        "
      >
  
        <div
          className="
            mx-auto
            max-w-7xl
          "
        >
  
          <div
            className="
              max-w-3xl
            "
          >
  
            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >
  
              Manufacturing Process
  
            </div>
  
            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >
  
              How We Work
  
            </h2>
  
          </div>
  
          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
  
            {
              steps.map(
                (
                  step,
                  index
                ) => (
  
                  <div
                    key={
                      step.title
                    }
                    className="
                      rounded-[32px]
                      border
                      border-black/10
                      p-10
                    "
                  >
  
                    <div
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                      "
                    >
  
                      0{
                        index + 1
                      }
  
                    </div>
  
                    <div
                      className="
                        mt-6
                        text-3xl
                        font-bold
                        tracking-tight
                      "
                    >
  
                      {
                        step.title
                      }
  
                    </div>
  
                    <p
                      className="
                        mt-6
                        leading-8
                        text-black/60
                      "
                    >
  
                      {
                        step.description
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