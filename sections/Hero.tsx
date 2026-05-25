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
        pt-36
        md:pt-56
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-14
          px-6
          pb-20
          md:gap-20
          md:pb-24
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
              mb-5
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-neutral-500
              md:mb-6
              md:text-sm
              md:tracking-[0.3em]
            "
          >

            {
              dict.hero.badge
            }

          </p>

          <h1
            className="
              max-w-full
              text-5xl
              font-bold
              leading-[0.95]
              tracking-tight
              md:max-w-2xl
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
              mt-6
              max-w-xl
              text-base
              leading-7
              text-neutral-600
              md:mt-8
              md:text-lg
              md:leading-8
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
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
              md:mt-12
            "
          >

            <button
              className="
                rounded-full
                bg-black
                px-8
                py-4
                text-white
                shadow-2xl
                shadow-black/10
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
                bg-white/70
                px-8
                py-4
                backdrop-blur-xl
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
              mt-14
              grid
              grid-cols-3
              gap-5
              border-t
              border-neutral-200
              pt-8
              md:mt-20
              md:gap-10
              md:pt-10
            "
          >

            <div>

              <div
                className="
                  text-3xl
                  font-bold
                  md:text-4xl
                "
              >

                10+

              </div>

              <p
                className="
                  mt-2
                  text-xs
                  text-neutral-500
                  md:text-sm
                "
              >

                Years Experience

              </p>

            </div>

            <div>

              <div
                className="
                  text-3xl
                  font-bold
                  md:text-4xl
                "
              >

                500+

              </div>

              <p
                className="
                  mt-2
                  text-xs
                  text-neutral-500
                  md:text-sm
                "
              >

                Global Clients

              </p>

            </div>

            <div>

              <div
                className="
                  text-3xl
                  font-bold
                  md:text-4xl
                "
              >

                30+

              </div>

              <p
                className="
                  mt-2
                  text-xs
                  text-neutral-500
                  md:text-sm
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
              rounded-[28px]
              md:rounded-[40px]
            "
          >

            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop"
              alt="Vietnam Clothing Factory"
              width={1600}
              height={2000}
              priority
              className="
                h-[420px]
                w-full
                object-cover
                md:h-[750px]
              "
            />

          </div>

          <div
            className="
              absolute
              -bottom-6
              left-4
              rounded-[24px]
              bg-white
              p-5
              shadow-2xl
              md:-bottom-10
              md:-left-10
              md:rounded-[32px]
              md:p-8
            "
          >

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-neutral-500
                md:text-sm
                md:tracking-[0.3em]
              "
            >

              Production Capacity

            </p>

            <div
              className="
                mt-3
                text-4xl
                font-bold
                md:mt-4
                md:text-5xl
              "
            >

              500K

            </div>

            <p
              className="
                mt-2
                text-sm
                text-neutral-600
                md:text-base
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