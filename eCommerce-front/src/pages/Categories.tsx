import { Container } from "react-bootstrap";
import useCategories from "@hooks/useCategories";
import { Category, GridList } from "./index";
import { Loading } from "@components/feedback";
import { Heading } from "@components/common";

const Categories = () => {
  const{loading, error, records} = useCategories();

  return (
    <Container>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category">
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
          emptyMessage= "There is no Categories"
        />
      </Loading>
    </Container>
  );
};

export default Categories;
