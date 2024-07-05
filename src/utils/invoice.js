export const invoicePymentDetails = [
  {
    type: "date",
    labelName: "invoiceDateLabel",
    inputName: "invoiceDate",
  },
  {
    type: "text",
    labelName: "paymentTermsLabel",
    inputName: "paymentTerms",
  },
  {
    type: "date",
    labelName: "invoiceDueDateLabel",
    inputName: "invoiceDueDate",
  },
  {
    type: "text",
    labelName: "poNumberLabel",
    inputName: "poNumber",
  },
];

export const initialInvoiceLabelData = {
  invoiceDateLabel: "Date",
  paymentTermsLabel: "Payment Terms",
  invoiceDueDateLabel: "Due Date",
  poNumberLabel: "PO Number",
};

export const intialInvocePymentData = {
  invoiceDate: "",
  paymentTerms: "",
  invoiceDueDate: "",
  poNumberLabel: "",
  poNumber: "",
};

export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  { code: "MXN", symbol: "$", name: "Mexican Peso" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
  { code: "KRW", symbol: "₩", name: "South Korean Won" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira" },
  { code: "RUB", symbol: "₽", name: "Russian Ruble" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
];
