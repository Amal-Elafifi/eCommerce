import { TProduct } from "@types";
import { Button, Modal, Spinner } from "react-bootstrap";
import styles from "./style.module.css";
import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { actPlaceOrder} from "@store/orders/PlaceOrderSlice";
import { clearCartAfterPlacingOrder } from "@store/cart/CartSlice";
import toast from "react-hot-toast";


const {container} = styles;

type CartSubtotalProps = {
  products: TProduct[]
  userAccessToken: string|null
}

const CartSubtotalPrice = ({products}: CartSubtotalProps, userAccessToken: CartSubtotalProps) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subtotal = products.reduce((accumulator, el) => {
      const itemPrice = el.price;
      const quantity = el.quantity;
      if(quantity && typeof quantity === "number"){
        return accumulator + itemPrice * quantity
      }else {return accumulator}

  }, 0)

  console.log(subtotal);

  const handleModal = () => {
    setShowModal(!showModal);
    setError(null)
  }

  const placingOrderHandler = () => {
    setLoading(true);
    dispatch(actPlaceOrder(subtotal))
    .unwrap()
    .then(()=>{
      toast.success("Placing order successfully done ^ _ ^");
      dispatch(clearCartAfterPlacingOrder());
      setShowModal(false);
    })
    .catch((error)=>{
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    });
  }

  return (
    <>
      <Modal show={showModal} onHide={handleModal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Placing Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to place order with subtotal: {" "}{subtotal.toFixed(2)}EGP
            {!loading && error && ( <p style={{color: "#DC3545", marginTop: "10px"}}>{error}</p>)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>
              Close
            </Button>
            <Button variant="info" style={{color: "white"}} onClick={placingOrderHandler}>
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" role="status">
                  </Spinner>
                   <span>Loading...</span> 
                </>
              ): "Confirm" }
              
            </Button>
          </Modal.Footer>
      </Modal>
      <div className={container}>
        <span>Subtotal Price: </span>
        <span>{subtotal.toFixed(2)}</span>
      </div>
      <div className={container}>
      <span></span> 
      <span></span>
      {userAccessToken && (
          <Button variant="info" style={{color: "white"}} onClick={handleModal}>Place Order</Button>
        )
        }
    </div>

    </>
  )
}

export default CartSubtotalPrice;