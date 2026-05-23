type Props = {
    images?: string[];
  };
  
  export default function GalleryBlock({
    images,
  }: Props) {
  
    if (
      !images ||
      images.length === 0
    ) {
      return null;
    }
  
    return (
  
      <div className="mt-16 grid gap-6 md:grid-cols-2">
  
        {
          images.map(
            (
              image,
              index
            ) => (
  
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-[32px]
                "
              >
  
                <img
                  src={image}
                  alt=""
                  className="
                    h-full w-full
                    object-cover
                  "
                />
  
              </div>
            )
          )
        }
  
      </div>
    );
  }