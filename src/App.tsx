import Button from "./components/Button";
import Container from "./components/Container";


function App() {
  return (
  <Container as={Button}  el="button"> Click Me </Container>
  );
}

export default App;
