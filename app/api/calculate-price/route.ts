import { NextResponse }
from "next/server";

import { calculatePrice }
from "@/lib/pricing-engine";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  console.log(
    "API BODY:",
    body
  );

  const result =
    await calculatePrice({

      productId:
        Number(body.productId),

      quantity:
        Number(body.quantity),

      printMethod:
        String(body.printMethod),

      printSize:
        String(body.printSize),
    });

  console.log(
    "API RESULT:",
    result
  );

  return NextResponse.json(
    result
  );
}
