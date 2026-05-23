import Link
from "next/link";

type Item = {

  label:
    string;

  href:
    string;
};

type Props = {

  items:
    Item[];
};

export default function Breadcrumb({
  items,
}: Props) {

  return (

    <div
      className="
        flex
        flex-wrap
        items-center
        gap-3
        text-sm
        text-black/40
      "
    >

      <Link
        href="/en"
        className="transition hover:text-black"
      >

        Home

      </Link>

      {
        items.map(
          (
            item,
            index
          ) => (

            <div
              key={item.href}
              className="
                flex
                items-center
                gap-3
              "
            >

              <span>/</span>

              {
                index ===
                items.length - 1 ? (

                  <span className="text-black">

                    {
                      item.label
                    }

                  </span>

                ) : (

                  <Link
                    href={
                      item.href
                    }
                    className="
                      transition
                      hover:text-black
                    "
                  >

                    {
                      item.label
                    }

                  </Link>

                )
              }

            </div>
          )
        )
      }

    </div>
  );
}