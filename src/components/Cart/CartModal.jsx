import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { cartActions } from "../../store";
import CartItem from "../Cart/CartItem";

function CartModal() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClose = () => {
    console.log("модал закрито");
    dispatch(cartActions.hide());
  };

  const handleBuy = () => {};

  return (
    <div>
      <div
        className="modal show"
        style={{ position: "absolute" }}
        >
        <Modal show={cart.isVisible} hide={handleClose} >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Your order ({cart.totalQuantity})</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {cart.items.length > 0 &&
              cart.items.map((item) => <CartItem key={item} item={item} />)}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary">Buy</Button>
          </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </div>
  );
}

export default CartModal;
