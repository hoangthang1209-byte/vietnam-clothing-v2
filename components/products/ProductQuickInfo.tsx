type Props = {

    product: any;
  };
  
  export default function ProductQuickInfo({
  
    product,
  
  }: Props) {
  
    const items = [
  
      {
        label:
          "MOQ",
  
        value:
          product.moq ||
          "100 pcs",
      },
  
      {
        label:
          "Lead Time",
  
        value:
          product.lead_time ||
          "7-15 days",
      },
  
      {
        label:
          "OEM / ODM",
  
        value:
          "Supported",
      },
  
      {
        label:
          "Custom Label",
  
        value:
          "Available",
      },
    ];
  
    return (
  
      <section
        className="
          border-t
          border-black/10
          py-24
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
              max-w-3xl
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
  
              Production Details
  
            </div>
  
            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >
  
              Manufacturing
              Information
  
            </h2>
  
          </div>
  
          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
  
            {
              items.map(
                (
                  item
                ) => (
  
                  <div
                    key={
                      item.label
                    }
                    className="
                      rounded-[32px]
                      border
                      border-black/10
                      p-10
                    "
                  >
  
                    <div
                      className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                      "
                    >
  
                      {
                        item.label
                      }
  
                    </div>
  
                    <div
                      className="
                        mt-4
                        text-3xl
                        font-bold
                        tracking-tight
                      "
                    >
  
                      {
                        item.value
                      }
  
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