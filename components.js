// components.js
import React from 'react';

const Frete = ({ frete }) => {
  return (
    <div>
      <h2>{frete.produto}</h2>
      <p>
        Tipo de veículo: {frete.tipoVeiculo}
        <br />
        Peso: {frete.peso} kg
        <br />
        Quilômetros: {frete.distancia} km
        <br />
        Valor: R$ {frete.valor}
        <br />
        Taxa: R$ {frete.taxa}
        <br />
        Valor líquido: R$ {frete.valorLiquido}
      </p>
    </div>
  );
};

export default Frete;
