"use client";

type Props = {

  title: string;

  onClick: () => void;
};

export default function StickyInquiryBar({

  title,

  onClick,

}: Props) {

  return (

    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-black/10
        bg-white/95
        p-4
        backdrop-blur
        lg:hidden
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >

        <div
          className="
            min-w-0
          "
        >

          <div
            className="
              truncate
              text-sm
              font-semibold
            "
          >

            {
              title
            }

          </div>

          <div
            className="
              text-xs
              text-black/50
            "
          >

            OEM Manufacturing

          </div>

        </div>

        <button
          onClick={
            onClick
          }
          className="
            shrink-0
            rounded-full
            bg-black
            px-6
            py-3
            text-sm
            font-medium
            text-white
          "
        >

          Request Quote

        </button>

      </div>

    </div>
  );
}