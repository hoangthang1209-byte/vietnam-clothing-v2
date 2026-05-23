type Props = {
    stats?: {
      label: string;
      value: string;
    }[];
  };
  
  export default function StatsBlock({
    stats,
  }: Props) {
  
    if (
      !stats ||
      stats.length === 0
    ) {
      return null;
    }
  
    return (
  
      <div className="mt-16 grid gap-6 md:grid-cols-3">
  
        {
          stats.map(
            (
              stat
            ) => (
  
              <div
                key={stat.label}
                className="
                  rounded-[32px]
                  border border-black/10
                  p-8
                "
              >
  
                <div className="text-sm uppercase tracking-[0.2em] text-black/40">
  
                  {stat.label}
  
                </div>
  
                <div className="mt-4 text-4xl font-semibold tracking-tight">
  
                  {stat.value}
  
                </div>
  
              </div>
            )
          )
        }
  
      </div>
    );
  }