import React from "react";
import TextField from "../TextField/TextField";
import { useSelector } from "react-redux";
import {
  setAmountPaid,
  setAmountPaidLabel,
  setBalanceDueLabel,
  setSubTotal,
  setTotalLabel,
} from "../../store/slices/invoiceItem";
import ButtonField from "../ButtonField/ButtonField";

const Billing = () => {
  const {
    total,
    subtotal,
    totalLabel,
    subtotalLabel,
    balanceDueLabel,
    balanceDue,
    anountPaid,
    amountPaidLabel,
    currency,
  } = useSelector((state) => state.billing);

  return (
    <div className="py-4">
      <TextField
        value={subtotalLabel}
        amount={subtotal}
        setValue={setSubTotal}
      />
      <ButtonField />
      <TextField value={totalLabel} amount={total} setValue={setTotalLabel} />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 items-center">
        <input
          className="lg:text-right col-span-3 py-2 px-3 border border-transparent hover:border-gray-200 text-sm text-gray-600 font-light rounded focus:outline-gray-200 focus:outline-1"
          type="text"
          value={amountPaidLabel}
          onChange={(e) => setAmountPaidLabel(e.target.value)}
        />
        <div className="col-span-2 border rounded flex">
          <span className="py-1 px-3 bg-gray-100">{currency.symbol}</span>
          <input
            className="text-sm  w-full  py-2 px-3  rounded focus:outline-none"
            type={"text"}
            value={anountPaid}
            onChange={(e) => setAmountPaid(e.target.value)}
          />
        </div>
      </div>
      <TextField
        value={balanceDueLabel}
        amount={balanceDue}
        setValue={setBalanceDueLabel}
      />
    </div>
  );
};

export default Billing;
