import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
  records: T[],
  renderItem: (record: T) => React.ReactNode
}

type HasId = {id?: number}

const GridList =<T extends HasId> ({records, renderItem}: GridListProps<T>) => {

  const itemsList = records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
    {renderItem(record)}
  </Col>
  )): "categories not found";

  return (
    <div>
      <Row>
        {itemsList}
      </Row> 
    </div>
  )
}

export default GridList