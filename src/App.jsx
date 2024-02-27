import { useEffect, useState } from "react";
import { AppContext } from "./Context/AppContext";
import Banner1 from "./components/Banner1";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products";
import TrendingProducts from "./components/TrendingProducts";
import axios from "axios";
import Banner2 from "./components/Banner2";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get(
      "https://ecommerce-samurai.up.railway.app/product"
    );

    const productsData = data.data;

    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{ products }}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/products" element="" />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
      <Newsletter />  
      <Footer /> 
    </AppContext.Provider>
  );
};

export default App;
