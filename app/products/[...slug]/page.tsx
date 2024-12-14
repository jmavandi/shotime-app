import React from "react";

interface Props {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ sortOrder: string }>;
}

const ProductPage = async (props: Props) => {
  const searchParams = await props.searchParams;

  const {
    sortOrder
  } = searchParams;

  const params = await props.params;

  const {
    slug
  } = params;

  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;

// export async function generatedMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }
