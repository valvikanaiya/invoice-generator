import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import {
  setInvoiceFrom,
  setInvoicePaymentDetails,
} from "../../store/slices/invoice";

const invoiceDetail = [
  {
    labelName: "billToLabel",
    inputName: "billTo",
    placeholder: "who is this do?",
  },
  {
    labelName: "shipToLabel",
    inputName: "shipTo",
    placeholder: "(optional)",
  },
];

const InvoiceDetails = () => {
  const { form, billToLabel, shipToLabel, billTo, shipTo } = useSelector(
    (state) => state.invoice
  );
  const [lableValue, setLableValue] = useState({ billToLabel, shipToLabel });
  const [invoicePaymentDetail, setInvoicePaymentDetail] = useState({
    billTo,
    shipTo,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInvoicePaymentDetails(invoicePaymentDetail));
    dispatch(setInvoicePaymentDetails(lableValue));
  }, [invoicePaymentDetail, lableValue]);
  return (
    <div>
      <div className="py-1 mt-4 lg:mt-0 lg:py-4">
        <textarea
          className="w-full lg:w-[75%] py-1 px-2 border rounded focus:outline-gray-200 focus:outline-1 resize-none"
          name={"from"}
          value={form}
          placeholder={"who is this from?"}
          autocomplete="off"
          onChange={(e) => dispatch(setInvoiceFrom(e.target.value))}
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {invoiceDetail.map((item) => (
          <TextAreaInput
            key={item.labelName}
            labelName={item.labelName}
            inputName={item.inputName}
            setLableValue={setLableValue}
            lableValue={lableValue}
            inputValue={invoicePaymentDetail}
            setInputValue={setInvoicePaymentDetail}
            placeholder={item.placeholder}
          />
        ))}
      </div>
    </div>
  );
};

export default InvoiceDetails;
