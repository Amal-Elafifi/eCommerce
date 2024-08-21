import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrder, resetOrderStatus } from "@store/orders/PlaceOrderSlice";
import { TProduct } from "@types";

const useOrders = () => {
  const dispatch = useAppDispatch();
  const {loading, error, orderList } = useAppSelector(state => state.orders);
  const[showModal, setShowModal] = useState(false);
  const [selectProduct, setSelectedProduct]= useState<TProduct[]>()

  const handleShowProductDetails = (id: number) => {
      const productDetails = orderList.find(product => product.id === id);
      setShowModal(true);
      setSelectedProduct(productDetails?.items)
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct([]);
  }
  useEffect(() => {
    const promise = dispatch(actGetOrder());
    return () => {
      promise.abort();
      dispatch(resetOrderStatus())
    }
  }, [dispatch])

 
  return{
    loading,
    error,
    orderList,
    showModal,
    selectProduct,
    handleShowProductDetails,
    handleCloseModal
  }
}

export default useOrders;