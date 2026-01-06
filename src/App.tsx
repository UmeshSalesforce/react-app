import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const items = ["India", "USA", "England"];
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleButton = () => {
    setAlertVisible(true);
  };

  return (
    <div className="container">
      <Navbar />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Now its better?</Alert>
      )}
      <br />
      <Message />
      <br />
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectedItem}
      />
      <br />
      <Button color="secondary" onSelectButton={handleButton}>
        Click Me
      </Button>

      <Form />
    </div>
  );
}

export default App;
