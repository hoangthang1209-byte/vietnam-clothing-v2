const steps = [

  {
    number:
      "01",

    title:
      "Consultation",

    description:
      "Understand project requirements, target market, materials and production goals.",
  },

  {
    number:
      "02",

    title:
      "Sampling",

    description:
      "Develop samples, fitting adjustments and production-ready specifications.",
  },

  {
    number:
      "03",

    title:
      "Production",

    description:
      "Large-scale apparel manufacturing with strict quality control standards.",
  },

  {
    number:
      "04",

    title:
      "Printing & Embroidery",

    description:
      "Premium decoration solutions including silkscreen, DTG and embroidery.",
  },

  {
    number:
      "05",

    title:
      "Quality Control",

    description:
      "Final inspection and international production quality assurance workflow.",
  },

  {
    number:
      "06",

    title:
      "Global Export",

    description:
      "Packaging, logistics and worldwide shipping support for global clients.",
  },
];

export default function FactoryProcess() {

  return (

    <section
      className="
        border-y
        border-black/5
        bg-neutral-50
        py-32
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            mb-20
            max-w-4xl
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

            Manufacturing Workflow

          </div>

          <h2
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            From Concept
            To Production

          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-black/60
            "
          >

            Vietnam Clothing provides
            a complete OEM & ODM
            apparel manufacturing
            workflow from consultation
            and sampling to production,
            quality control and export.

          </p>

        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {
            steps.map(
              (
                step,
                index
              ) => (

                <div
                  key={index}
                  className="
                    rounded-[36px]
                    border
                    border-black/5
                    bg-white
                    p-10
                    transition
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >

                  <div
                    className="
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.3em]
                      text-black/30
                    "
                  >

                    {
                      step.number
                    }

                  </div>

                  <h3
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

                  </h3>

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