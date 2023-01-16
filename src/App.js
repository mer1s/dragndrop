import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import { products } from "./products";

function App() {
  const [phones, setPhones] = useState(products);
  const sections = [0, 5, 10, 15];

  const filter = (discount) => phones.filter((n) => n.discount === discount);

  const dragStart = (e, n) => {
    e.dataTransfer.clearData();
    e.dataTransfer.setData("id", n.id);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const drop = (e, n) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");

    setPhones(
      phones.map((phone) =>
        phone.id !== parseInt(id) ? phone : { ...phone, discount: n }
      )
    );
  };

  return (
    <div className="container">
      <div className="section-container">
        {sections.map((section, index) => (
          <Section
            section={section}
            dragOver={(e) => dragOver(e)}
            drop={(e) => drop(e, section)}
            dragStart={dragStart}
            filter={filter}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
