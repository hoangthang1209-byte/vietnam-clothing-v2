type Props = {
    items?: string[];
  };
  
  export default function ChecklistBlock({
    items,
  }: Props) {
  
    if (
      !items ||
      items.length === 0
    ) {
      return null;
    }
  
    return (
  
      <div className="mt-12 grid gap-6 md:grid-cols-2">
  
        {
          items.map(
            (
              item
            ) => (
  
              <div
                key={item}
                className="
                  flex items-start gap-4
                  rounded-[24px]
                  border border-black/10
                  p-6
                "
              >
  
                <div className="text-2xl">
  
                  ✦
  
                </div>
  
                <div className="text-lg leading-relaxed">
  
                  {item}
  
                </div>
  
              </div>
            )
          )
        }
  
      </div>
    );
  }