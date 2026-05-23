type Props = {
    image?: string;
  };
  
  export default function ImageBlock({
    image,
  }: Props) {
  
    return (
  
      <div
        className="
          mt-16
          overflow-hidden
          rounded-[40px]
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
    );
  }