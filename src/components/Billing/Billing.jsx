import React, { useState } from "react";
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
import { formatNumber } from "../../utils/invoice";

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
  const [error, setError] = useState({ amountPaidError: false });
  return (
    <div className="py-4 flex flex-col gap-2">
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
        <div
          className={`border rounded flex ${
            error.amountPaidError ? "border-red-500" : ""
          }`}>
          <span className="py-1 px-3 bg-gray-100 rounded">
            {currency.symbol}
          </span>
          <input
            className="text-sm  w-full  py-2 px-3  rounded focus:outline-none"
            type={"number"}
            value={anountPaid}
            min={0}
            onChange={(e) => {
              if (e.target.value > total)
                setError((preve) => ({ ...preve, amountPaidError: true }));
              else setError((preve) => ({ ...preve, amountPaidError: false }));

              dispatch(setAmountPaid(e.target.value));
            }}
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
