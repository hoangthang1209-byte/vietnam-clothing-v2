type Props = {
    content?: string;
  
    variant?: string;
  };
  
  export default function HeadingBlock({
    content,
    variant,
  }: Props) {
  
    if (
      variant ===
      "xl-center"
    ) {
  
      return (
  
        <h2
          className="
            mt-20
            text-center
            text-7xl
            font-semibold
            tracking-tight
            leading-none
          "
        >
  
          {content}
  
        </h2>
      );
    }
  
    return (
  
      <h2
        className="
          mt-16
          text-5xl
          font-semibold
          tracking-tight
        "
      >
  
        {content}
  
      </h2>
    );
  }