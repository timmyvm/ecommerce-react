import React from "react";

const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="container">
        <div className="rows newsletter__row">
          <h2 className="newsletter__title">Newsletter</h2>
          <form className="newsletter__form">
            <input
              type="email"
              className="newsletter__form__input"
              placeholder="Enter Email Address"
            />
            <button className="newsletter__form__submit" type="button">
                Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
