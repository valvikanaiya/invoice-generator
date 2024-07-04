import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "invoiceItems",
  initialState: [
    {
      id: new Date().toLocaleString(),
      itemName: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
  ],
  reducers: {
    addItem: (state) => {
      state.push({
        id: new Date().toLocaleString(),
        itemName: "",
        quantity: 1,
        rate: 0,
        amount: 0,
      });
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { index, field, value } = action.payload;
      const item = state[index];
      item[field] = value;
      if (field === "quantity" || field === "rate") {
        item.amount =
          field === "quantity" ? value * item.rate : item.quantity * value;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
