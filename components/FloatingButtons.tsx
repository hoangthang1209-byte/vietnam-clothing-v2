"use client";

import { useEffect, useState } from "react";

export default function FloatingButtons() {

  const [showTop, setShowTop] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(
        window.scrollY > 400
      );
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

    <div
      className="
        hidden
        md:flex
        fixed
        bottom-6
        right-6
        z-50
        flex-col
        gap-4
      "
    >

      {/* WhatsApp */}

      <a
        href="https://wa.me/84867401618"
        target="_blank"
        className="
          group
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-2xl
          transition
          duration-300
          hover:scale-110
          hover:bg-[#1ebe5d]
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="
            h-6
            w-6
            transition
            duration-300
            group-hover:rotate-6
          "
        >

          <path d="M12 2a10 10 0 0 0-8.94 14.47L2 22l5.74-1.5A10 10 0 1 0 12 2Zm5.07 14.07c-.21.6-1.23 1.17-1.69 1.24-.44.06-.99.09-1.6-.1-.37-.12-.84-.27-1.45-.53-2.55-1.1-4.2-3.67-4.33-3.84-.13-.18-1.03-1.37-1.03-2.62s.66-1.87.89-2.13c.23-.26.5-.33.66-.33.17 0 .33 0 .48.01.15 0 .35-.06.55.42.21.51.71 1.76.77 1.89.06.13.1.29.02.46-.08.17-.12.28-.25.43-.13.15-.27.33-.38.44-.13.13-.27.28-.12.55.15.26.67 1.1 1.44 1.78.99.88 1.82 1.16 2.08 1.29.26.13.41.11.56-.07.15-.18.64-.74.81-.99.17-.25.34-.21.58-.13.24.08 1.51.71 1.77.84.26.13.43.19.49.3.06.11.06.65-.15 1.25Z" />

        </svg>

      </a>

      {/* Zalo */}

      <a
        href="https://zalo.me/0867401618"
        target="_blank"
        className="
          group
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-blue-500
          text-white
          shadow-2xl
          transition
          duration-300
          hover:scale-110
        "
      >

        <span
          className="
            text-sm
            font-bold
          "
        >

          Zalo

        </span>

      </a>

      {/* Call */}

      <a
        href="tel:0867401618"
        className="
          group
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-2xl
          transition
          duration-300
          hover:scale-110
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="
            h-6
            w-6
            transition
            duration-300
            group-hover:rotate-12
          "
        >

          <path d="M1.5 4.5A3 3 0 0 1 4.5 1.5h2.379a1.5 1.5 0 0 1 1.455 1.136l1.106 4.423a1.5 1.5 0 0 1-.54 1.543l-1.547 1.237a12.042 12.042 0 0 0 5.808 5.808l1.237-1.547a1.5 1.5 0 0 1 1.543-.54l4.423 1.106A1.5 1.5 0 0 1 22.5 17.12V19.5a3 3 0 0 1-3 3h-.75C9.507 22.5 1.5 14.493 1.5 4.5Z" />

        </svg>

      </a>

      {/* Email */}

      <a
        href="mailto:support@vietnamclothing.vn"
        className="
          group
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-neutral-200
          bg-white
          shadow-2xl
          transition
          duration-300
          hover:scale-110
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="
            h-6
            w-6
            transition
            duration-300
            group-hover:rotate-6
          "
        >

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 7.5v9A2.25 2.25 0 0 1 19.5 18.75h-15A2.25 2.25 0 0 1 2.25 16.5v-9m19.5 0A2.25 2.25 0 0 0 19.5 5.25h-15A2.25 2.25 0 0 0 2.25 7.5m19.5 0v.243a2.25 2.25 0 0 1-.986 1.874l-7.5 5a2.25 2.25 0 0 1-2.528 0l-7.5-5A2.25 2.25 0 0 1 2.25 7.743V7.5"
          />

        </svg>

      </a>

      {/* Back To Top */}

      {
        showTop && (

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-neutral-200
              bg-white
              text-xl
              shadow-2xl
              transition
              duration-300
              hover:scale-110
            "
          >

            <span
              className="
                transition
                duration-300
                group-hover:-translate-y-1
              "
            >

              ↑

            </span>

          </button>
        )
      }

    </div>
  );
}