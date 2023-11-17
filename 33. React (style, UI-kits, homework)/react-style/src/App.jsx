import Navbar from "./Navbar";
import Button from "./Button";
import Form from "./Form";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Box from "./Box";
function App() {
  return (
    <>
      <Container>
        <Row>
          <Col size={4}>
            <Box />
          </Col>
          <Col size={8}>
            <Box />
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default App;
