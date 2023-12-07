// models/veículo.js

const sequelize = new Sequelize('mysql://root:password@localhost:3306/meu_banco_de_dados');

const Veículo = sequelize.define('veículo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  peso: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = { Veículo };

// index.js

import React, { useState, useEffect } from "react";
import { Veículo } from "./models/veículo";

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
  const response = await axios.get("/fretes");
  setData(response.data);
};

export default App;

const veículo = {
    tipo: "Carro",
    peso: 1000,
  };
  
  const novoVeículo = await Veículo.create(veículo); 



const veículoAtualizado = {
  tipo: "Caminhão",
  peso: 2000,
};

await Veículo.update(1, veículoAtualizado);

const id = 1;

await Veículo.destroy(1);
