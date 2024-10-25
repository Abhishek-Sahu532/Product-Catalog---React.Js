// import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";


export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="py-4 p-4 bg-fuchsia-600">
      <div className="flex justify-between">
        <div className="pl-8 text-white font-bold text-lg">Navbar</div>

        <div className="w-5 h-5 border-1 border-emerald-700">
          <CartItem  id={1} quantity={1} />
        </div>
      </div>
    </div>
  );
}
