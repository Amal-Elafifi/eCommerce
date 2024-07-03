import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Category } from ".";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { GridList } from ".";
import { actGetCategories } from ".";
import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import { categoriesRecordsCleanUP } from "@store/categories/categoriesSlice";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories,
  );

  useEffect(() => {

      dispatch(actGetCategories());
      return () =>{ dispatch(categoriesRecordsCleanUP())}
    
  }, [dispatch]);

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
