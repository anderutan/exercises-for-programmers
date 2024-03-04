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
    setTip(calculatedTip);
    setTotal(bill + calculatedTip);
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
        onChange={(e) => setBillAmount(e.target.value)}
      />

      <label htmlFor='tip-rate'>Tip Rate:</label>
      <input
        type='number'
        id='tip-rate'
        name='tip-rate'
        value={tipRate}
        onChange={(e) => setTipRate(e.target.value)}
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
