import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import styles from "./style.module.css";

import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/CartSlice";

const { product, productImg } = styles;

const Product = ({ id, title, img, price }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(0);

  useEffect(() => {
    if (!isBtnClicked) {
      return;
    }
    setIsDisabled(true);
    const debounced = setTimeout(() => {
      setIsDisabled(false);
    }, 300);

    return () => clearTimeout(debounced);
  }, [isBtnClicked]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnClicked(prev => prev + 1)
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title} </h2>
      <h3>{price}</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isDisabled}
      >
        {isDisabled ? (<>
          <Spinner animation="border" role="status" size="sm"/>
            Loading...
        </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
