import { createClient }
from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function calculatePrice({
  productId,
  quantity,
  printMethod,
  printSize,
}: {
  productId: number;

  quantity: number;

  printMethod: string;

  printSize: string;
}) {

  console.log("INPUT", {
    productId,
    quantity,
    printMethod,
    printSize,
  });

  const {
    data: blankRows,
    error: blankError,
  } = await supabase
    .from("product_cost_tiers")
    .select("*");

  console.log(
    "BLANK ROWS",
    blankRows
  );

  console.log(
    "BLANK ERROR",
    blankError
  );

  const blankCost =
    blankRows?.find(
      (row) =>

        Number(productId)
        ===
        Number(row.product_id)

        &&

        Number(quantity)
        >=
        Number(row.qty_min)

        &&

        Number(quantity)
        <=
        Number(row.qty_max)
    );

  console.log(
    "MATCH BLANK",
    blankCost
  );

  const {
    data: printRows,
    error: printError,
  } = await supabase
    .from("print_costs")
    .select("*");

  console.log(
    "PRINT ROWS",
    printRows
  );

  console.log(
    "PRINT ERROR",
    printError
  );

  const printCost =
    printRows?.find(
      (row) =>

        row.method
          ?.trim()
          .toLowerCase()

        ===

        printMethod
          ?.trim()
          .toLowerCase()

        &&

        row.size
          ?.trim()
          .toLowerCase()

        ===

        printSize
          ?.trim()
          .toLowerCase()

        &&

        Number(quantity)
        >=
        Number(row.qty_min)

        &&

        Number(quantity)
        <=
        Number(row.qty_max)
    );

  console.log(
    "MATCH PRINT",
    printCost
  );

  const blank =
    Number(
      blankCost?.blank_cost || 0
    );

  const printing =
    Number(
      printCost?.cost || 0
    );

  const unitPrice =
    blank + printing;

  const totalPrice =
    unitPrice * quantity;

  return {

    blankCost: blank,

    printCost: printing,

    unitPrice,

    totalPrice,
  };
}
