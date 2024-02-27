import React from 'react';
import BannerTwo from "../assets/banner-2.jpg"

const Banner2 = () => {
    return (
        <section id="banner-2">
        <div className="container">
          <div className="row">
            <div className="banner banner-2">
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
              <img src={BannerTwo} alt="" className="banner__img" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Banner2;
