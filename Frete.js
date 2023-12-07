import React from 'react';

const Frete = ({ id, produto, valor }) => {
  return (
    <div>
      <h2>Frete</h2>
      <p>Id: {id}</p>
      <p>Produto: {produto}</p>
      <p>Valor: {valor}</p>
      <FreteDistancia distancia={distancia} />
    </div>
  );
};

const FreteDistancia = ({ distancia }) => {
  return (
    <p>Distância: {distancia}</p>
  );
};

export default Frete;
