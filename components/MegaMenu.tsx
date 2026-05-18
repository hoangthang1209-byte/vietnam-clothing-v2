"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import { menuData } from "../data/menu";

const featuredProducts = [
  {
    title: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Polo Shirts",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Corporate Gifts",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] =
    useState<string | null>(null);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/en"
          className="text-2xl font-bold tracking-tight"
        >
          Vietnam Clothing
        </Link>

        <nav className="hidden gap-8 lg:flex">

          {[
            "products",
            "industries",
            "solutions",
            "services",
            "resources",
          ].map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() =>
                setActiveMenu(menu)
              }
              onMouseLeave={() =>
                setActiveMenu(null)
              }
            >

              <button className="text-sm font-medium capitalize transition hover:text-neutral-500">
                {menu}
              </button>

              {activeMenu === menu && (
                <div className="absolute left-1/2 top-10 w-screen max-w-[1100px] -translate-x-1/2 rounded-[32px] border border-neutral-200 bg-white p-10 shadow-2xl">

                  {menu === "products" ? (

                    <div className="grid grid-cols-[1.2fr_1fr] gap-16">

                      <div className="grid grid-cols-2 gap-10">

                        {menuData.products.map(
                          (category) => (
                            <div
                              key={category.title}
                            >

                              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                {category.title}
                              </h3>

                              <ul className="space-y-4">

                                {category.items.map(
                                  (item) => (
                                    <li
                                      key={item}
                                      className="cursor-pointer text-lg transition hover:translate-x-1 hover:text-black"
                                    >
                                      {item}
                                    </li>
                                  )
                                )}

                              </ul>

                            </div>
                          )
                        )}

                      </div>

                      <div className="space-y-5">

                        {featuredProducts.map(
                          (item) => (

                            <div
                              key={item.title}
                              className="group flex cursor-pointer items-center gap-5 rounded-3xl border border-neutral-200 p-4 transition hover:border-black hover:bg-neutral-50"
                            >

                              <div className="h-24 w-24 overflow-hidden rounded-2xl">

                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                              </div>

                              <div>

                                <h4 className="text-xl font-semibold">
                                  {item.title}
                                </h4>

                                <p className="mt-2 text-sm text-neutral-500">
                                  Premium manufacturing solutions
                                </p>

                              </div>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  ) : (

                    <div className="grid grid-cols-2 gap-4">

                      {menuData[
                        menu as keyof typeof menuData
                      ].map((item: any) => (

                        <div
                          key={
                            typeof item ===
                            "string"
                              ? item
                              : item.title
                          }
                          className="rounded-2xl border border-neutral-100 p-5 transition hover:bg-neutral-50"
                        >
                          {typeof item ===
                          "string"
                            ? item
                            : item.title}
                        </div>

                      ))}

                    </div>

                  )}

                </div>
              )}

            </div>
          ))}

        </nav>

        <div className="flex items-center gap-4">

          <LanguageSwitcher />

          <button className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:scale-105 hover:bg-neutral-800">
            Get Quote
          </button>

        </div>

      </div>
    </header>
  );
}
