import { unstable_noStore as noStore } from 'next/cache';
import React, { Suspense } from 'react';
async function ProductQuantity() {
  noStore();

  let res = await fetch('https://api.vercel.app/products/1');
  let data = await res.json();
  return <h1> {data.stock}</h1>;
}

export default function Page() {
  return (
    <section>
      <h1>Product</h1>
      <Suspense fallback={null}>
        <ProductQuantity />
      </Suspense>
    </section>
  );
}
