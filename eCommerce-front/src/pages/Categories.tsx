import { Container } from "react-bootstrap";
import { Category, GridList } from "./index";
import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const{loading, error, records} = useCategories();

  return (
    <Container>
      <Heading title="Categories" />
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
