import * as Actions from "./actionNames.js";
import { initialState } from "./store.js";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.DRUMHIT:
      let updatedDisplayText = action.text;
      return {
        ...state,
        displayText: updatedDisplayText
      };
    default:
      return state;
  }
};

export default rootReducer;
