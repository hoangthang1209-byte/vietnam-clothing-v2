type Props = {
    content?: string;
  };
  
  export default function ParagraphBlock({
    content,
  }: Props) {
  
    return (
  
      <p
        className="
          mt-8
          text-xl
          leading-relaxed
          text-black/70
        "
      >
  
        {content}
  
      </p>
    );
  }