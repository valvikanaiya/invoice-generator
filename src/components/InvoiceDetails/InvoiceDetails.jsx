import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState({ formError: false, billToError: false });
  const dispatch = useDispatch();

  return (
    <div>
      <div className="py-1 mt-4 lg:mt-0 lg:py-4">
        <textarea
          className={`w-full lg:w-[75%] py-1 px-2 border rounded focus:outline-gray-200 focus:outline-1 resize-none ${
            error.formError ? "border-red-500" : ""
          }`}
          name={"from"}
          value={form}
          placeholder={"who is this from?"}
          autoComplete="off"
          onChange={(e) => {
            if (e.target.value === "") {
              setError((preve) => ({ ...preve, formError: true }));
            } else {
              setError((preve) => ({ ...preve, formError: false }));
            }
            dispatch(setInvoiceFrom(e.target.value));
          }}></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        <div className="flex flex-col gap-2">
          <LabelInputs
            value={billToLabel}
            onChange={(e) => dispatch(setBillToLabel(e.target.value))}
          />
          <TextAreaInput
            value={billTo}
            className={`focus:outline-1 resize-none ${
              error.billToError ? "border-red-500" : ""
            }`}
            // setValue={setBillTo}
            onChange={(e) => {
              if (e.target.value === "") {
                setError((preve) => ({ ...preve, billToError: true }));
              } else {
                setError((preve) => ({ ...preve, billToError: false }));
              }
              dispatch(setBillTo(e.target.value));
            }}
            placeholder={"who is this do?"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInputs
            value={shipToLabel}
            onChange={(e) => dispatch(setShipToLabel(e.target.value))}
          />
          <TextAreaInput
            value={shipTo}
            // setValue={setShipTo}
            onChange={(e) => dispatch(setShipTo(e.target.value))}
            placeholder={"(optional)"}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
