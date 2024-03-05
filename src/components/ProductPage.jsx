import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Product from "../components/ui/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSkeleton from "./ui/ProductSkeleton";
import ProductPageSkeleton from "./ProductPageSkeleton";
import SuccsessPopup from "./ui/SuccsessPopup";

const ProductPage = () => {
  const { products, addToCart } = useContext(AppContext);
  const { id } = useParams(null);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [successOpen, setSuccessOpen] = useState(false);

  async function fetchProduct() {
    try {
      const { data } = await axios.get(
        `https://ecommerce-samurai.up.railway.app/product/${id}`
      );

      const productData = data.data;

      setSelectedProduct(productData);

      setSelectedImage(productData.images[0]);

      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  function openSuccess() {
    setSuccessOpen(true);

    setTimeout(() => {
      setSuccessOpen(false);
    }, 1500);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
    setLoading(true);
  }, [id]);

  return (
    <main className="products__main">
      <SuccsessPopup successOpen={successOpen} />
      <div className="container">
        <div className="row product-page__row">
          {loading ? (
            <ProductPageSkeleton />
          ) : (
            <>
              <div className="selected-product">
                <div className="selected-product__left">
                  <figure className="selected-product__img__wrapper">
                    <img
                      src={`https://ecommerce-samurai.up.railway.app/${selectedImage}`}
                      alt=""
                      className="selected-product__img"
                    />
                  </figure>
                  <div className="selected-product__img__options">
                    {selectedProduct?.images.map((image, index) => (
                      <img
                        src={`https://ecommerce-samurai.up.railway.app/${image}`}
                        alt=""
                        onClick={() => setSelectedImage(image)}
                        className="selected-product__img__option"
                        key={index}
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
                      <button
                        className="selected-product__quantity__btn"
                        onClick={() =>
                          setQuantity((prevQuantity) =>
                            prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
                          )
                        }
                      >
                        -
                      </button>
                      <div className="selected-product__quantity__amount">
                        {quantity}
                      </div>
                      <button
                        className="selected-product__quantity__btn"
                        onClick={() =>
                          setQuantity((prevQuantity) => prevQuantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <span className="selected-product__quantity__span selected-product__quantity__span-2">
                      ${selectedProduct?.price * quantity}
                    </span>
                  </div>
                  <button
                    className="selected-product__add"
                    onClick={() => {
                      addToCart(selectedProduct, quantity);
                      openSuccess();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="specifications">
                <div className="spec">
                  <h2 className="spec__title">Weight</h2>
                  <span className="spec__detail">
                    {selectedProduct?.weight}
                  </span>
                </div>
                <div className="spec">
                  <h2 className="spec__title">Texture</h2>
                  <span className="spec__detail">
                    {selectedProduct?.texture}
                  </span>
                </div>
                <div className="spec">
                  <h2 className="spec__title">Size</h2>
                  <span className="spec__detail">{selectedProduct?.size}</span>
                </div>
              </div>
            </>
          )}
          <div className="reccomendations">
            <h2 className="products__title">Trending Now</h2>
            <div className="products__list">
              {products.length > 0
                ? products
                    .filter(
                      (product) =>
                        selectedProduct && product.id !== selectedProduct.id
                    )
                    .slice(0, 4)
                    .map((product) => (
                      <Product product={product} key={product.id} />
                    ))
                : Array.from({ length: 4 }, (_, index) => (
                    <ProductSkeleton key={index} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
