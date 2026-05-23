type Props = {
    content?: string;
  };
  
  export default function QuoteBlock({
    content,
  }: Props) {
  
    return (
  
      <blockquote
        className="
          mt-12
          border-l-4 border-black
          pl-8
          text-3xl
          font-semibold
          italic
          leading-relaxed
        "
      >
  
        {content}
  
      </blockquote>
    );
  }