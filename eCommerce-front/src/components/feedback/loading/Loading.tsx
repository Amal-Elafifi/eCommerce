import { TLoading } from "@types";
import CategoriesSkeleton from "../skeletons/categoriesSkeleton/CategoriesSkeleton";
import ProductSkeleton  from "../skeletons/productSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/cartSkeleton/CartSkeleton";
import WishlistSkeleton from "../skeletons/wishlistSkeleton/WishlistSkeleton";
import TableSkeleton from "../skeletons/tableSkeleton/TableSkeleton";
import LottieHandler from "../lottiefileshandler/LottieHandler";

const skeletonsTypes = {
  category: CategoriesSkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  wishlist: WishlistSkeleton,
  orders: TableSkeleton
  }
  
  type LoadingProps = {
    status : TLoading,
    children: React.ReactNode,
    error: null | string,
    type: keyof typeof skeletonsTypes
  }
const Loading = ({status, error, children, type} : LoadingProps) => {
  

  const Component = skeletonsTypes[type]

  if(status === "pending"){
    return <Component/>
     
  }else if(status === "rejected"){
    return <LottieHandler type="networkError" message={error as string} />
  }

  return <>{children}</>
}

export default Loading;