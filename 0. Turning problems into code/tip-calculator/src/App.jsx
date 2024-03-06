import { useState } from 'react';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipRate, setTipRate] = useState(0);
  const [total, setTotal] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    calculateTip();
    console.log(tip, total);
  }

  function calculateTip() {
    const bill = parseFloat(billAmount);
    const rate = parseFloat(tipRate) / 100;
    const calculatedTip = bill * rate;
    setTip(calculatedTip.toFixed(2));
    setTotal((bill + calculatedTip).toFixed(2));
  }

  function handleChange(e, setAmount) {
    const value = e.target.value;
    if (value >= 0) {
      setAmount(value);
    } else {
      alert('The amount must be more than 0!');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Simple Tips Calculator</h1>
      <label htmlFor='bill'>Bill Amount:</label>
      <input
        type='number'
        id='bill'
        name='bill-amount'
        value={billAmount}
        step={0.01}
        min={0}
        max={999999}
        onChange={(e) => handleChange(e, setBillAmount)}
      />

      <label htmlFor='tip-rate'>Tip Rate:</label>
      <input
        type='number'
        id='tip-rate'
        name='tip-rate'
        value={tipRate}
        step={1}
        min={0}
        max={100}
        onChange={(e) => handleChange(e, setTipRate)}
      />

      <button type='submit'>Calculate</button>

      <div>
        <p>Tip: {tip}</p>
        <p>Total: {total}</p>
      </div>
    </form>
  );
}

export default App;
