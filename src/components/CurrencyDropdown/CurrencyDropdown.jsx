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
    <div className="py-1 px-2  border-2 rounded bg-indigo-500 border-indigo-700">
      <select
        className=" text-white cursor-pointer  bg-transparent bg-indigo-500  text-sm rounded-lg focus:outline-none block w-full p-2.5 "
        value={currency}
        onChange={handleChange}
      >
        {currencies.map((currency) => (
          <option
            className="bg-indigo-500"
            key={currency.code}
            value={JSON.stringify(currency)}
          >
            {currency.name} ({currency.symbol})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
