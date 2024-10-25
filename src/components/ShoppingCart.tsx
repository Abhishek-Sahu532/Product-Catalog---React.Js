// import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();
  return (
    <>
      <div className="h-full   bg-white w-80 absolute top-0 right-0">
        <div className="bg-green-300 mt-20 ">
          <div className="w-full bg-red-400  flex flex-row gap-2 justify-between  mb-4">
            <div className="flex gap-1">
              <img
                src="https://images.pexels.com/photos/802783/pexels-photo-802783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="dsf"
                className="w-24 h-24"
              />
              <div className="content-center text-green-700">
                <p>Computer</p>
                <p>Price</p>
              </div>
            </div>

            <div className="content-center text-gray-700">price </div>
            <div className="content-center text-red-800 font-extrabold text-lg  pr-3">
              X
            </div>
          </div>

          <div className="w-full bg-red-400  flex flex-row gap-2 justify-between  mb-4">
            <div className="flex gap-1">
              <img
                src="https://images.pexels.com/photos/802783/pexels-photo-802783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="dsf"
                className="w-24 h-24"
              />
              <div className="content-center text-green-700">
                <p>Computer</p>
                <p>Price</p>
              </div>
            </div>

            <div className="content-center text-gray-700">price </div>
            <div className="content-center text-red-800 font-extrabold text-lg  pr-3">
              X
            </div>
          </div>

          <div className="w-full bg-red-400  flex flex-row gap-2 justify-between  mb-4">
            <div className="flex gap-1">
              <img
                src="https://images.pexels.com/photos/802783/pexels-photo-802783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="dsf"
                className="w-24 h-24"
              />
              <div className="content-center text-green-700">
                <p>Computer</p>
                <p>Price</p>
              </div>
            </div>

            <div className="content-center text-gray-700">price </div>
            <div className="content-center text-red-800 font-extrabold text-lg  pr-3">
              X
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute text-2xl text-red-800 font-bold   right-5 top-6  "
        onClick={() => {
          closeCart();
        }}
      >
        {" "}
        X
      </div>
      {/* <CartItem id={5} quantity={2} /> */}
    </>
  );
}
