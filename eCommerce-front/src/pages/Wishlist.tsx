import { Container} from "react-bootstrap";
import { Heading } from "@components/common"
import { Loading } from "@components/feedback";
import { GridList, Product} from "./index";
import useWishlist from "@hooks/useWishlist";


const Wishlist = () => {
  const{loading, error, records} = useWishlist();

  return (
    <Container>
      <Heading title="Your Wishlist"/>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Product {...record}/>}/>
      </Loading>
    </Container>
  )
}


export default Wishlist;