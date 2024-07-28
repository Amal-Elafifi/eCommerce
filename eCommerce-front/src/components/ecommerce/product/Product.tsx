import { memo, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import styles from "./style.module.css";

import { TProduct } from "@types";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/CartSlice";
import { actLikeToggle } from "@store/wishlist/WishlistSlice";
import Like from "@assets/svg/like.svg?react";
import Dislike from "@assets/svg/dislike.svg?react";

const { product, productImg, maximumNotice, wishlist} = styles;

const Product = memo(({ id, title, img, price, max, quantity, isLiked }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const likeToggleHandler = () => {
    
    if(!isLoading){
      setIsLoading(true);
      dispatch(actLikeToggle(id))
      .unwrap()
      .then(()=> setIsLoading(false))
      .catch(()=>setIsLoading(false));

    }

  }

  return (
    <div className={product} onClick={ likeToggleHandler }>
      <div className={wishlist}>
        {isLoading?( <Spinner animation="border" variant="primary" size="sm"/>): isLiked? <Like/> : <Dislike/>}
      </div>
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
