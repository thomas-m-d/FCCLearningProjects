import { createStore } from "redux";
import rootReducer from "./rootReducer";

export const initialState = {
  displayText: "TestInStore"
};

const Store = createStore(rootReducer);
export default Store;
