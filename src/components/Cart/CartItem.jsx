import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { cartActions } from "../../store";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  function removeCart() {
    dispatch(cartActions.deleteProduct());
  }

  return (
    <Card  className="mb-2">
      <Card.Body>
        <Row />
        <Col className="mb-2">
          <Card.Title></Card.Title>
        </Col>
        <Col className="mb-1">
          <Card.Title></Card.Title>
        </Col>
        
        <Button variant="primary" onClick={removeCart}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
