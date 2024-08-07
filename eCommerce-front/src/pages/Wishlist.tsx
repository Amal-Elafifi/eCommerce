import { Container} from "react-bootstrap";
import useWishlist from "@hooks/useWishlist";
import { Heading } from "@components/common"
import { Loading } from "@components/feedback";
import { GridList, Product} from "./index";


const Wishlist = () => {
  const{loading, error, records} = useWishlist();

  return (
    <Container>
      <Heading title="Your Wishlist"/>
      <Loading status={loading} error={error} type="wishlist">
        <GridList records={records} emptyMessage="Your wishlist Is empty" renderItem={(record) => <Product {...record} />}/>
      </Loading>
    </Container>
  )
}


export default Wishlist;