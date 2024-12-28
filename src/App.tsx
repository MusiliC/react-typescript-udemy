import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Name" id="name" type="text" />
        <Input label="Age" id="age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
