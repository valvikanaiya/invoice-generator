import React from "react";
import TextField from "../TextField/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmountPaid,
  setAmountPaidLabel,
  setBalanceDueLabel,
  setSubTotal,
  setTotalLabel,
} from "../../store/slices/invoiceItem";
import ButtonField from "../ButtonField/ButtonField";
import { LabelInputs } from "../Inputs/Inputs";

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
  const dispatch = useDispatch();

  return (
    <div className="py-4">
      <TextField
        value={subtotalLabel}
        amount={subtotal}
        setValue={setSubTotal}
      />
      <ButtonField />
      <TextField value={totalLabel} amount={total} setValue={setTotalLabel} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        <LabelInputs
          className={"lg:text-right"}
          value={amountPaidLabel}
          onChange={(e) => dispatch(setAmountPaidLabel(e.target.value))}
        />
        <div className=" border rounded flex">
          <span className="py-1 px-3 bg-gray-100">{currency.symbol}</span>
          <input
            className="text-sm  w-full  py-2 px-3  rounded focus:outline-none"
            type={"text"}
            value={anountPaid}
            onChange={(e) => dispatch(setAmountPaid(e.target.value))}
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
