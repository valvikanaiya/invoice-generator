import React from "react";
import RemoveIcon from "@assets/icons/delete-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  updateItem,
} from "../../store/slices/invoiceItem";
const ItemList = () => {
  const { invoiceItems, currency } = useSelector((state) => state.billing);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleChange = (index, field, value) => {
    dispatch(updateItem({ index, field, value }));
  };

  return (
    <div className="lg:py-4 border-t mt-8 md:mt-0 md:border-t-0">
      <div className="hidden md:grid grid-cols-8 md:grid-cols-12 bg-indigo-500 gap-4  text-white md:p-2 rounded">
        <span className="col-span-2 md:col-span-7 text-left">Item</span>
        <span className="col-span-3 md:col-span-1 text-center">Quantity</span>
        <span className="col-span-2 md:col-span-2 text-center">Rate</span>
        <span className="col-span-1 md:col-span-2 text-left">Amount</span>
      </div>
      {invoiceItems?.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-12 gap-4 justify-between items-center mt-4 md:mt-0 md:p-2">
          <input
            type="text"
            placeholder="Description of item/service..."
            value={item.itemName}
            onChange={(e) => handleChange(index, "itemName", e.target.value)}
            className="text-sm col-span-12 md:col-span-7 p-2 border border-gray-300 rounded focus:outline-gray-200 focus:outline-1"
          />
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              handleChange(index, "quantity", parseInt(e.target.value, 10))
            }
            className="text-sm col-span-6 md:col-span-1 p-2 border border-gray-300 rounded focus:outline-gray-200 focus:outline-1"
          />
          <span className="before:content-['*'] before:absolute before:-left-[13px] relative col-span-6 md:col-span-2  border border-gray-300 rounded flex items-center">
            <span className="p-2 px-3 block h-full bg-gray-100">{`${currency.symbol}`}</span>
            <input
              type="number"
              value={item.rate}
              min="0"
              onChange={(e) =>
                handleChange(index, "rate", parseFloat(e.target.value))
              }
              className="text-sm w-full border-none focus:outline-none p-2 rounded"
            />
          </span>
          <span className="text-sm col-span-12 md:col-span-2 text-center flex items-center justify-between gap-2">
            {`${currency.code}${currency.symbol} ${item.amount?.toFixed(2)}`}
            {invoiceItems.length > 1 && (
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="ml-2 p-2 group">
                <img className="group " src={RemoveIcon} alt="Remove" />
              </button>
            )}
          </span>
        </div>
      ))}
      <button
        onClick={handleAddItem}
        className="mt-4 p-2 w-full md:w-auto bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-all">
        + Line Item
      </button>
    </div>
  );
};

export default ItemList;
