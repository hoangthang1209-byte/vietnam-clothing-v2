"use client";

import {
  useMemo,
  useState,
} from "react";

import Link
from "next/link";

import Image
from "next/image";

import ProductFilters
from "@/components/products/ProductFilters";

import ProductSearch
from "@/components/products/ProductSearch";

type Props = {

  products: any[];
};

export default function ProductsPageClient({

  products,

}: Props) {

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState(
    "All"
  );

  const [
    search,
    setSearch,
  ] = useState(
    ""
  );

  const filteredProducts =
    useMemo(() => {

      return products.filter(
        (product) => {

          const matchesCategory =

            selectedCategory ===
            "All"

              ? true

              : product.category ===
                selectedCategory;

          const matchesSearch =

            product.title
              ?.toLowerCase()

              .includes(
                search.toLowerCase()
              );

          return (
            matchesCategory &&
            matchesSearch
          );
        }
      );

    }, [
      products,
      selectedCategory,
      search,
    ]);

  return (

    <>

      <ProductFilters

        selected={
          selectedCategory
        }

        onSelect={
          setSelectedCategory
        }
      />

      <ProductSearch

        value={
          search
        }

        onChange={
          setSearch
        }
      />

      {
        filteredProducts.length > 0 ? (

          <div
            className="
              mt-14
              grid
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {
              filteredProducts.map(
                (
                  product
                ) => (

                  <Link
                    key={
                      product.id
                    }

                    href={`
                      /en/products/${product.slug}
                    `}

                    className="
                      group
                      block
                    "
                  >

                    <div
                      className="
                        overflow-hidden
                        rounded-[32px]
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
                          duration-500
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
                          text-sm
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
                          text-2xl
                          font-bold
                          tracking-tight
                        "
                      >

                        {
                          product.title
                        }

                      </h2>

                    </div>

                  </Link>
                )
              )
            }

          </div>

        ) : (

          <div
            className="
              mt-20
              rounded-[40px]
              border
              border-dashed
              border-black/10
              px-10
              py-24
              text-center
            "
          >

            <div
              className="
                text-3xl
                font-bold
                tracking-tight
              "
            >

              No Products Found

            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                leading-8
                text-black/60
              "
            >

              No products available
              in this category yet.

            </p>

          </div>
        )
      }

    </>
  );
}