type Props = {
    product: any;
  };
  
  export default function ProductStats({
    product,
  }: Props) {
  
    return (
  
      <section className="mt-24">
  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  
          {product.specifications
            .slice(0, 4)
            .map((spec: any) => (
  
              <div
                key={spec.label}
                className="rounded-[32px] bg-neutral-100 p-10"
              >
  
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                  {spec.label}
                </p>
  
                <div className="text-4xl font-bold">
                  {spec.value}
                </div>
  
              </div>
            ))}
  
        </div>
  
      </section>
    );
  }