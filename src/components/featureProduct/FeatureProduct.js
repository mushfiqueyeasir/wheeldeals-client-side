import React, { useContext } from "react";
import ProductCard from "../productCard/ProductCard";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";

const FeatureProduct = () => {
  const { product } = useContext(GLOBAL_CONTEXT);
  return (
    <section className="container mx-auto py-10 px-2">
      <h1 className="text-[#EBA83A] font-[900] text-3xl lg:text-4xl">
        Feature{" "}
        <span className="border-b-[3px] border-[#EBA83A] text-black">
          Products
        </span>
      </h1>

      <div className="pt-6 grid grid-cols-1 md:grid-cls-2 lg:grid-cols-3 gap-4">
        {product.slice(0, 3).map((item, index) => (
          <ProductCard key={item._id} index={index} product={item} />
        ))}
      </div>
    </section>
  );
};

export default FeatureProduct;
