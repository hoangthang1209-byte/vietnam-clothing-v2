"use client";

import {
  useMemo,
  useState,
} from "react";

import Image
from "next/image";

import Link
from "next/link";

type Props = {

  products: any[];
};

export default function ProductsGrid({

  products,

}: Props) {

  const [
    search,
    setSearch,
  ] = useState(
    ""
  );

  const [
    activeCategory,
    setActiveCategory,
  ] = useState(
    "All"
  );

  const categories =
    useMemo(
      () => [

        "All",

        ...new Set(

          products.map(
            (
              product
            ) =>

              product.category
          )
        ),
      ],

      [products]
    );

  const filteredProducts =
    products.filter(
      (
        product
      ) => {

        const matchesSearch =

          product.title
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =

          activeCategory ===
            "All"

            ||

          product.category ===
            activeCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  return (

    <>

      <div
        className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        <input
          value={search}
          onChange={
            (
              e
            ) =>
              setSearch(
                e.target.value
              )
          }
          placeholder="Search products..."
          className="
            w-full
            rounded-full
            border
            border-black/10
            px-6
            py-4
            outline-none
            md:max-w-md
          "
        />

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {
            categories.map(
              (
                category
              ) => (

                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                  className={`
                    rounded-full
                    px-5
                    py-3
                    text-sm
                    transition

                    ${
                      activeCategory ===
                      category

                        ? "bg-black text-white"

                        : "border border-black/10 text-black/60"
                    }
                  `}
                >

                  {
                    category
                  }

                </button>
              )
            )
          }

        </div>

      </div>

      <div
        className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >

        {
          filteredProducts.map(
            (
              product: any
            ) => (

              <Link
                key={
                  product.id
                }
                href={
                  `/en/products/${product.slug}`
                }
                className="
                  group
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-black/10
                  "
                >

                  <Image
                    src={
                      product.image
                    }
                    alt={
                      product.title
                    }
                    width={1200}
                    height={1400}
                    className="
                      aspect-[4/5]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                </div>

                <div
                  className="
                    mt-6
                  "
                >

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-black/40
                    "
                  >

                    {
                      product.category
                    }

                  </div>

                  <h2
                    className="
                      mt-3
                      text-3xl
                      font-bold
                      tracking-tight
                    "
                  >

                    {
                      product.title
                    }

                  </h2>

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      leading-7
                      text-black/60
                    "
                  >

                    {
                      product.description
                    }

                  </p>

                </div>

              </Link>
            )
          )
        }

      </div>

    </>
  );
}