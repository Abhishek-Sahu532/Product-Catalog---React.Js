// import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getItemQuantity,
  } = useShoppingCart();
  const itemQuantity = getItemQuantity(id);
  // console.log(itemQuantity)
  return (
    <div className="border border-1 border-red-400 w-96 h-96 rounded-md">
      <div>
        <img src={imgUrl} style={{ height: "18rem" }} className="rounded-md " />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between p-3">
          <p className=" text-blue-600 font-bold uppercase text-2xl  ">
            {name}{" "}
          </p>
          <p className=" text-blue-600 font-bold uppercase text-2xl  ">
            {`$${price}`}{" "}
          </p>
        </div>

        {itemQuantity && itemQuantity ==  0 ? (
          <>
            <button
              className="align-center text-xl text-green-600 font-bold"
              onClick={() => {
                increaseCartQuantity(id);
              }}
            >
              {" "}
              <span>+</span> Add To Cart
            </button>
          </>
        ) : (
          <><div className="flex content-center align-middle gap-3 justify-center">
          <button className="align-center text-xl text-green-600 font-bold" onClick={()=>{increaseCartQuantity(id)}} >
            {" "}
            +
          </button>
          <p>{itemQuantity} </p>
          <button className="align-center text-xl text-green-600 font-bold" onClick={()=>{decreaseCartQuantity(id)}} >
            {" "}
            -
          </button>
        </div> </>
        )}
      </div>
    </div>
  );
}
