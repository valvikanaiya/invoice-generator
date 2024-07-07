import React, { useRef } from "react";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import DownloadPDF from "../../pages/downloadPdf/DownloadPDF";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";

const SideBar = () => {
  const componentRef = useRef();
  const { tax, shipping, discount, subtotal } = useSelector(
    (state) => state.billing
  );
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
    Number(subtotal) <= 0;
  console.log(isDesebled);
  return (
    <div>
      <CurrencyDropdown />
      <button
        className="bg-green-600 mt-4 p-4 w-full rounded hover:bg-green-700 font-semibold text-white transition-all disabled:bg-gray-600"
        disabled={isDesebled}
        onClick={() => handlePrint(null, () => componentRef.current)}>
        Download
      </button>
      <div className="hidden">
        <DownloadPDF ref={componentRef} />
      </div>
    </div>
  );
};

export default SideBar;
