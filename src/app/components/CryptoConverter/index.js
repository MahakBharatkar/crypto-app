import { useState } from "react";
import styles from "./styles.module.css";
import useConverter from "./useConverter";

const CryptoConverter = ({ currencies }) => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");

  const { convert } = useConverter();


  return (
    <div id="section2" className={styles.converter_container}>
      <div className={styles.converter_heading}>CryptoConverter</div>

      <div className={styles.form_container}>
        <div className={styles.field_container}>
          <span className={styles.label}>Amount</span>
          <input
            className={styles.input_style}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className={styles.field_container}>
          <span className={styles.label}>FROM</span>
          <select
            className={styles.select_style}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field_container}>
          <span className={styles.label}>TO</span>
          <select
            className={styles.select_style}
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.lower_container}>

      
      {result? <div className={styles.result}>{fromCurrency} =
      <span className={styles.to_currency}> {toCurrency} {result}</span>
      </div>: null}

      <button
        className={styles.convert_button}
        onClick={() => {
          setResult(convert[fromCurrency][toCurrency](amount));
        }}
      >
        Convert
      </button>

      </div>

      
    </div>
  );
};

export default CryptoConverter;
