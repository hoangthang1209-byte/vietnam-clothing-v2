import Image
from "next/image";

const collections = [

  {
    title:
      "Streetwear Collection",

    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title:
      "Corporate Uniforms",

    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title:
      "Premium Basics",

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CollectionsShowcase() {

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

              Featured Collections

            </div>

            <h2
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >

              Premium Apparel
              Collections

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

            Explore modern apparel
            manufacturing solutions
            designed for fashion brands,
            uniforms and global
            merchandise campaigns.

          </p>

        </div>

        <div
          className="
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {
            collections.map(
              (
                item,
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
                      item.image
                    }
                    alt={
                      item.title
                    }
                    width={1600}
                    height={2000}
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
                      p-8
                      text-white
                    "
                  >

                    <h3
                      className="
                        text-3xl
                        font-bold
                        tracking-tight
                      "
                    >

                      {
                        item.title
                      }

                    </h3>

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