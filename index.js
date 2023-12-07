import React, { useState, useEffect } from "react";
import { Veículo, createVeículo } from "./models/veículo";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getFretes();
  }, []);

  const renderFretes = () => {
    if (data) {
      return (
        <ul>
          {data.map((frete) => (
            <li key={frete.id}>
              <Frete frete={frete} />
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <button onClick={getFretes}>Get fretes</button>
      {renderFretes()}
    </div>
  );
};

const getFretes = async () => {
  // TODO: Implementar a lógica para obter os fretes
};

export default App;
