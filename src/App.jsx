import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const soma = Number(num1) + Number(num2);
    setResultado(soma);
  };

  return (
    <div className="App">
      <h1>Calculadora de Soma</h1>
      <div>
        <input
          type="number"
          placeholder="numero 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="numero 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={somar}>Somar</button>
      </div>
      {resultado !== null && (
        <p>Resultado: {resultado}</p>
      )}
    </div>
  );
}

export default App; 