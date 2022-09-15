import PropTypes from "prop-types";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div>USD: {props.toUSD ? props.format(props.toUSD) : "Loading..."}</div>
      <div>EUR: {props.toEUR ? props.format(props.toEUR) : "Loading..."}</div>
    </header>
  );
}

Header.propTypes = {
  toUSD: PropTypes.number.isRequired,
  toEUR: PropTypes.number.isRequired,
  format: PropTypes.func,
};

export default Header;
