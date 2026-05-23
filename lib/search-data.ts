import {
  getProducts,
} from "@/lib/getProducts";

export async function getSearchData() {

  const products =
    await getProducts();

  return products.map(
    (
      product: any
    ) => ({

      title:
        product.title,

      href:
        `/en/products/${product.slug}`,

      category:
        product.category,
    })
  );
}