import React, { useContext } from "react";
import ProductImage from "../../assets/product-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";
import emptyCartImage from "../../assets/empty-cart.svg";

const Cart = ({ cartOpen, setCartOpen }) => {
  const { cart, addToCart, reduceCartQuantity, removeFromCart } =
    useContext(AppContext);

  function Subtotal() {
    let totalPrice = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  }

  return (
    <div className={`cart__wrapper ${cartOpen && "cart-open"}`}>
      <nav className="cart">
        <div className="cart__header">
          <h3 className="cart__header__title"> Your shopping Cart</h3>
          <button
            className="cart__header__close"
            onClick={() => setCartOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart__items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="cart__item">
                <div className="cart__item__left">
                  <img
                    className="cart__item__img"
                    src={`https://ecommerce-samurai.up.railway.app/${item.images[0]}`}
                    alt=""
                  />
                </div>
                <div className="cart__item__mid">
                  <h4 className="cart__item__title">{item.name}</h4>
                  <span className="cart__item__price">
                    ${item.price * item.quantity}
                  </span>
                  <div className="cart__item__quantity">
                    <button
                      className="cart__item__quantity__btn"
                      onClick={() => reduceCartQuantity(item)}
                    >
                      -
                    </button>
                    <div className="cart__item__quantity__amount">
                      {item.quantity}
                    </div>
                    <button
                      className="cart__item__quantity__btn"
                      onClick={() => addToCart(item, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <FontAwesomeIcon
                  className="cart__item__remove"
                  icon={faTimes}
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            ))
          ) : (
            <div className="cart__empty">
              <img src={emptyCartImage} alt="" className="cart__empty__img" />
              <span className="cart__empty__text">Your cart is empty</span>
              <button
                className="cart__empty__btn"
                onClick={() => setCartOpen(false)}
              >
                Keep browsing
              </button>
            </div>
          )}
        </div>
        <div className="cart__footer">
          <div className="cart__footer__details">
            <h4 className="cart__footer__title">Subtotal</h4>
            <span className="cart__footer__subtotal">$ {Subtotal()} </span>
          </div>
          <button
            className="cart__footer__btn"
            onClick={() => {
              alert("We have not implemented this feature yet!");
            }}
          >
            Go to Checkout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Cart;
