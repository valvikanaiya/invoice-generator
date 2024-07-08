import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { calculateTotal } from "../../utils/invoice";

const DownloadPDF = forwardRef((props, ref) => {
  const invoice = useSelector((state) => state.invoice);
  const billing = useSelector((state) => state.billing);

  const {
    logo,
    invoiceName,
    invoiceNumber,
    form,
    billTo,
    billToLabel,
    shipTo,
    shipToLabel,
    invoiceDate,
    invoiceDateLabel,
    paymentTerms,
    paymentTermsLabel,
    invoiceDueDate,
    invoiceDueDateLabel,
    poNumber,
    poNumberLabel,
    invoiceItems,
    currency,
    subtotalLabel,
    subtotal,
    discount,
    discountLabel,
    discountType,
    tax,
    taxLabel,
    taxType,
    shipping,
    shippingLabel,
    shippingType,
    total,
    totalLabel,
    amountPaidLabel,
    amountPaid,
    notesLabel,
    notes,
    termsLabel,
    terms,
    balanceDueLabel,
    balanceDue,
  } = {
    ...invoice,
    ...billing,
  };
  const billings = calculateTotal(
    subtotal,
    discount,
    discountType === "%",
    tax,
    taxType === "%",
    shipping,
    shippingType === "%"
  );

  return (
    <>
      <div className="mx-auto p-6" ref={ref}>
        <div className="grid grid-cols-2 gap-4">
          <div className=" w-52">
            {logo && (
              <img
                className="w-full aspect-video"
                src={logo || null}
                alt="logo"
              />
            )}
          </div>
          <div className="flex items-end flex-col gap-4">
            <div className=" text-4xl">{invoiceName && invoiceName}</div>
            {invoiceNumber && <p className=""># {invoiceNumber}</p>}
          </div>
          <div className="grid gap-4 p-4">
            <div className="text-wrap whitespace-pre-wrap font-semibold">
              {form && form}
            </div>
            <div className=" grid grid-cols-2">
              <div>
                <p>{billToLabel}</p>
                <p className="font-semibold">{billTo}</p>
              </div>
              <div>
                {shipTo && (
                  <>
                    <p>{shipToLabel}</p>
                    <p className="font-semibold">{shipTo}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="felx flex-col gap-4 justify-end items-start">
            <div className="grid grid-cols-2 gap-2">
              <p className="text-right">{invoiceDateLabel} :</p>
              <p className="text-right font-semibold">{invoiceDate}</p>
            </div>
            {paymentTerms && (
              <div className="grid grid-cols-2 gap-2">
                <p className="text-right">{paymentTermsLabel} :</p>
                <p className="text-right font-semibold">{paymentTerms}</p>
              </div>
            )}
            {invoiceDueDate && (
              <div className="grid grid-cols-2 gap-2">
                <p className="text-right">{invoiceDueDateLabel} :</p>
                <p className="text-right font-semibold">{invoiceDueDate}</p>
              </div>
            )}
            {poNumber && (
              <div className="grid grid-cols-2 gap-2">
                <p className="text-right">{poNumberLabel} :</p>
                <p className="text-right font-semibold">{poNumber}</p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-2 bg-gray-200 py-1 px-2 rounded">
              <p className="text-right font-semibold">{balanceDueLabel}</p>
              <p className="text-right font-semibold">
                {currency.code}
                {currency.symbol}
                {Number(balanceDue || 0)?.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-12 bg-slate-600 items-center text-white px-4 rounded py-2">
            <div className="block mt-0 col-span-7">Item</div>
            <div className="block mt-0 col-span-1 text-end">Quantity</div>
            <div className="block mt-0 col-span-2 text-end">Rate</div>
            <div className="block mt-0 col-span-2 text-end">Amount</div>
          </div>
          {invoiceItems?.map((item) =>
            item.rate ? (
              <div
                key={item.id}
                className="grid grid-cols-12 py-2 px-4 rounded">
                <span className="col-span-7">{item.itemName}</span>
                <span className="col-span-1 text-end">{item.quantity}</span>
                <span className="col-span-2 text-end">{item.rate}</span>
                <span className="col-span-2 text-end">
                  {currency.code}
                  {currency.symbol}
                  {Number(item.amount || 0).toFixed(2)}
                </span>
              </div>
            ) : null
          )}
        </div>
        <div className="grid justify-end mt-8">
          <div className="grid grid-cols-2 gap-2">
            <p className="text-right">{subtotalLabel} :</p>
            <p className="text-right font-semibold">
              {currency.code}
              {currency.symbol}
              {Number(subtotal || 0).toFixed(2)}
            </p>
          </div>
          {Number(discount) ? (
            <div className="grid grid-cols-2 gap-2">
              <p className="text-right">
                {`${discountLabel} (${discount} ${discountType}) :`}
              </p>
              <p className="text-right font-semibold">
                {currency.code}
                {currency.symbol}
                {Number(billings?.discountAmount)}
              </p>
            </div>
          ) : null}
          {Number(tax) ? (
            <div className="grid grid-cols-2 gap-2">
              <p className="text-right">{`${taxLabel} (${tax} ${taxType}) :`}</p>
              <p className="text-right font-semibold">
                {currency.code}
                {currency.symbol}
                {Number(billings?.taxAmount)}
              </p>
            </div>
          ) : null}
          {shipping ? (
            <div className="grid grid-cols-2 gap-2">
              <p className="text-right">{`${shippingLabel} (${shipping} ${shippingType}) :`}</p>
              <p className="text-right font-semibold">
                {currency.code}
                {currency.symbol}
                {Number(billings?.shippingAmount)}
              </p>
            </div>
          ) : null}
          <div className="grid grid-cols-2 gap-2">
            <p className="text-right">{`${totalLabel}  :`}</p>
            <p className="text-right font-semibold">
              {currency.code}
              {currency.symbol}
              {Number(total || 0)?.toFixed(2)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="text-right">{`${amountPaidLabel}  :`}</p>
            <p className="text-right font-semibold">
              {currency.code}
              {currency.symbol}
              {Number(amountPaid || 0)?.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            {notes?.trim() && (
              <>
                <p className="text-gray-400">{notesLabel}</p>
                <p>{notes}</p>
              </>
            )}
          </div>
          <div>
            {terms?.trim() !== "" && (
              <>
                <p className="text-gray-400">{termsLabel}</p>
                <p>{terms}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default DownloadPDF;
