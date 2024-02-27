import React from "react";
import Banner1 from "../components/Banner1";
import Header from "../components/Header";
import Products from "../components/Products";
import TrendingProducts from "../components/TrendingProducts";
import Banner2 from "../components/Banner2";

const HomePage = () => {
  return (
    <>
      <Header />
      <Products />
      <Banner1 />
      <TrendingProducts />
      <Banner2 />
    </>
  );
};

export default HomePage;
