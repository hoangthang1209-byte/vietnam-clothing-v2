"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  return (
    <div className="flex items-center gap-2 rounded-full border border-neutral-200 p-1">

      <Link
        href={pathname.replace(`/${currentLocale}`, "/en")}
        className={`rounded-full px-3 py-1 text-sm transition ${
          currentLocale === "en"
            ? "bg-black text-white"
            : "text-neutral-500"
        }`}
      >
        EN
      </Link>

      <Link
        href={pathname.replace(`/${currentLocale}`, "/vi")}
        className={`rounded-full px-3 py-1 text-sm transition ${
          currentLocale === "vi"
            ? "bg-black text-white"
            : "text-neutral-500"
        }`}
      >
        VI
      </Link>

    </div>
  );
}