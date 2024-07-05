import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import invoiceReducer from "./slices/invoice";
import invoiceItemReducer from "./slices/invoiceItem";
// const invoicePersistConfig = {
//   key: "invoice",
//   storage,
//   blacklist: ["_persist"],
// };

const rootReducer = combineReducers({
  invoice: invoiceReducer,
  billing: invoiceItemReducer,
  //   invoice: persistReducer(invoicePersistConfig, invoiceReducer),
});

export default rootReducer;
