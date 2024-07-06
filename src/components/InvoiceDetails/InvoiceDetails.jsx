import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import {
  setInvoiceFrom,
  setBillTo,
  setBillToLabel,
  setShipTo,
  setShipToLabel,
} from "@store/slices/invoice";
import { LabelInputs } from "../Inputs/Inputs";


const InvoiceDetails = () => {
  const { form, billToLabel, shipToLabel, billTo, shipTo } = useSelector(
    (state) => state.invoice
  );

  const dispatch = useDispatch();

  return (
    <div>
      <div className="py-1 mt-4 lg:mt-0 lg:py-4">
        <textarea
          className="w-full lg:w-[75%] py-1 px-2 border rounded focus:outline-gray-200 focus:outline-1 resize-none"
          name={"from"}
          value={form}
          placeholder={"who is this from?"}
          autocomplete="off"
          onChange={(e) => dispatch(setInvoiceFrom(e.target.value))}></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        <div className="flex flex-col gap-2">
          <LabelInputs
            value={billToLabel}
            onChange={(e) => dispatch(setBillToLabel(e.target.value))}
          />
          <TextAreaInput
            value={billTo}
            setValue={setBillTo}
            placeholder={"who is this do?"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInputs
            value={shipToLabel}
            onChange={(e) => setShipToLabel(e.target.value)}
          />
          <TextAreaInput
            value={shipTo}
            setValue={setShipTo}
            placeholder={"(optional)"}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
