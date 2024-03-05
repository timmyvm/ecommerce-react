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
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./components/ProductPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(product, addedquantity) {
    const checkProductInCart = cart.find((item) => item.id === product.id);

    if (checkProductInCart) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + addedquantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: addedquantity },
      ]);
    }
  }

  function reduceCartQuantity(product) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function cartLength() {
    let counter = 0;

    cart.forEach((item) => {
      counter += item.quantity;
    });

    return counter;
  }

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
    <AppContext.Provider
      value={{
        products,
        addToCart,
        cart,
        reduceCartQuantity,
        removeFromCart,
        cartLength,
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
