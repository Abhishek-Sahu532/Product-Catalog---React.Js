import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card style={{ width: '23rem', gap: '4' }}>
      <div >

        <Card.Img variant="top" src={imgUrl} style={{ height: '18rem' }} />
      </div>
      <Card.Body className="flex">
        <Card.Title>{name} </Card.Title>
        <Card.Title>{`$${price}`}   </Card.Title>

        <Button variant="primary" className="align-center">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}
