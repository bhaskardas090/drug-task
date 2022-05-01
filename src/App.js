import { useEffect, useState } from 'react';
import drugData from './drug-data.json';
import './App.css';

const Input = ({ type, items, unit }) => {
  if (type === 'dropdown')
    return (
      <select>
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
        <input type={type} />
        <p className="unit">{unit}</p>
      </div>
    );

  return <input type={type} />;
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
          {console.log(formData)}
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
        </form>
      </div>
    </div>
  );
};

export default App;
