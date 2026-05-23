import Image
from "next/image";

const projects = [

  {
    title:
      "Global Streetwear Campaign",

    category:
      "OEM Manufacturing",

    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title:
      "Premium Uniform Collection",

    category:
      "Corporate Uniforms",

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title:
      "Fashion Basics Production",

    category:
      "Apparel Manufacturing",

    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function FeaturedProjects() {

  return (

    <section
      className="
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
            flex
            flex-col
            justify-between
            gap-10
            lg:flex-row
            lg:items-end
          "
        >

          <div
            className="
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

              Featured Projects

            </div>

            <h2
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >

              Manufacturing
              Portfolio

            </h2>

          </div>

          <p
            className="
              max-w-xl
              text-lg
              leading-8
              text-black/60
            "
          >

            Selected OEM & ODM
            apparel manufacturing
            projects produced for
            fashion brands, uniforms
            and merchandise campaigns.

          </p>

        </div>

        <div
          className="
            grid
            gap-8
            lg:grid-cols-12
          "
        >

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              lg:col-span-7
            "
          >

            <Image
              src={
                projects[0].image
              }
              alt={
                projects[0].title
              }
              width={2000}
              height={2400}
              className="
                aspect-[4/5]
                h-full
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                p-10
                text-white
              "
            >

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                "
              >

                {
                  projects[0].category
                }

              </div>

              <h3
                className="
                  mt-5
                  text-5xl
                  font-bold
                  tracking-tight
                "
              >

                {
                  projects[0].title
                }

              </h3>

            </div>

          </div>

          <div
            className="
              grid
              gap-8
              lg:col-span-5
            "
          >

            {
              projects
                .slice(1)
                .map(
                  (
                    project,
                    index
                  ) => (

                    <div
                      key={index}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[40px]
                      "
                    >

                      <Image
                        src={
                          project.image
                        }
                        alt={
                          project.title
                        }
                        width={1600}
                        height={1200}
                        className="
                          aspect-[4/3]
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/70
                          via-black/10
                          to-transparent
                        "
                      />

                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          p-8
                          text-white
                        "
                      >

                        <div
                          className="
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-white/50
                          "
                        >

                          {
                            project.category
                          }

                        </div>

                        <h3
                          className="
                            mt-4
                            text-3xl
                            font-bold
                            tracking-tight
                          "
                        >

                          {
                            project.title
                          }

                        </h3>

                      </div>

                    </div>
                  )
                )
            }

          </div>

        </div>

      </div>

    </section>
  );
}