import { Container} from "react-bootstrap";

import useProducts from "@hooks/useProducts";
import { Loading } from "@components/feedback";
import { Product } from "./index";
import { GridList} from "./index";
import { Heading } from "@components/common";

const Products = () => {
  const {loading, error, productFullInfo, productPrefix} = useProducts();
  return (
    <Container>
      <Heading title={`${productPrefix?.toUpperCase()} Products`} />
      <Loading status={loading} error={error}>
        <GridList records={productFullInfo} renderItem={(record) => <Product {...record}/>}/>
      </Loading>
    </Container>
  );
};

export default Products;
