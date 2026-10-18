import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
 title: "Production Solutions | VNC",
 description: "Explore merchandise, apparel manufacturing and sourcing solutions managed from Vietnam.",
};

const copy = {
 en: {
  eyebrow: "WHAT WE DO",
  heading: "From concept to delivery.",
  intro: "Four integrated ways to bring your next project to life. We coordinate suppliers, development, production and delivery according to your brief.",
  action: "Discuss your project",
  services: [
   ["01", "Entertainment & Official Merchandise", "Custom apparel, accessories and event merchandise developed around your creative brief. Production planning, decoration and fulfillment support."],
   ["02", "Corporate Merchandise & Uniforms", "Branded apparel, uniforms, headwear and gifts with coordinated sourcing, sampling, production and quality checks."],
   ["03", "OEM Apparel Manufacturing", "Material sourcing, sampling, technical development, cut-and-sew coordination, printing, embroidery, finishing and packing."],
   ["04", "Global Sourcing & Production Management", "A Vietnam-based team coordinating suppliers, quality requirements, timelines and international logistics."]
  ]
 },
 vi: {
  eyebrow: "GIẢI PHÁP CỦA VNC",
  heading: "Từ ý tưởng đến thành phẩm.",
  intro: "Bốn nhóm giải pháp phục vụ doanh nghiệp và thương hiệu. VNC phối hợp nguồn cung, phát triển mẫu, sản xuất và giao hàng theo yêu cầu thực tế.",
  action: "Trao đổi về dự án",
  services: [
   ["01", "Merchandise giải trí & sự kiện", "Áo, phụ kiện và merchandise cho nghệ sĩ, sự kiện và cộng đồng người hâm mộ; phối hợp phát triển mẫu, sản xuất và hoàn thiện."],
   ["02", "Quà tặng thương hiệu & đồng phục", "Trang phục, nón và quà tặng doanh nghiệp; tư vấn vật liệu, mẫu, sản xuất và kiểm soát chất lượng."],
   ["03", "Sản xuất thời trang OEM", "Tìm nguồn vải, phát triển mẫu, phối hợp may, in, thêu, hoàn thiện và đóng gói."],
   ["04", "Sourcing & quản lý sản xuất quốc tế", "Điều phối nhà cung cấp, tiến độ, chất lượng và giải pháp vận chuyển quốc tế."]
  ]
 }
} as const;

export default async function SolutionsPage({params}:{params:Promise<{locale:string}>}) {
 const {locale}=await params;
 if(locale!=="en"&&locale!=="vi") notFound();
 const t=copy[locale];
 return <main className="min-h-screen bg-[#f7f7f3] text-neutral-900">
  <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pt-48">
   <p className="text-xs font-semibold tracking-[.25em] text-neutral-500">{t.eyebrow} / VNC</p>
   <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-tight md:text-8xl">{t.heading}</h1>
   <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">{t.intro}</p>
  </section>
  <section className="mx-auto grid max-w-7xl gap-px bg-neutral-200 px-6 pb-20 md:grid-cols-2">
   {t.services.map(([number,title,description])=><article className="flex min-h-80 flex-col bg-[#f7f7f3] px-6 py-9 md:px-10" key={number}>
    <p className="text-xs font-bold tracking-[.2em] text-neutral-500">{number} / 04</p>
    <h2 className="mt-12 max-w-md text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    <p className="mt-5 max-w-md leading-7 text-neutral-600">{description}</p>
    <Link className="mt-auto inline-flex w-fit border-b border-current pt-9 pb-2 text-sm font-semibold" href={`/${locale}/contact`}>{t.action} ↗</Link>
   </article>)}
  </section>
 </main>;
}
