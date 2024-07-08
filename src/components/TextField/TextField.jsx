import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../../utils/invoice";

const TextField = ({ value, amount, setValue }) => {
  const { currency } = useSelector((state) => state.billing);
  const dispatch = useDispatch();
  return (
    <div className="grid  grid-cols-2 gap-2 items-center mb-2">
      <input
        className="lg:text-right  py-2 px-3 border border-transparent hover:border-gray-200 text-sm text-gray-600 font-light rounded focus:outline-gray-200 focus:outline-1"
        type="text"
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
      />
      <span className="text-sm block text-right">
        {`${currency.code}${currency.symbol} ${formatNumber(
          Number(amount || 0)
        )}`}
      </span>
    </div>
  );
};

export default TextField;
