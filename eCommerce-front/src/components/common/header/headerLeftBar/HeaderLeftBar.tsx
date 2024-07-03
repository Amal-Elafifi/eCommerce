import CartSVGIcon from "@assets/svg/cart.svg?react";
import WishlistSVGIcon from "@assets/svg/wishlist.svg?react";
import { useAppSelector } from "@store/hooks";
import { cartItemsQuantitySelector } from "@store/cart/CartSlice";
import HeaderCounter from "../headerCounter/HeaderCounter";
import styles from "./styles.module.css";

const {leftBar} = styles;


const HeaderLeftBar = () => {
  const cartTotalQuantity = useAppSelector(cartItemsQuantitySelector);
  const wishlistTotalQuantity = useAppSelector(state => state.wishlist.itemsId.length);

  return (
    <div className={leftBar}>
         
    <HeaderCounter  totalQuantity={wishlistTotalQuantity} to="/wishlist" SVGIcon={<WishlistSVGIcon title="wishlist icon"  />} title="Wishlist"/>
    <HeaderCounter totalQuantity={cartTotalQuantity} to="/cart" SVGIcon={<CartSVGIcon title="cart icon" />} title="Cart"/>
  </div>
  )
}

export default HeaderLeftBar;