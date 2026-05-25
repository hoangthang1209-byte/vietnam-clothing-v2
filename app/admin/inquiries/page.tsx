import {
  createClient,
} from "@/lib/supabase/server";

export default async function AdminInquiriesPage() {

  const supabase =
    await createClient();

  const {
    data: inquiries,
  } = await supabase

    .from(
      "inquiries"
    )

    .select("*")

    .order(
      "created_at",
      {

        ascending:
          false,
      }
    );

  return (

    <main
      className="
        min-h-screen
        bg-neutral-50
        px-6
        py-20
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
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

            Vietnam Clothing CMS

          </div>

          <h1
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            Inquiries

          </h1>

        </div>

        <div
          className="
            mt-16
            grid
            gap-6
          "
        >

          {
            inquiries?.map(
              (
                inquiry: any
              ) => (

                <div
                  key={
                    inquiry.id
                  }
                  className="
                    rounded-[36px]
                    bg-white
                    p-10
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      gap-6
                      md:flex-row
                      md:items-start
                      md:justify-between
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

                        {
                          inquiry.product ||
                          "General Inquiry"
                        }

                      </div>

                      <h2
                        className="
                          mt-4
                          text-3xl
                          font-bold
                          tracking-tight
                        "
                      >

                        {
                          inquiry.name
                        }

                      </h2>

                      <div
                        className="
                          mt-4
                          text-black/60
                        "
                      >

                        {
                          inquiry.email
                        }

                      </div>

                      {
                        inquiry.company && (

                          <div
                            className="
                              mt-2
                              text-black/60
                            "
                          >

                            {
                              inquiry.company
                            }

                          </div>
                        )
                      }

                    </div>

                    <div
                      className="
                        text-sm
                        text-black/40
                      "
                    >

                      {
                        new Date(
                          inquiry.created_at
                        ).toLocaleDateString()
                      }

                    </div>

                  </div>

                  <div
                    className="
                      mt-8
                      rounded-[28px]
                      bg-neutral-50
                      p-8
                      leading-8
                      text-black/70
                    "
                  >

                    {
                      inquiry.message
                    }

                    {
                      inquiry.attachment && (

                        <div
                          className="
                            mt-8
                          "
                        >

                          <a
                            href={
                              inquiry.attachment
                            }
                            target="_blank"
                            className="
                              inline-flex
                              items-center
                              rounded-full
                              bg-black
                              px-6
                              py-3
                              text-sm
                              font-medium
                              text-white
                            "
                          >

                            View Attachment

                          </a>

                        </div>
                      )
                    }

                  </div>

                </div>
              )
            )
          }

        </div>

      </div>

    </main>
  );
}