import { useRef, useState } from 'react';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipRate, setTipRate] = useState(0);
  const [total, setTotal] = useState(0);
  const billAmountRef = useRef(true);

  function handleSubmit(e) {
    e.preventDefault();
    calculateTip();
    setHadCalculate(true);
  }

  function handleChange(e, setAmount) {
    const value = e.target.value;
    if (value >= 0) {
      setAmount(value);
    } else {
      alert('The amount must be more than 0!');
    }
  }

  function handleClick(setAmount, ref) {
    if (ref.current) {
      ref.current = false;
      setAmount('');
    }
  }

  function calculateTip() {
    const bill = parseFloat(billAmount);
    const rate = parseFloat(tipRate) / 100;
    const calculatedTip = bill * rate;
    setTip(calculatedTip.toFixed(2));
    setTotal((bill + calculatedTip).toFixed(2));
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Simple Tips Calculator</h1>
      <div>
        <label htmlFor='bill'>Bill Amount</label>
        <div>
          <span>RM</span>
          <input
            type='number'
            id='bill'
            name='bill-amount'
            value={billAmount}
            step={0.01}
            min={0}
            max={999999}
            onChange={(e) => handleChange(e, setBillAmount)}
            onClick={() => handleClick(setBillAmount, billAmountRef)}
          />
        </div>
        <div>
          <div>
            <label htmlFor='tip-rate'>Tip Rate: </label>
            <span>{tipRate}%</span>
          </div>
          <input
            type='range'
            id='tip-rate'
            name='tip-rate'
            value={tipRate}
            step={1}
            min={0}
            max={100}
            onChange={(e) => handleChange(e, setTipRate)}
          />
        </div>
        <div>
          <button type='submit'>Calculate</button>

          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      </div>

      <div>
        <div>
          <p>Bill</p>
          <p>RM {billAmount}</p>
        </div>
        <div>
          <p>Tip</p>
          <p>RM {tip}</p>
        </div>
        <div>
          <p>Total</p>
          <p>RM {total}</p>
        </div>
      </div>
    </form>
  );
}

export default App;
