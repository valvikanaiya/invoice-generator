import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../store/slices/invoiceItem";
import { currencies } from "../../utils/invoice";

const CurrencyDropdown = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.billing.currency);

  const handleChange = (event) => {
    dispatch(setCurrency(JSON.parse(event.target.value)));
  };

  return (
    <select value={currency} onChange={handleChange}>
      {currencies.map((currency) => (
        <option key={currency.code} value={JSON.stringify(currency)}>
          {currency.name} ({currency.symbol})
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
