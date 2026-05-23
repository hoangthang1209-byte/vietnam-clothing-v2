const steps = [

    {
      number: "01",
      title: "Design Consultation",
  
      description:
        "Discuss materials, fit, branding and manufacturing requirements with our team.",
    },
  
    {
      number: "02",
      title: "Sampling & Development",
  
      description:
        "Create prototypes, fit samples and material approvals before bulk production.",
    },
  
    {
      number: "03",
      title: "Bulk Production",
  
      description:
        "Scalable OEM & ODM apparel manufacturing with strict production standards.",
    },
  
    {
      number: "04",
      title: "Quality Control",
  
      description:
        "Every order goes through detailed inspection before packing and shipment.",
    },
  
    {
      number: "05",
      title: "Global Shipping",
  
      description:
        "Worldwide logistics support for fashion brands and corporate projects.",
    },
  ];
  
  export default function FactoryProcess() {
  
    return (
  
      <section className="py-32">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="max-w-4xl">
  
            <div className="text-sm uppercase tracking-[0.3em] text-black/40">
  
              Manufacturing Process
  
            </div>
  
            <h2
              className="
                mt-6
                text-6xl
                font-semibold
                leading-none
                tracking-tight
              "
            >
  
              From Concept
              To Global
              Production
  
            </h2>
  
          </div>
  
          <div className="mt-20 space-y-8">
  
            {
              steps.map(
                (
                  step
                ) => (
  
                  <div
                    key={
                      step.number
                    }
                    className="
                      grid gap-8
                      border-t border-black/10
                      py-10
  
                      md:grid-cols-[120px_1fr_2fr]
                    "
                  >
  
                    <div
                      className="
                        text-2xl
                        font-semibold
                        tracking-tight
                      "
                    >
  
                      {step.number}
  
                    </div>
  
                    <div
                      className="
                        text-3xl
                        font-semibold
                        tracking-tight
                      "
                    >
  
                      {step.title}
  
                    </div>
  
                    <div
                      className="
                        text-lg
                        leading-relaxed
                        text-black/70
                      "
                    >
  
                      {step.description}
  
                    </div>
  
                  </div>
                )
              )
            }
  
          </div>
  
        </div>
  
      </section>
    );
  }