import Image from "next/image";
import React from "react";

function ProductBanner({ bannerInfo }) {
  console.log(bannerInfo);
  const src = `http://localhost:1337${bannerInfo}`;
  return (
    <>
      <img
        src={src}
        width={300}
        height={300}
        alt="product banner"
        className="rounded-lg"
      />
    </>
  );
}

export default ProductBanner;
