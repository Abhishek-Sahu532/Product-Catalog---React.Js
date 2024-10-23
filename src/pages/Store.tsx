import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col className="gap-2">
            <StoreItem key={item.id} id={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} />

          </Col>
        ))}
      </Row>
    </>
  )
}
