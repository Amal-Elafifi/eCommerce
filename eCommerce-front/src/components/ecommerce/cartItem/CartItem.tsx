import { Form, Button } from "react-bootstrap";
import styles from "./style.module.css" 
import { TProduct } from "@customTypes/product";


const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type CartItemProps= TProduct;

const CartItem = ({title, price, img, max, quantity}: CartItemProps) => {

  const renderedOptions = Array(max).fill(0).map((_, idx) => {
    const quantity = ++idx;
    return( 
        <option value={quantity} key={quantity}>
          {quantity}
        </option>
    )
  })

  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img
            src={img}
            alt={title}
          />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)}</h3>
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select value={quantity} aria-label="Default select example">
          {renderedOptions}
        </Form.Select>
      </div>
    </div>
  );
};

export default CartItem;