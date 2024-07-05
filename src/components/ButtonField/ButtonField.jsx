import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDiscount,
  setDiscountLabel,
  setDiscountType,
  setTax,
  setTaxLabel,
  setTaxType,
  setShipping,
  setShippingLabel,
  setShippingType,
} from "../../store/slices/invoiceItem";

import ChangeType from "@assets/icons/change-icon.svg";

const Field = ({
  label,
  type,
  onLabelChange,
  onTypeToggle,
  value,
  onValueChange,
  removeField,
  field,
  currency,
}) => (
  <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-2 items-center mb-2">
    <input
      className="text-right col-span-3 py-2 px-3 border border-transparent hover:border-gray-200 text-sm text-gray-600 font-light rounded focus:outline-gray-200 focus:outline-1"
      type="text"
      value={label}
      onChange={(e) => onLabelChange(e.target.value)}
      placeholder="Enter title"
    />
    <div className="col-span-2 text-gray-600 flex gap-2">
      <div className="border-2 flex items-center rounded">
        <div className="flex flex-auto items-center justify-between border-r-2 px-2">
          {type === "$" && <span>{currency}</span>}
          <input
            type="text"
            className="w-[8rem] text-sm py-2 px-3 rounded focus:outline-none"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
          />
          {type === "%" && <span>%</span>}
        </div>
        <button
          className="w-[28px] flex items-center justify-center"
          onClick={onTypeToggle}
        >
          <img className="w-4 h-4" src={ChangeType} alt="" />
        </button>
      </div>
      <button onClick={() => removeField(field)}>x</button>
    </div>
  </div>
);

const ButtonField = () => {
  const { currency } = useSelector((state) => state.billing);
  const dispatch = useDispatch();
  const fields = useSelector((state) => ({
    discount: {
      buttonLabel: "Discount",
      label: state.billing.discountLabel,
      type: state.billing.discountType,
      value: state.billing.discount,
    },
    tax: {
      buttonLabel: "Tax",
      label: state.billing.taxLabel,
      type: state.billing.taxType,
      value: state.billing.tax,
    },
    shipping: {
      buttonLabel: "Shipping",
      label: state.billing.shippingLabel,
      type: state.billing.shippingType,
      value: state.billing.shipping,
    },
  }));

  const [activeFields, setActiveFields] = useState({
    discount: false,
    tax: false,
    shipping: false,
  });

  const handleButtonClick = (field) => {
    setActiveFields({
      ...activeFields,
      [field]: true,
    });
    if (field === "discount") {
      dispatch(setDiscountType("%"));
      dispatch(setDiscount(""));
    } else if (field === "tax") {
      dispatch(setTaxType("%"));
      dispatch(setTax(""));
    } else if (field === "shipping") {
      dispatch(setShippingType("%"));
      dispatch(setShipping(""));
    }
  };

  const handleRemoveField = (field) => {
    setActiveFields({
      ...activeFields,
      [field]: false,
    });
    if (field === "discount") {
      dispatch(setDiscountType(null));
      dispatch(setDiscount(""));
    } else if (field === "tax") {
      dispatch(setTaxType(null));
      dispatch(setTax(""));
    } else if (field === "shipping") {
      dispatch(setShippingType(null));
      dispatch(setShipping(""));
    }
  };

  const handleTypeToggle = (field) => {
    if (field === "discount") {
      dispatch(setDiscountType(fields.discount.type === "%" ? "$" : "%"));
    } else if (field === "tax") {
      dispatch(setTaxType(fields.tax.type === "%" ? "$" : "%"));
    } else if (field === "shipping") {
      dispatch(setShippingType(fields.shipping.type === "%" ? "$" : "%"));
    }
  };

  const handleValueChange = (field, value) => {
    if (field === "discount") {
      dispatch(setDiscount(value));
    } else if (field === "tax") {
      dispatch(setTax(value));
    } else if (field === "shipping") {
      dispatch(setShipping(value));
    }
  };

  const handleLabelChange = (field, label) => {
    if (field === "discount") {
      dispatch(setDiscountLabel(label));
    } else if (field === "tax") {
      dispatch(setTaxLabel(label));
    } else if (field === "shipping") {
      dispatch(setShippingLabel(label));
    }
  };

  return (
    <div className="flex justify-end flex-col">
      <div>
        {Object.keys(fields).map(
          (field) =>
            activeFields[field] && (
              <div
                className="flex justify-end w-full gap-3 items-center"
                key={field}
              >
                <Field
                  label={fields[field].label}
                  type={fields[field].type}
                  value={fields[field].value}
                  onTypeToggle={() => handleTypeToggle(field)}
                  onValueChange={(value) => handleValueChange(field, value)}
                  onLabelChange={(label) => handleLabelChange(field, label)}
                  removeField={handleRemoveField}
                  field={field}
                  currency={`${currency.symbol}`}
                />
              </div>
            )
        )}
      </div>
      <div className="flex gap-8 justify-end">
        {Object.keys(fields).map(
          (field) =>
            !activeFields[field] && (
              <button
                key={field}
                className="text-teal-500 text-sm"
                onClick={() => handleButtonClick(field)}
              >
                + {fields[field].buttonLabel}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default ButtonField;
