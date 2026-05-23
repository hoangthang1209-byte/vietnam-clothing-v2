import RFQForm
from "@/components/forms/RFQForm";

export default function ContactPage() {

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

              Contact

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

              OEM & ODM
              Apparel
              Manufacturing

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

              Contact Vietnam Clothing
              for OEM & ODM apparel
              manufacturing solutions,
              product development and
              global production support.

            </p>

          </div>

        </div>

      </section>

      <RFQForm />

    </main>
  );
}