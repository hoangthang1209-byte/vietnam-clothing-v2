const brands = [

    "Highlands Coffee",
  
    "Techcombank",
  
    "KIA",
  
    "VUS",
  
    "Bách Khoa University",
  
    "Viva Star Coffee",
  
    "Local Brands",
  
    "OEM Fashion",
  ];
  
  export default function BrandMarquee() {
  
    return (
  
      <section
        className="
          overflow-hidden
          border-y
          border-black/10
          py-6
        "
      >
  
        <div
          className="
            flex
            animate-[marquee_25s_linear_infinite]
            gap-20
            whitespace-nowrap
          "
        >
  
          {
            [...brands, ...brands].map(
              (
                brand,
                index
              ) => (
  
                <div
                  key={index}
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-black/40
                  "
                >
  
                  {
                    brand
                  }
  
                </div>
              )
            )
          }
  
        </div>
  
      </section>
    );
  }