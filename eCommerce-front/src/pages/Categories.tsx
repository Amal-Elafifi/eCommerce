import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Category } from ".";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { GridList } from ".";
import { actGetCategories } from ".";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch]);

  return (
    <Container>
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
