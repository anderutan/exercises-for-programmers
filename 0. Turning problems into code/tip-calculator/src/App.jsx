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
      <div className='box-section'>
        <label htmlFor='bill' className='label'>
          Bill Amount
        </label>
        <div className='bill-amount'>
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
        <div className='tip-section'>
          <div className='tip-rate-section'>
            <label htmlFor='tip-rate' className='label tip-rate'>
              Tip Rate
            </label>
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
            className='tip-rate-bar'
          />
        </div>
        <div>
          <button type='submit' className='btn-calculate'>
            Calculate
          </button>

          <button
            onClick={() => window.location.reload()}
            className='btn-restart'
          >
            Restart
          </button>
        </div>
      </div>

      <div className='box-section'>
        <div className='price-section'>
          <p className='label'>Bill</p>
          <p className='amount'>RM {billAmount}</p>
        </div>
        <div className='price-section'>
          <p className='label'>Tip</p>
          <p className='amount'>RM {tip}</p>
        </div>
        <div className='price-section total-section'>
          <p className='label'>Total</p>
          <p className='amount total'>RM {total}</p>
        </div>
      </div>
    </form>
  );
}

export default App;
