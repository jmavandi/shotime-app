"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const NowPage = () => {
  const [isVisble, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisble && <HeavyComponent />}
    </div>
  );
};

export default NowPage;

// export async function generatedMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }
