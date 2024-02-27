import React from "react";
import ProductImage from "../../assets/product-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = ( {cartOpen, setCartOpen }) => {
  return (
    <div className={`cart__wrapper ${cartOpen && "cart-open"}`}>
      <nav className="cart">
        <div className="cart__header">
          <h3 className="cart__header__title"> Your shopping Cart</h3>
          <button className="cart__header__close" onClick={() => setCartOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart__items">
          <div className="cart__item">
            <div className="cart__item__left">
              <img className="cart__item__img" src={ProductImage} alt="" />
            </div>
            <div className="cart__item__mid">
              <h4 className="cart__item__title">Pulp Unit - 5 Compartments</h4>
              <span className="cart__item__price">$256</span>
              <div className="cart__item__quantity">
                <button className="cart__item__quantity__btn">-</button>
                <div className="cart__item__quantity__amount">1</div>
                <button className="cart__item__quantity__btn">+</button>
              </div>
            </div>
            <FontAwesomeIcon className="cart__item__remove" icon={faTimes} />
          </div>
        </div>
        <div className="cart__footer">
          <div className="cart__footer__details">
            <h4 className="cart__footer__title">Subtotal</h4>
            <span className="cart__footer__subtotal">$256</span>
          </div>
          <button className="cart__footer__btn">Go to Checkout</button>
        </div>
      </nav>
    </div>
  );
};

export default Cart;
