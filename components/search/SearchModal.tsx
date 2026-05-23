"use client";

import { useMemo, useState }
from "react";

import Link
from "next/link";

import {
  searchData,
} from "@/lib/search-data";

export default function SearchModal() {

  const [
    query,
    setQuery,
  ] = useState("");

  const results =
    useMemo(
      () => {

        if (
          !query
        ) {

          return [];
        }

        return searchData.filter(
          (
            item
          ) =>

            item.title
              .toLowerCase()
              .includes(
                query.toLowerCase()
              ) ||

            item.description
              .toLowerCase()
              .includes(
                query.toLowerCase()
              )
        );
      },
      [query]
    );

  return (

    <div className="relative">

      <input
        type="text"
        placeholder="Search products, collections, articles..."
        value={query}
        onChange={(e) =>
          setQuery(
            e.target.value
          )
        }
        className="
          h-14
          w-full
          rounded-full
          border
          border-black/10
          px-6
          outline-none
        "
      />

      {
        query &&
        (
          <div
            className="
              absolute
              left-0
              top-16
              z-50
              w-full
              overflow-hidden
              rounded-[32px]
              border
              border-black/10
              bg-white
              shadow-2xl
            "
          >

            {
              results.length ===
              0 && (

                <div className="p-6 text-black/40">

                  No results found.

                </div>
              )
            }

            {
              results.map(
                (
                  item
                ) => (

                  <Link
                    key={
                      item.slug
                    }
                    href={`/${
                      item.type ===
                      "blog"
                        ? "blog"
                        : item.type ===
                          "collection"
                        ? "collections"
                        : "products"
                    }/${
                      item.slug
                    }`}
                    className="
                      flex
                      items-center
                      gap-4
                      border-b
                      border-black/5
                      p-4
                      transition
                      hover:bg-black/[0.02]
                    "
                  >

                    <img
                      src={
                        item.image
                      }
                      alt={
                        item.title
                      }
                      className="
                        h-20
                        w-20
                        rounded-2xl
                        object-cover
                      "
                    />

                    <div>

                      <div
                        className="
                          text-sm
                          uppercase
                          tracking-[0.2em]
                          text-black/40
                        "
                      >

                        {
                          item.type
                        }

                      </div>

                      <div
                        className="
                          mt-2
                          text-xl
                          font-semibold
                        "
                      >

                        {
                          item.title
                        }

                      </div>

                    </div>

                  </Link>
                )
              )
            }

          </div>
        )
      }

    </div>
  );
}