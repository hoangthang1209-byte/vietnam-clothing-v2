const stats = [
    {
      value: "500K+",
      label: "Monthly Capacity",
    },
  
    {
      value: "100+",
      label: "Global Clients",
    },
  
    {
      value: "30+",
      label: "Export Countries",
    },
  
    {
      value: "10+",
      label: "Years Experience",
    },
  ];
  
  export default function StatsStrip() {
    return (
      <section className="border-y border-neutral-200 bg-white">
  
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
  
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
  
              <div className="text-5xl font-bold tracking-tight">
                {item.value}
              </div>
  
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                {item.label}
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }