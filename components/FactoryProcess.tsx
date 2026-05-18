const steps = [
    {
      number: "01",
      title: "Design Consultation",
      description:
        "Discuss product requirements, fabrics, sizing and branding details.",
    },
  
    {
      number: "02",
      title: "Sampling",
      description:
        "Develop prototypes and approval samples before mass production.",
    },
  
    {
      number: "03",
      title: "Mass Production",
      description:
        "Bulk manufacturing with strict quality control standards.",
    },
  
    {
      number: "04",
      title: "Quality Inspection",
      description:
        "Final inspection for stitching, printing and measurement accuracy.",
    },
  
    {
      number: "05",
      title: "Packaging & Shipping",
      description:
        "Custom packaging and worldwide export logistics support.",
    },
  ];
  
  export default function FactoryProcess() {
    return (
      <section className="mt-32">
  
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Production Process
        </p>
  
        <h2 className="mb-14 text-5xl font-bold">
          How We Manufacture
        </h2>
  
        <div className="grid gap-8 lg:grid-cols-5">
  
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[32px] border border-neutral-200 p-8"
            >
  
              <div className="mb-8 text-5xl font-bold text-neutral-200">
                {step.number}
              </div>
  
              <h3 className="mb-4 text-2xl font-bold">
                {step.title}
              </h3>
  
              <p className="leading-7 text-neutral-600">
                {step.description}
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }