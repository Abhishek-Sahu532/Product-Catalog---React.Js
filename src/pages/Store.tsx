// import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <h1 className="p-6 font-semibold text-md uppercase underline">Store</h1>
      <div className="p-8">
        <div className="flex gap-8 flex-wrap justify-between ">
        {storeItems.map(item => (
          
            <StoreItem key={item.id} id={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} />

        
        ))}</div>
      </div>
    </>
  )
}
