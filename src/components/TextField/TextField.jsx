import React from "react";
import { useDispatch } from "react-redux";

const TextField = ({ value, amount, setValue }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 col-gap-8 items-center mb-2">
      <input
        className="lg:text-right col-span-3 py-2 px-3 border border-transparent hover:border-gray-200 text-sm text-gray-600 font-light rounded focus:outline-gray-200 focus:outline-1"
        type="text"
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
      />
      <span className="text-sm col-span-2 block text-right gap-2">
        {`US$ ${Number(amount || 0)?.toFixed(2)}`}
      </span>
    </div>
  );
};

export default TextField;
