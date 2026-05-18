import MobileCTA from "@/components/MobileCTA";
import FloatingButtons from "@/components/FloatingButtons";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <MobileCTA />

      <FloatingButtons />
    </>
  );
}