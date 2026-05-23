import InquiryForm
from "@/components/forms/InquiryForm";

export default function ContactPage() {

  return (

    <main
      className="
        bg-white
        text-black
      "
    >

      <section
        className="
          border-b
          border-black/5
          pb-24
          pt-56
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

              Contact Us

            </div>

            <h1
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
                md:text-7xl
              "
            >

              Let’s Build
              Your Next
              Collection

            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-black/60
              "
            >

              Get quotation,
              production consultation
              and OEM / ODM apparel
              manufacturing support
              from Vietnam Clothing.

            </p>

          </div>

        </div>

      </section>

      <section
        className="
          py-24
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-16
            px-6
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

              Contact Information

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Start Your
              Manufacturing
              Project

            </h2>

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
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >

                  Email

                </div>

                <div
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                  "
                >

                  hello@vietnamclothing.com

                </div>

              </div>

              <div>

                <div
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >

                  Phone

                </div>

                <div
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                  "
                >

                  +84 918 681 878

                </div>

              </div>

              <div>

                <div
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >

                  Location

                </div>

                <div
                  className="
                    mt-3
                    text-2xl
                    font-semibold
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
              border-black/5
              bg-neutral-50
              p-10
            "
          >

            <InquiryForm />

          </div>

        </div>

      </section>

    </main>
  );
}