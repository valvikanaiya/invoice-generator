import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
const invoiceDescriptionData = [
  {
    labelName: "notesLabel",
    inputName: "notes",
    placeholder: "Notes - any relavent information not alredy covered",
  },
  {
    labelName: "termsLabel",
    inputName: "terms",
    placeholder:
      "Terms and conditions - late fees, payment methods, delevery schedule",
  },
];
const InvoiceDescription = () => {
  const { notesLabel, notes, termsLabel, terms } = useSelector(
    (state) => state.invoice
  );
  const [lableValue, setLableValue] = useState({ notesLabel, termsLabel });
  const [invoiceDescriptionValue, setInvoiceDescriptionValue] = useState({
    notes,
    terms,
  });

  return (
    <>
      {invoiceDescriptionData.map((item) => (
        <TextAreaInput
          key={item.labelName}
          labelName={item.labelName}
          inputName={item.inputName}
          setLableValue={setLableValue}
          lableValue={lableValue}
          inputValue={invoiceDescriptionValue}
          setInputValue={setInvoiceDescriptionValue}
          placeholder={item.placeholder}
        />
      ))}
    </>
  );
};

export default InvoiceDescription;
