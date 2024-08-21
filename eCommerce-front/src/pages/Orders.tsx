import { Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { Modal, Table } from "react-bootstrap";
import {ProductInfo} from "./index";
import useOrders from "@hooks/useOrders";

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectProduct,
    handleShowProductDetails,
    handleCloseModal
  } = useOrders();
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectProduct?.map(el =>
         <ProductInfo
          title = {el.title}
          price = {el.price} 
          img = {el.img}
          quantity= {el.quantity}
          direction="column"
          style={{marginTop: "10px"}}
        />
        )}
        </Modal.Body>
      </Modal>
      <Heading title="My Order"/>
      <Loading status={loading} error={error} type="orders" > 
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList?.map(el=>(
                <tr key={el.id}>
                    <td>#{el.id}</td>
                    <td>{el.items.length} {"item(s)  "}   
                        <span style={{fontWeight: "bold", color: "blue", cursor: "pointer"}} onClick={() => handleShowProductDetails(el.id)}>
                          Product Details
                        </span>
                    </td>
                    <td>{el.subtotal.toFixed(2)}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Loading>
    
    </>
  )
}

export default Orders;