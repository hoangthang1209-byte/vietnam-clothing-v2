import Link
from "next/link";

import {
  collections,
} from "@/data/collections";

export default function CollectionsPage() {

  const items =
    Object.values(
      collections
    );

  return (

    <main className="bg-white text-black">

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Collections

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

              Apparel
              Manufacturing
              Collections

            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-xl
                leading-relaxed
                text-black/70
              "
            >

              Explore apparel collections,
              manufacturing categories and
              OEM & ODM production
              solutions by Vietnam Clothing.

            </p>

          </div>

          <div className="mt-24 grid gap-12 md:grid-cols-2">

            {
              items.map(
                (
                  collection
                ) => (

                  <Link
                    key={
                      collection.slug
                    }
                    href={`/collections/${collection.slug}`}
                    className="
                      group
                      block
                    "
                  >

                    <div
                      className="
                        overflow-hidden
                        rounded-[40px]
                      "
                    >

                      <img
                        src={
                          collection.heroImage
                        }
                        alt={
                          collection.title
                        }
                        className="
                          aspect-[16/10]
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />

                    </div>

                    <div className="mt-8">

                      <div
                        className="
                          text-sm
                          uppercase
                          tracking-[0.2em]
                          text-black/40
                        "
                      >

                        Collection

                      </div>

                      <h2
                        className="
                          mt-4
                          text-4xl
                          font-semibold
                          tracking-tight
                        "
                      >

                        {
                          collection.title
                        }

                      </h2>

                      <p
                        className="
                          mt-4
                          text-lg
                          leading-relaxed
                          text-black/70
                        "
                      >

                        {
                          collection.description
                        }

                      </p>

                    </div>

                  </Link>
                )
              )
            }

          </div>

        </div>

      </section>

    </main>
  );
}