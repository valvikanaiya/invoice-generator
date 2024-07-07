import { createSlice } from "@reduxjs/toolkit";
const defaultState = JSON.parse(localStorage.getItem("invoice"));

const initialState = {
  logo: "",
  invoiceName: "INVOICE",
  invoiceNumber: 1,
  invoiceDate: "",
  invoiceDateLabel: "Date",
  invoiceDueDate: "",
  invoiceDueDateLabel: "Due Date",
  paymentTerms: "",
  paymentTermsLabel: "Payment Terms",
  poNumber: "",
  poNumberLabel: "PO Number",
  billToLabel: "Bill To",
  shipToLabel: "Ship To",
  billTo: "",
  shipTo: "",
  form: "",
  notesLabel: "Notes",
  notes: "",
  termsLabel: "Terms",
  terms: "",
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: defaultState || initialState,
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
    setDate: (state, action) => {
      state.invoiceDate = action.payload;
    },
    setDateLabel: (state, action) => {
      state.invoiceDateLabel = action.payload;
    },
    setPaymentTerms: (state, action) => {
      state.paymentTerms = action.payload;
    },
    setPaymentTermsLabel: (state, action) => {
      state.paymentTermsLabel = action.payload;
    },
    setInvoiceDueDate: (state, action) => {
      state.invoiceDueDate = action.payload;
    },
    setInvoiceDueDateLabel: (state, action) => {
      state.invoiceDueDateLabel = action.payload;
    },
    setPoNumber: (state, action) => {
      state.poNumber = action.payload;
    },
    setPoNumberLabel: (state, action) => {
      state.poNumberLabel = action.payload;
    },
    setBillTo: (state, action) => {
      state.billTo = action.payload;
    },
    setBillToLabel: (state, action) => {
      state.billToLabel = action.payload;
    },
    setShipTo: (state, action) => {
      state.shipTo = action.payload;
    },
    setShipToLabel: (state, action) => {
      state.shipToLabel = action.payload;
    },
    setInvoiceFrom: (state, action) => {
      state.form = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setNotesLabel: (state, action) => {
      state.notesLabel = action.payload;
    },
    setTerms: (state, action) => {
      state.terms = action.payload;
    },
    setTermsLabel: (state, action) => {
      state.termsLabel = action.payload;
    },

    resetInvoice: (state, action) => {
      state = initialState;
    },
  },
});

export const {
  setLogo,
  setInvoiceName,
  setInvoiceNumber,
  setDate,
  setDateLabel,
  setPaymentTerms,
  setPaymentTermsLabel,
  setInvoiceDueDate,
  setInvoiceDueDateLabel,
  setPoNumber,
  setPoNumberLabel,
  setBillTo,
  setBillToLabel,
  setShipTo,
  setShipToLabel,
  setNotes,
  setNotesLabel,
  setTerms,
  setTermsLabel,
  setInvoiceFrom,
  resetInvoice,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
