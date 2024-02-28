import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ProductSkeleton from "./ui/ProductSkeleton";
import Product from "./ui/Product"

const TrendingProducts = () => {
  
  const { products } = useContext(AppContext);

  return (
    <section id="trending-products">
      <div className="container">
        <div className="row products__row">
          <h2 className="products__title">Trending Now</h2>
          <div className="products__list">
            {products.length > 0
              ? products
                  .slice(8, 12)
                  .map((product) => <Product product={product} key={product.id} />)
              : new Array(4).fill(0).map((_, index) => <ProductSkeleton key={index}/>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
