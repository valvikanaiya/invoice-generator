import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logo: null,
  invoiceName: "INVOICE",
  invoiceNumber: 1,
  invoiceDate: null,
  invoiceDateLabel: null,
  invoiceDueDate: null,
  invoiceDueDateLabel: null,
  paymentTerms: null,
  paymentTermsLabel: null,
  poNumber: null,
  poNumberLabel: null,
  billToLabel: "Bill To",
  shipToLabel: "Ship To",
  billTo: null,
  shipTo: null,
  form: null,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    setInvoiceName: (state, action) => {
      state.invoiceName = action.payload;
    },
    setInvoiceNumber: (state, action) => {
      state.invoiceNumber = action.payload;
    },
    setInvoicePaymentDetails: (state, action) => {
      const mewState = { ...state, ...action.payload };
      state = mewState;
      console.log(state);
    },
    setInvoiceFrom: (state, action) => {
      state.form = action.payload;
    },
    resetInvoice: (state, action) => {
      console.log("resetForm");
      state = initialState;
      console.log("resetForm", state);
    },
  },
});

export const {
  setLogo,
  setInvoiceName,
  setInvoiceNumber,
  setInvoicePaymentDetails,
  setInvoiceFrom,
  resetInvoice,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
