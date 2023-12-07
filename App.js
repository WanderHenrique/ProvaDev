import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const getFretes = async () => {
    const response = await axios.get('/fretes');
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getFretes}>Get fretes</button>
      {data && <ul>
        {data.map((frete) => (
          <li key={frete.id}>{frete.produto}</li>
        ))}
      </ul>}
    </div>
  );
};

export default App;
