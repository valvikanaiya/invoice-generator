import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "billing",
  initialState: {
    subtotalLabel: "Subtotal",
    subtotal: 0,
    totalLabel: "Total",
    total: 0,
    discountLabel: "Discount",
    discount: 0,
    discountType: "%",
    taxLabel: "Tax",
    tax: 0,
    taxType: "%",
    shippingLabel: "Shipping",
    shipping: 0,
    shippingType: "%",
    amountPaidLabel: "Amount Paid",
    amountPaid: null,
    balanceDueLabel: "Balance Due",
    balanceDue: 0,
    currency: { code: "USD", symbol: "$", name: "US Dollar" },
    invoiceItems: [
      {
        id: new Date().toLocaleString(),
        itemName: "",
        quantity: 1,
        rate: 0,
        amount: 0,
      },
    ],
  },
  reducers: {
    addItem: (state) => {
      state.invoiceItems.push({
        id: new Date().toLocaleString(),
        itemName: "",
        quantity: 1,
        rate: 0,
        amount: 0,
      });
      recalculateInvoice(state);
    },
    removeItem: (state, action) => {
      state.invoiceItems = state.invoiceItems.filter(
        (item) => item.id !== action.payload
      );
      recalculateInvoice(state);
    },
    updateItem: (state, action) => {
      const { index, field, value } = action.payload;
      const item = state.invoiceItems[index];
      item[field] = value;
      if (field === "quantity" || field === "rate") {
        item.amount =
          field === "quantity" ? value * item.rate : item.quantity * value;
      }
      recalculateInvoice(state);
    },
    setAmountPaidLabel: (state, action) => {
      state.amountPaidLabel = action.payload;
    },
    setAmountPaid: (state, action) => {
      state.amountPaid = action.payload;
      recalculateInvoice(state);
    },
    setBalanceDueLabel: (state, action) => {
      state.balanceDueLabel = action.payload;
    },

    setTotalLabel: (state, action) => {
      state.totalLabel = action.payload;
    },
    setSubTotalLabel: (state, action) => {
      state.totalLabel = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
      recalculateInvoice(state);
    },
    setDiscountLabel: (state, action) => {
      state.discountLabel = action.payload;
    },
    setDiscountType: (state, action) => {
      state.discountType = action.payload;
      recalculateInvoice(state);
    },
    setTax: (state, action) => {
      state.tax = action.payload;
      recalculateInvoice(state);
    },
    setTaxLabel: (state, action) => {
      state.taxLabel = action.payload;
    },
    setTaxType: (state, action) => {
      state.taxType = action.payload;
      recalculateInvoice(state);
    },
    setShipping: (state, action) => {
      state.shipping = action.payload;
      recalculateInvoice(state);
    },
    setShippingLabel: (state, action) => {
      state.shippingLabel = action.payload;
    },
    setShippingType: (state, action) => {
      state.shippingType = action.payload;
      recalculateInvoice(state);
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});
const recalculateInvoice = (state) => {
  let subtotal = 0;
  state.invoiceItems.forEach((item) => {
    subtotal += item.amount;
  });

  let discountAmount = 0;
  if (state.discountType === "%") {
    discountAmount = (subtotal * state.discount) / 100;
  } else {
    discountAmount = state.discount;
  }

  let taxAmount = 0;
  if (state.taxType === "%") {
    taxAmount = ((subtotal - discountAmount) * state.tax) / 100;
  } else {
    taxAmount = state.tax;
  }

  let shippingAmount = 0;
  if (state.shippingType === "%") {
    shippingAmount =
      ((subtotal - discountAmount + taxAmount) * state.shipping) / 100;
  } else {
    shippingAmount = state.shipping;
  }

  const total = subtotal - discountAmount + taxAmount + shippingAmount;
  const balanceDue = total - (state.amountPaid || 0);

  state.subtotal = subtotal;
  state.total = total;
  state.balanceDue = balanceDue;
};
export const {
  addItem,
  removeItem,
  updateItem,
  setAmountPaidLabel,
  setAmountPaid,
  setBalanceDueLabel,
  setTotal,
  setTotalLabel,
  setSubTotal,
  setSubTotalLabel,
  setDiscount,
  setDiscountLabel,
  setDiscountType,
  setTax,
  setTaxLabel,
  setTaxType,
  setShipping,
  setShippingLabel,
  setShippingType,
  setCurrency,
} = itemsSlice.actions;
export default itemsSlice.reducer;
