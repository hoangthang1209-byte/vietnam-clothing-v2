import Link from "next/link";

export default function VNCHero({ locale }: { locale: "en" | "vi" }) {
 const vi = locale === "vi";
 return <section className="relative overflow-hidden bg-[#f4f3ee] text-[#191d18]">
  <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-36 md:min-h-[650px] md:grid-cols-[1.2fr_.8fr] md:items-center md:pb-24 md:pt-44">
   <div>
    <p className="text-xs font-bold uppercase tracking-[.25em] text-[#657354]">VNC / Vietnam Clothing</p>
    <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-.06em] sm:text-6xl lg:text-8xl">{vi ? "Ý tưởng lớn. Sản xuất chỉn chu." : "Made to mean more."}</h1>
    <p className="mt-7 max-w-xl text-lg leading-8 text-[#515a4e]">{vi ? "Merchandise, may mặc và sourcing tại Việt Nam. Chúng tôi phối hợp phát triển mẫu, sản xuất và giao hàng cho doanh nghiệp, thương hiệu và sự kiện." : "Merchandise, apparel and sourcing in Vietnam. We connect product development, manufacturing and delivery for brands, businesses and events."}</p>
    <div className="mt-10 flex flex-wrap gap-3">
     <Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center bg-[#1f291c] px-7 py-3 text-sm font-semibold text-white">{vi?"Gửi yêu cầu dự án":"Start a project"} ↗</Link>
     <Link href={`/${locale}/solutions`} className="inline-flex min-h-12 items-center border border-[#384231] px-7 py-3 text-sm font-semibold">{vi?"Khám phá giải pháp":"Explore solutions"} →</Link>
    </div>
   </div>
   <div className="relative min-h-80 overflow-hidden bg-[#364638] md:min-h-[485px]" aria-label="VNC editorial textile illustration">
    <div className="absolute -right-24 top-0 h-[26rem] w-[26rem] rounded-full bg-[#cbdc9c] blur-sm"/>
    <div className="absolute -bottom-32 -left-24 h-[30rem] w-[25rem] rotate-[-22deg] rounded-[45%] bg-[repeating-linear-gradient(90deg,#dedecd_0px,#aeb89d_6px,#f0efdf_12px)] shadow-2xl"/>
    <span className="absolute bottom-6 left-6 right-6 flex justify-between text-xs font-semibold tracking-widest text-white"><span>VNC / VIETNAM</span><span>MADE FOR THE WORLD ↗</span></span>
   </div>
  </div>
 </section>;
}
