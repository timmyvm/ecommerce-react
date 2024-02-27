import React from "react";
import BannerOne from "../assets/banner-1.jpg"

const Banner1 = () => {
  return (
    <section id="banner-1">
      <div className="container">
        <div className="row">
          <div className="banner banner-1">
            <div className="banner__text">
              <h2 className="banner__text__title">
                Creative harmonious Living
              </h2>
              <p className="banner__text__paragraph">
                ROAFU Products ar all made to the standard sizes so that you can
                easily mix and match them freely.
              </p>
              <a href="/products" className="banner__text__btn">Shop now</a>
            </div>
            <img src={BannerOne} alt="" className="banner__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
