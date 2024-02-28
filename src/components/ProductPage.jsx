import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Product from "../components/ui/Product";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { products } = useContext(AppContext);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();

  async function fetchProduct() {
    const { data } = await axios.get(
      `https://ecommerce-samurai.up.railway.app/product/${id}`
    );

    const productData = data.data;

    setSelectedProduct(productData);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="products__main">
      <div className="container">
        <row className="row product-page__row">
          <div className="selected-product">
            <div className="selected-product__left">
              <figure className="selected-product__img__wrapper">
                <img
                  src={`https://ecommerce-samurai.up.railway.app/${selectedProduct?.images[0]}`}
                  alt=""
                  className="selected-product__img"
                />
              </figure>
              <div className="selected-product__img__options">
                {selectedProduct?.images.map((image) => (
                  <img
                    src={`https://ecommerce-samurai.up.railway.app/${image}`}
                    alt=""
                    className="selected-product__img__option"
                  />
                ))}
              </div>
            </div>
            <div className="selected-product__right">
              <h1 className="selected-product__title">
                {selectedProduct?.name}
              </h1>
              <p className="selected-product__para">
                {selectedProduct?.description}
              </p>
              <div className="selected-product__quantity">
                <span className="selected-product__quantity__span selected-product__quantity__span-1">
                  Quantity
                </span>
                <div className="selected-product__quantity__wrapper">
                  <button className="selected-product__quantity__btn">-</button>
                  <div className="selected-product__quantity__amount">1</div>
                  <button className="selected-product__quantity__btn">+</button>
                </div>
                <span className="selected-product__quantity__span selected-product__quantity__span-2">
                  ${selectedProduct?.price}
                </span>
              </div>
              <button className="selected-product__add">Add to cart</button>
            </div>
          </div>
          <div className="specifications">
            <div className="spec">
              <h2 className="spec__title">Weight</h2>
              <span className="spec__detail">{selectedProduct?.weight}</span>
            </div>
            <div className="spec">
              <h2 className="spec__title">Texture</h2>
              <span className="spec__detail">{selectedProduct?.texture}</span>
            </div>
            <div className="spec">
              <h2 className="spec__title">Size</h2>
              <span className="spec__detail">{selectedProduct?.size}</span>
            </div>
          </div>
          <div className="reccomendations">
            <h2 className="products__title">Trending Now</h2>
            <div className="products__list">
              {products.slice(0, 4).map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </row>
      </div>
    </main>
  );
};

export default ProductPage;
