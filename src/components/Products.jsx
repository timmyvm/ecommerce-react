import React, { useContext, useEffect, useState } from "react";
import Product from "./ui/Product";
import axios from "axios";
import ProductSkeleton from "./ui/ProductSkeleton";
import { AppContext } from "../Context/AppContext";

const Products = () => {
  const { products } = useContext(AppContext)

  return (
    <section id="products">
      <div className="container">
        <div className="row products__row">
          <h2 className="products__title">Products we are proud of</h2>
          <div className="products__list">
            {products.length > 0
              ? products
                  .slice(0, 8)
                  .map((product) => (
                    <Product product={product} key={product.id} />
                  ))
              : new Array(8)
                  .fill(0)
                  .map((_, index) => <ProductSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
