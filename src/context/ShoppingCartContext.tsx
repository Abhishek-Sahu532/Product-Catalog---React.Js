import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  console.log(cartItems);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems?.map((prev) => (prev.id == id ? prev.quantity : 0));
  }
  function increaseCartQuantity(id: number) {
    setCartItems((prevItems) => {
      const itemFound = prevItems.find((prev) => prev.id == id);

      if (itemFound) {
        return prevItems.map((prev) =>
          prev.id == id ? { id, quantity: prev.quantity + 1 } : prev
        );
      } else {
        return [...prevItems, { id, quantity: 1 }];
      }
    });
  }



  function decreaseCartQuantity(id: number) {
    setCartItems((prevItems) => {
      const itemFound = prevItems.find((prev) => prev.id == id && prev.quantity == 1); 
console.log('ddddddddd', itemFound)

//       if(prevItems.find((prev) => prev.id == id && prev.quantity == 1)){
// console.log(prevItems)

//         if(prevItems?.find((prev) => prev.quantity == 1 ) ){
//          console.log('abcd')
//         } else{
//         return prevItems.map((prev) =>
//             prev.id == id ? { id, quantity: prev.quantity - 1 } : ""
//           );
//         }
//       }


      // if (itemFound) {
        // return prevItems.map((prev) =>
        //   prev.id == id ? { id, quantity: prev.quantity - 1 } : ""
        // );
      // } else {
      //   return [...prevItems];
      // }

    });
  }
  function removeFromCart(id: number) {}

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      {isOpen ? <ShoppingCart isOpen={isOpen} /> : ""}
    </ShoppingCartContext.Provider>
  );
}
