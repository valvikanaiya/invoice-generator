import React, { useEffect, useState } from "react";
import {
  initialInvoiceLabelData,
  intialInvocePymentData,
  invoicePymentDetails,
} from "../../utils/invoice";
import Inputs from "@components/Inputs/Inputs";
import FileInput from "../../components/FileInput/FileInput";

import { useDispatch, useSelector } from "react-redux";
import {
  resetInvoice,
  setInvoiceName,
  setInvoiceNumber,
  setInvoicePaymentDetails,
} from "../../store/slices/invoice";
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails";
import ItemList from "../../components/ItemList/ItemList";
import InvoiceDescription from "../../components/InvoiceDescription/InvoiceDescription";
import Billing from "../../components/Billing/Billing";

const Invoice = () => {
  const [lableValue, setLableValue] = useState(initialInvoiceLabelData);
  const [invoicePaymentDetail, setInvoicePaymentDetail] = useState(
    intialInvocePymentData
  );
  const dispatch = useDispatch();
  const { invoiceName, invoiceNumber } = useSelector((state) => state.invoice);

  useEffect(() => {
    dispatch(setInvoicePaymentDetails(invoicePaymentDetail));
    dispatch(setInvoicePaymentDetails(lableValue));
  }, [invoicePaymentDetail, lableValue]);

  return (
    <div className="grid-row-2  grid grid-cols-12 gap-4  mt-6 p-4  ">
      <div className=" col-span-12 lg:col-span-10 shadow-lg rounded p-4 border">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 lg:col-span-7">
            <FileInput />
            <InvoiceDetails />
          </div>
          <div className="col-span-6 lg:col-span-5 flex flex-col justify-between items-end">
            <div className="flex flex-col justify-between items-end">
              <input
                type="text"
                className="text-gray-600 border border-transparent hover:border-gray-200 w-full text-4xl text-right py-1 px-2 focus:outline-gray-200 focus:outline-1 mb-2"
                onChange={(e) => dispatch(setInvoiceName(e.target.value))}
                value={invoiceName}
              />
              <div className="border lg:w-[50%] flex items-center rounded">
                <span className="py-1 px-3 bg-gray-100">#</span>
                <input
                  type="text"
                  className="text-gray-600 w-full  text-right focus:outline-none px-2"
                  onChange={(e) => dispatch(setInvoiceNumber(e.target.value))}
                  value={invoiceNumber}
                />
              </div>
            </div>
            <div className="py-4">
              {invoicePymentDetails.map((item) => (
                <Inputs
                  key={item.label}
                  type={item.type}
                  labelName={item.labelName}
                  inputName={item.inputName}
                  setLableValue={setLableValue}
                  lableValue={lableValue}
                  inputValue={invoicePaymentDetail}
                  setInputValue={setInvoicePaymentDetail}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <ItemList />
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 ">
          <div className="flex flex-col gap-4">
            <InvoiceDescription />
          </div>
          <div className="">
            <Billing />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-2 rounded p-4">
        <button
          className="border-none"
          onClick={() => dispatch(resetInvoice())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Invoice;
