import { useRef } from "react";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return <Input label="test" id="test" ref={input} />;
}

export default App;
