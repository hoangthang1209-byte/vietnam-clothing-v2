import type {
    ContentBlock,
  }
  from "@/types/product";
  
  import HeadingBlock
  from "@/components/content/blocks/HeadingBlock";
  
  import ParagraphBlock
  from "@/components/content/blocks/ParagraphBlock";
  
  import QuoteBlock
  from "@/components/content/blocks/QuoteBlock";
  
  import ImageBlock
  from "@/components/content/blocks/ImageBlock";
  
  import ChecklistBlock
  from "@/components/content/blocks/ChecklistBlock";
  
  import StatsBlock
  from "@/components/content/blocks/StatsBlock";
  
  import GalleryBlock
  from "@/components/content/blocks/GalleryBlock";
  
  type Props = {
    blocks:
      ContentBlock[];
  };
  
  export default function ContentRenderer({
    blocks,
  }: Props) {
  
    return (
  
      <>
        {
          blocks.map(
            (
              block,
              index
            ) => {
  
              if (
                block.type ===
                "heading"
              ) {
  
                return (
  
                  <HeadingBlock
                    key={index}
                    content={
                      block.content
                    }
                    variant={
                      block.variant
                    }
                  />
                );
              }
  
              if (
                block.type ===
                "paragraph"
              ) {
  
                return (
  
                  <ParagraphBlock
                    key={index}
                    content={
                      block.content
                    }
                  />
                );
              }
  
              if (
                block.type ===
                "quote"
              ) {
  
                return (
  
                  <QuoteBlock
                    key={index}
                    content={
                      block.content
                    }
                  />
                );
              }
  
              if (
                block.type ===
                "checklist"
              ) {
  
                return (
  
                  <ChecklistBlock
                    key={index}
                    items={
                      block.items
                    }
                  />
                );
              }
  
              if (
                block.type ===
                "stats"
              ) {
  
                return (
  
                  <StatsBlock
                    key={index}
                    stats={
                      block.stats
                    }
                  />
                );
              }
  
              if (
                block.type ===
                "gallery"
              ) {
  
                return (
  
                  <GalleryBlock
                    key={index}
                    images={
                      block.images
                    }
                  />
                );
              }
  
              if (
                block.type ===
                "image"
              ) {
  
                return (
  
                  <ImageBlock
                    key={index}
                    image={
                      block.image
                    }
                  />
                );
              }
  
              return null;
            }
          )
        }
      </>
    );
  }