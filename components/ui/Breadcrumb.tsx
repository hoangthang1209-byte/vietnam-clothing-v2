import Link
from "next/link";

type Item = {

  label: string;

  href: string;
};

type Props = {

  items: Item[];
};

export default function Breadcrumb({

  items,

}: Props) {

  return (

    <nav
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
        className="
          transition
          hover:text-black
        "
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
              key={index}
              className="
                flex
                items-center
                gap-3
              "
            >

              <span>
                /
              </span>

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

            </div>
          )
        )
      }

    </nav>
  );
}