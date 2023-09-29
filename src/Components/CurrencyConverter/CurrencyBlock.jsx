import "./CurrencyConverter.css";
import { defaultCurrencies } from "../../utils/constants";

function CurrencyBlock({ value, currency, onChangeValue, onChangeCurrency }) {
  return (
    <div className="block">
      <ul className="block__currencies">
        {defaultCurrencies.map((cur) => (
          <li
            className={
              currency === cur ? `block__currency_active` : `block__currency`
            }
            key={cur}
            onClick={() => onChangeCurrency(cur)}
          >
            {cur}
          </li>
        ))}
        <li className="block__cur-icon">
          <svg
            className="block__svg"
            height="50px"
            viewBox="0 0 50 50"
            width="50px"
          >
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
      </ul>
      <input
        className="block__input"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        type="number"
        placeholder={0}
      />
    </div>
  );
}

export default CurrencyBlock;
