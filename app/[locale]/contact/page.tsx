import InquiryForm
from "@/components/forms/InquiryForm";

export default function ContactPage() {

  return (

    <main
      className="
        bg-white
        px-6
        pb-24
        pt-40
        text-black
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-20
          lg:grid-cols-2
        "
      >

        <div>

          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >

            Contact Us

          </div>

          <h1
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            Start Your
            Clothing Project

          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-black/60
            "
          >

            Get quotation,
            MOQ consultation,
            sampling support and
            OEM manufacturing
            solutions from our
            Vietnam apparel factory.

          </p>

          <div
            className="
              mt-12
              grid
              gap-8
            "
          >

            <div>

              <div
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >

                Email

              </div>

              <div
                className="
                  mt-3
                  text-black/60
                "
              >

                contact@vietnamclothing.com

              </div>

            </div>

            <div>

              <div
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >

                Phone

              </div>

              <div
                className="
                  mt-3
                  text-black/60
                "
              >

                +84 918 681 878

              </div>

            </div>

            <div>

              <div
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >

                Factory

              </div>

              <div
                className="
                  mt-3
                  text-black/60
                  leading-8
                "
              >

                Ho Chi Minh City,
                Vietnam

              </div>

            </div>

          </div>

        </div>

        <div
          className="
            rounded-[40px]
            border
            border-black/10
            bg-neutral-50
            p-8
            lg:p-12
          "
        >

          <div
            className="
              text-3xl
              font-bold
              tracking-tight
            "
          >

            Request Quote

          </div>

          <div
            className="
              mt-4
              text-black/60
            "
          >

            Send us your design,
            techpack or production
            requirements.

          </div>

          <div
            className="
              mt-10
            "
          >

            <InquiryForm />

          </div>

        </div>

      </div>

    </main>
  );
}