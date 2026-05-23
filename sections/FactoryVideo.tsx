export default function FactoryVideo() {

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

            Factory Overview

          </div>

          <h2
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            Inside Our
            Manufacturing
            Process

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

            Explore Vietnam Clothing’s
            apparel manufacturing
            environment, production
            workflow and export-ready
            operations for global brands.

          </p>

        </div>

        <div
          className="
            relative
            overflow-hidden
            rounded-[48px]
            border
            border-black/5
            bg-black
          "
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              aspect-video
              h-full
              w-full
              object-cover
              opacity-90
            "
          >

            <source
              src="https://cdn.coverr.co/videos/coverr-sewing-machine-working-1560925633347?download=1080p"
              type="video/mp4"
            />

          </video>

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
              md:p-16
            "
          >

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >

              Vietnam Clothing

            </div>

            <h3
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-bold
                tracking-tight
                md:text-5xl
              "
            >

              Premium OEM &
              ODM Apparel
              Manufacturing
              Solutions

            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}