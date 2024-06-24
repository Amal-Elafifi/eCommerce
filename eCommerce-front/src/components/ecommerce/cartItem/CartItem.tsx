import { memo } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./style.module.css" 
import { TProduct } from "@customTypes/product";
import React from "react";


const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type CartItemProps= TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void,
  removeItemHamdler: (id: number) => void
};

const CartItem = memo(({id, title, price, img, max, quantity, changeQuantityHandler, removeItemHamdler}: CartItemProps) => {

  const renderedOptions = Array(max).fill(0).map((_, idx) => {
    const quantity = ++idx;
    return( 
        <option value={quantity} key={quantity}>
          {quantity}
        </option>
    )
  })

 const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    const quantity = +event.target.value;
    changeQuantityHandler(id, quantity)
  }



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
            onClick={() => removeItemHamdler(id)}
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select value={quantity} aria-label="Default select example" onChange={changeQuantity}>
          {renderedOptions}
        </Form.Select>
      </div>
    </div>
  );
});

export default CartItem;