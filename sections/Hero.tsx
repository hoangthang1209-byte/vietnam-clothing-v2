"use client";

import Image
from "next/image";

import {
  motion,
} from "framer-motion";

type Props = {
  dict: any;
};

export default function Hero({
  dict,
}: Props) {

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        to-neutral-100
        pt-56
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          px-6
          pb-24
          lg:grid-cols-2
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <p
            className="
              mb-6
              text-sm
              uppercase
              tracking-[0.3em]
              text-neutral-500
            "
          >

            {
              dict.hero.badge
            }

          </p>

          <h1
            className="
              max-w-2xl
              text-6xl
              font-bold
              leading-tight
              tracking-tight
              md:text-7xl
            "
          >

            {
              dict.hero.title
            }

            <br />

            Clothing

            <br />

            Manufacturing

          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-neutral-600
            "
          >

            Vietnam Clothing
            provides premium
            apparel manufacturing
            services for fashion
            brands, uniforms
            and merchandise
            projects worldwide.

          </p>

          <div
            className="
              mt-12
              flex
              flex-wrap
              gap-4
            "
          >

            <button
              className="
                rounded-full
                bg-black
                px-8
                py-4
                text-white
                transition
                hover:scale-105
                hover:bg-neutral-800
              "
            >

              Start Your Project

            </button>

            <button
              className="
                rounded-full
                border
                border-black
                px-8
                py-4
                transition
                hover:bg-black
                hover:text-white
              "
            >

              Explore Products

            </button>

          </div>

          <div
            className="
              mt-20
              grid
              grid-cols-3
              gap-10
              border-t
              border-neutral-200
              pt-10
            "
          >

            <div>

              <div
                className="
                  text-4xl
                  font-bold
                "
              >

                10+

              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-neutral-500
                "
              >

                Years Experience

              </p>

            </div>

            <div>

              <div
                className="
                  text-4xl
                  font-bold
                "
              >

                500+

              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-neutral-500
                "
              >

                Global Clients

              </p>

            </div>

            <div>

              <div
                className="
                  text-4xl
                  font-bold
                "
              >

                30+

              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-neutral-500
                "
              >

                Countries Exported

              </p>

            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            relative
          "
        >

          <div
            className="
              overflow-hidden
              rounded-[40px]
            "
          >

            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop"
              alt="Vietnam Clothing Factory"
              width={1600}
              height={2000}
              priority
              className="
                h-[750px]
                w-full
                object-cover
              "
            />

          </div>

          <div
            className="
              absolute
              -bottom-10
              -left-10
              rounded-[32px]
              bg-white
              p-8
              shadow-2xl
            "
          >

            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-neutral-500
              "
            >

              Production Capacity

            </p>

            <div
              className="
                mt-4
                text-5xl
                font-bold
              "
            >

              500K

            </div>

            <p
              className="
                mt-2
                text-neutral-600
              "
            >

              Pieces / Month

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}