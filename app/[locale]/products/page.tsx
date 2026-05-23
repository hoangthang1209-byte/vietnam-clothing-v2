"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Link
from "next/link";

import Image
from "next/image";

import {
  motion,
} from "framer-motion";

import {
  Search,
  X,
  PackageSearch,
} from "lucide-react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  products,
} from "../../../data/products";

import {
  productCategories,
} from "@/lib/product-categories";

export default function ProductsPage() {

  const router =
    useRouter();

  const searchParams =
    useSearchParams();

  const searchRef =
    useRef<
      HTMLInputElement
    >(null);

  const [
    activeCategory,
    setActiveCategory,
  ] = useState(
    searchParams.get(
      "category"
    ) || "All"
  );

  const [
    search,
    setSearch,
  ] = useState(
    searchParams.get(
      "search"
    ) || ""
  );

  const [
    debouncedSearch,
    setDebouncedSearch,
  ] = useState(
    search
  );

  const [
    isSearching,
    setIsSearching,
  ] = useState(false);

  const [
    sort,
    setSort,
  ] = useState(
    searchParams.get(
      "sort"
    ) || "a-z"
  );

  useEffect(() => {

    const handleKeyDown =
      (
        event:
          KeyboardEvent
      ) => {

        const isCmdK =

          (
            event.metaKey ||
            event.ctrlKey
          )

          &&

          event.key === "k";

        const isSlash =

          event.key === "/";

        if (
          isCmdK ||
          isSlash
        ) {

          event.preventDefault();

          searchRef.current
            ?.focus();
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, []);

  useEffect(() => {

    setIsSearching(
      true
    );

    const timeout =
      setTimeout(() => {

        setDebouncedSearch(
          search
        );

        setIsSearching(
          false
        );

      }, 300);

    return () =>
      clearTimeout(
        timeout
      );

  }, [
    search,
  ]);

  useEffect(() => {

    const params =
      new URLSearchParams();

    params.set(
      "category",
      activeCategory
    );

    params.set(
      "search",
      search
    );

    params.set(
      "sort",
      sort
    );

    router.replace(
      `?${params.toString()}`
    );

  }, [
    activeCategory,
    search,
    sort,
    router,
  ]);

  const clearFilters = () => {

    setActiveCategory(
      "All"
    );

    setSearch("");

    setSort(
      "a-z"
    );
  };

  const suggestions =

    Object.entries(
      products
    )
      .filter(
        (
          [
            _,
            product,
          ]
        ) =>

          search.length > 0

          &&

          product.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      )
      .slice(0, 5);

  const highlightText = (
    text: string
  ) => {

    if (
      !debouncedSearch
    ) {

      return text;
    }

    const regex =
      new RegExp(
        `(${debouncedSearch})`,
        "gi"
      );

    const parts =
      text.split(
        regex
      );

    return parts.map(
      (
        part,
        index
      ) =>

        part
          .toLowerCase()
          ===
        debouncedSearch
          .toLowerCase()

          ? (

            <span
              key={index}
              className="
                rounded-md
                bg-yellow-200
                px-1
                font-semibold
              "
            >

              {part}

            </span>
          )

          : part
    );
  };

  const filteredProducts =
    Object.entries(
      products
    )
      .filter(
        (
          [
            _,
            product,
          ]
        ) => {

          const matchesCategory =

            activeCategory ===
            "All"

              ? true

              : product.category ===
                activeCategory;

          const matchesSearch =

            product.title
              .toLowerCase()
              .includes(
                debouncedSearch.toLowerCase()
              )

            ||

            product.description
              .toLowerCase()
              .includes(
                debouncedSearch.toLowerCase()
              )

            ||

            product.category
              .toLowerCase()
              .includes(
                debouncedSearch.toLowerCase()
              );

          return (
            matchesCategory &&
            matchesSearch
          );
        }
      )
      .sort(
        (
          a,
          b
        ) => {

          if (
            sort ===
            "a-z"
          ) {

            return a[
              1
            ].title.localeCompare(
              b[
                1
              ].title
            );
          }

          return b[
            1
          ].title.localeCompare(
            a[
              1
            ].title
          );
        }
      );

  return (

    <main
      className="
        min-h-screen
        bg-gradient-to-b
        from-white
        to-neutral-100
        pt-40
        text-black
      "
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">

          <p
            className="
              mb-5
              text-sm
              uppercase
              tracking-[0.3em]
              text-neutral-500
            "
          >

            Product Categories

          </p>

          <h1
            className="
              text-5xl
              font-bold
              tracking-tight
              md:text-6xl
            "
          >

            Products

          </h1>

        </div>

        <div className="relative mb-10">

          <Search
            className="
              absolute
              left-5
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-black/30
            "
          />

          <input
            ref={searchRef}
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              w-full
              rounded-[28px]
              border
              border-black/10
              bg-neutral-50
              py-5
              pl-14
              pr-24
              text-lg
              outline-none
              transition

              focus:border-black
              focus:bg-white
              focus:shadow-xl
            "
          />

          <div
            className="
              absolute
              right-16
              top-1/2
              hidden
              -translate-y-1/2
              rounded-lg
              border
              border-black/10
              bg-white
              px-2
              py-1
              text-xs
              text-black/40
              md:block
            "
          >

            ⌘K

          </div>

          {
            search && (

              <button
                onClick={() =>
                  setSearch("")
                }
                className="
                  absolute
                  right-5
                  top-1/2
                  flex
                  h-8
                  w-8
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-black/5
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >

                <X className="h-4 w-4" />

              </button>
            )
          }

          {
            suggestions.length > 0 && (

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-full
                  z-30
                  mt-3
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-black/10
                  bg-white
                  shadow-2xl
                "
              >

                {
                  suggestions.map(
                    (
                      [
                        slug,
                        product,
                      ]
                    ) => (

                      <Link
                        key={slug}
                        href={`/en/products/${slug}`}
                        className="
                          flex
                          items-center
                          gap-4
                          border-b
                          border-black/5
                          p-4
                          transition
                          hover:bg-neutral-50
                        "
                      >

                        <div
                          className="
                            h-16
                            w-16
                            overflow-hidden
                            rounded-2xl
                          "
                        >

                          <Image
                            src={
                              product.image
                            }
                            alt={
                              product.title
                            }
                            width={100}
                            height={100}
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />

                        </div>

                        <div>

                          <div
                            className="
                              font-semibold
                            "
                          >

                            {
                              highlightText(
                                product.title
                              )
                            }

                          </div>

                          <div
                            className="
                              mt-1
                              text-sm
                              text-black/50
                            "
                          >

                            {
                              product.category
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

        {
          isSearching && (

            <div
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.2em]
                text-black/40
              "
            >

              Searching...

            </div>
          )
        }

        <div
          className="
            mb-10
            grid
            gap-4
            md:grid-cols-4
          "
        >

          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-white
              p-6
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

              Products

            </div>

            <div
              className="
                mt-3
                text-4xl
                font-bold
              "
            >

              {
                filteredProducts.length
              }

            </div>

          </div>

          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-white
              p-6
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

              Category

            </div>

            <div
              className="
                mt-3
                text-xl
                font-semibold
              "
            >

              {
                activeCategory
              }

            </div>

          </div>

          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-white
              p-6
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

              Sort

            </div>

            <div
              className="
                mt-3
                text-xl
                font-semibold
              "
            >

              {
                sort === "a-z"

                  ? "A → Z"

                  : "Z → A"
              }

            </div>

          </div>

          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-white
              p-6
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

              Search

            </div>

            <div
              className="
                mt-3
                truncate
                text-xl
                font-semibold
              "
            >

              {
                search || "—"
              }

            </div>

          </div>

        </div>

        <div
          className="
            sticky
            top-24
            z-20
            mb-8
            flex
            justify-end
            rounded-[28px]
            border
            border-white/20
            bg-white/70
            p-4
            backdrop-blur-xl
          "
        >

          <select
            value={sort}
            onChange={(e) =>
              setSort(
                e.target.value
              )
            }
            className="
              rounded-2xl
              border
              border-black/10
              bg-white
              px-5
              py-3
              outline-none
            "
          >

            <option value="a-z">
              Sort A → Z
            </option>

            <option value="z-a">
              Sort Z → A
            </option>

          </select>

        </div>

        <div
          className="
            mb-12
            flex
            flex-wrap
            gap-4
            rounded-[32px]
            border
            border-black/5
            bg-neutral-50
            p-5
          "
        >

          {
            productCategories.map(
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
                    border
                    px-6
                    py-3
                    text-sm
                    transition

                    ${
                      activeCategory ===
                      category

                        ? "border-black bg-black text-white"

                        : "border-black/10 bg-white hover:bg-black hover:text-white"
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

        {
          filteredProducts.length > 0 ? (

            <motion.div
              layout
              className="
                grid
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {
                filteredProducts.map(
                  (
                    [
                      slug,
                      product,
                    ],
                    index
                  ) => (

                    <motion.div
                      key={slug}
                      layout
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          index * 0.05,
                      }}
                    >

                      <Link
                        href={`/en/products/${slug}`}
                        className="
                          group
                          block
                          overflow-hidden
                          rounded-[32px]
                          border
                          border-neutral-200
                          bg-white
                          transition
                          hover:-translate-y-1
                          hover:shadow-2xl
                        "
                      >

                        <div className="aspect-[4/3] overflow-hidden">

                          <Image
                            src={
                              product.image
                            }
                            alt={
                              product.title
                            }
                            width={1400}
                            height={1200}
                            className="
                              h-full
                              w-full
                              object-cover
                              transition
                              duration-700
                              group-hover:scale-105
                            "
                          />

                        </div>

                        <div className="p-8">

                          <h2 className="text-3xl font-bold">

                            {
                              highlightText(
                                product.title
                              )
                            }

                          </h2>

                          <p
                            className="
                              mt-4
                              leading-7
                              text-neutral-600
                            "
                          >

                            {
                              highlightText(
                                product.description
                              )
                            }

                          </p>

                        </div>

                      </Link>

                    </motion.div>
                  )
                )
              }

            </motion.div>

          ) : (

            <div
              className="
                rounded-[48px]
                border
                border-dashed
                border-black/10
                bg-neutral-50
                px-10
                py-24
                text-center
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-lg
                "
              >

                <PackageSearch
                  className="
                    h-10
                    w-10
                    text-black/30
                  "
                />

              </div>

              <h3
                className="
                  mt-8
                  text-4xl
                  font-semibold
                  tracking-tight
                "
              >

                No products found

              </h3>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-xl
                  text-lg
                  leading-8
                  text-black/50
                "
              >

                We couldn't find any
                matching products for
                your current search
                and filters.

              </p>

              <button
                onClick={
                  clearFilters
                }
                className="
                  mt-10
                  rounded-full
                  bg-black
                  px-8
                  py-4
                  text-white
                  transition
                  hover:scale-105
                "
              >

                Reset Search

              </button>

            </div>
          )
        }

      </div>

    </main>
  );
}