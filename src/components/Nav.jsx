import React, { useState } from "react";
import NavBar from "./ui/NavBar";
import Cart from "./ui/Cart";
import Menu from "./ui/Menu";

const Nav = () => {
 const [cartOpen, setCartOpen] = useState(false)
 const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <NavBar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
};

export default Nav;
