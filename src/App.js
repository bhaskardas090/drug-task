import { useState } from 'react';
import drugData from './drug-data.json';
import './App.css';

const Input = ({ type, items, unit, isRequired }) => {
  if (type === 'dropdown')
    return (
      <select required={isRequired}>
        {items.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    );

  if (unit)
    return (
      <div className="input-unit">
        <input type={type} required={isRequired} />
        <p className="unit">{unit}</p>
      </div>
    );

  return <input type={type} required={isRequired} />;
};

const App = () => {
  const { drugs } = drugData;
  const [formData, setFormData] = useState();

  const setDrugData = (type) => {
    setFormData(drugs[type]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="drugs">
          <button className="drug1" onClick={() => setDrugData('drug1')}>
            Order Drug 1
          </button>
          <button className="drug2" onClick={() => setDrugData('drug2')}>
            Order Drug 2
          </button>
        </div>
        <form className="form">
          {formData ? (
            formData.map((data) => (
              <div key={data.label}>
                <label>{data.label}</label>
                <br />
                <Input {...data} />
              </div>
            ))
          ) : (
            <h1>Order Something...</h1>
          )}
          {formData && <input type="submit" value="Submit Form" />}
        </form>
      </div>
    </div>
  );
};

export default App;
