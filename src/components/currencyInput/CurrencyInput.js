import PropTypes from "prop-types";
import "./CurrencyInput.css";

function CurrencyInput(props) {
  return (
    <div className="group">
      <input
        type="text"
        value={props.amount}
        onChange={(e) =>
          props.onHandleChange(props.id, e.target.value, "amount")
        }
      />
      <select
        value={props.currency}
        onChange={(e) => props.onHandleChange(props.id, e.target.value)}
      >
        {props.currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onHandleChange: PropTypes.func,
};

export default CurrencyInput;
