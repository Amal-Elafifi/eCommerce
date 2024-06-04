import { memo, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import styles from "./style.module.css";

import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/CartSlice";

const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, title, img, price, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const remainingQuantity = max - (quantity ?? 0) ;
  const quantityReachedToMax = remainingQuantity === 0 ? true : false;

  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    const debounced = setTimeout(() => {
      setIsDisabled(false);
    }, 300);

    return () => clearTimeout(debounced);
  }, [isDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsDisabled(true);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title} </h2>
      <h3>{price.toFixed(2)}</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "You reached the product limit"
          : `you can add ${remainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isDisabled || quantityReachedToMax}
      >
        {isDisabled ? (
          <>
            <Spinner animation="border" role="status" size="sm" />
            Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
