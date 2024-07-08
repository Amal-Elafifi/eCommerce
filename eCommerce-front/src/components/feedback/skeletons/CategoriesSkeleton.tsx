import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";


const CategoriesSkeleton = () => {
  const renderedSkeleton = Array(5).fill(0).map((_, idx) => (
    <Col key={idx} xs={3} className="d-flex justify-content-center mb-5 mt-2">
      <ContentLoader 
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#f0f0f0"
        foregroundColor="#ffffff"
      >
        <rect x="54" y="161" rx="4" ry="4" width="93" height="6" />
        <circle cx="100" cy="72" r="70" /> 
      </ContentLoader>
    </Col>
  ))
  return(
    <Row>
      {renderedSkeleton}
    </Row>
  )
}

export default CategoriesSkeleton;