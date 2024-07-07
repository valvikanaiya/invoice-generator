import React, { useEffect, useRef, useState } from "react";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import DownloadPDF from "../../pages/downloadPdf/DownloadPDF";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import _ from "lodash";

const SideBar = () => {
  const componentRef = useRef();
  const { tax, shipping, discount, subtotal } = useSelector(
    (state) => state.billing
  );
  const invoice = useSelector((state) => state.invoice);
  const billing = useSelector((state) => state.billing);
  const invoiceState = { ...invoice, ...billing };
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });
  const isDesebled =
    Number(tax) < 0 ||
    Number(shipping) < 0 ||
    Number(discount) < 0 ||
    Number(subtotal) <= 0 ||
    invoice?.billTo === "" ||
    invoice?.invoiceDate === "" ||
    invoice?.form === "";

  const paidAmount =
    Number(billing.balanceDue) !== 0 ? invoice.invoiceDueDate === "" : false;
  const [showDraft, setShowDraft] = useState(false);
  const defaultInvoice = JSON.parse(localStorage.getItem("invoice"));
  const defaultBillig = JSON.parse(localStorage.getItem("billing"));
  const copyBiling = _.omit(billing, "invoiceItems");
  const copydefultBillig = _.omit(defaultBillig, "invoiceItems");

  const billingEqual = _.isEqual(copyBiling, copydefultBillig);
  const invoiceEqual = _.isEqual(invoice, defaultInvoice);

  useEffect(() => {
    if (invoiceEqual && billingEqual) {
      setShowDraft(false);
    } else {
      setShowDraft(true);
    }
  }, [invoice, billing]);
  const setToDefault = () => {
    localStorage.setItem("invoice", JSON.stringify(invoice));
    localStorage.setItem("billing", JSON.stringify(billing));
    setShowDraft(false);
  };
  return (
    <div>
      <CurrencyDropdown />
      <button
        className="bg-green-600 mt-4 p-4 w-full rounded hover:bg-green-700 font-semibold text-white transition-all disabled:bg-gray-600"
        disabled={isDesebled || paidAmount}
        onClick={() => handlePrint(null, () => componentRef.current)}>
        Download
      </button>
      <div className="hidden">
        <DownloadPDF ref={componentRef} />
      </div>
      {showDraft && (
        <button
          className="w-full mt-6 text-md font-bold text-green-600 hover:text-green-500 transition-all"
          onClick={setToDefault}>
          Save Default
        </button>
      )}
    </div>
  );
};

export default SideBar;
