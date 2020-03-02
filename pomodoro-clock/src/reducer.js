import { initialState } from "./store.js";
import * as Actions from "./actionNames";
import formatMinSec from "./resources/formatMinSec";
import Store from "./store";
import accurateInterval from "accurate-interval";

const reducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case Actions.DECREMENT:
      console.log("in decrement case");
      if (
        action.valueToDecrement == Actions.breakBlock &&
        state.breakLength > 1
      )
        newState = {
          ...state,
          breakLength: state.breakLength - 1,
          currentTime: state.isSessionTimerActive
            ? state.currentTime
            : state.currentTime - 60,
          timeToDisplay: state.isSessionTimerActive
            ? formatMinSec(state.currentTime)
            : formatMinSec(state.currentTime - 60)
        };
      else if (
        action.valueToDecrement == Actions.sessionBlock &&
        state.sessionLength > 1
      )
        newState = {
          ...state,
          sessionLength: state.sessionLength - 1,
          currentTime: state.isSessionTimerActive
            ? state.currentTime - 60
            : state.currentTime,
          timeToDisplay: state.isSessionTimerActive
            ? formatMinSec(state.currentTime - 60)
            : formatMinSec(state.currentTime)
        };
      else if (
        action.valueToDecrement == Actions.timeLeft &&
        state.currentTime > 0
      ) {
        newState = {
          ...state,
          currentTime: state.currentTime - 1,
          timeToDisplay: formatMinSec(state.currentTime - 1)
        };
        console.log("in timeLeft decrement");
      } else if (
        action.valueToDecrement == Actions.timeLeft &&
        state.currentTime == 0
      )
        newState = {
          ...state,
          isSessionTimerActive: !state.isSessionTimerActive,
          currentTime: state.isSessionTimerActive
            ? state.breakLength * 60
            : state.sessionLength * 60
        };
      return newState;
    case Actions.INCREMENT:
      if (
        action.valueToIncrement == Actions.breakBlock &&
        state.breakLength < 60
      )
        newState = { ...state, breakLength: state.breakLength + 1 };
      else if (
        action.valueToIncrement == Actions.sessionBlock &&
        state.sessionLength < 60
      )
        newState = { ...state, sessionLength: state.sessionLength + 1 };
      return newState;
    case Actions.RESET:
      if (state.isTimerRunning)
        state.accurateInterval && state.accurateInterval.clear();
      return initialState;
    case Actions.STARTSTOP:
      if (state.isTimerRunning) {
        state.accurateInterval && state.accurateInterval.clear();
        newState = {
          ...state,
          timeToDisplay: formatMinSec(state.currentTime),
          isTimerRunning: false
        };
      } else {
        let interval = accurateInterval(scheduledTime => {
          console.log("in interval function");
          Store.dispatch({
            type: Actions.DECREMENT,
            valueToDecrement: Actions.timeLeft
          });
        }, 1000);
        newState = {
          ...state,
          accurateInterval: interval,
          isTimerRunning: true
        };
      }
      console.log("time is running?: " + newState.isTimerRunning);
      return newState;
    default:
      return state;
  }
};

export default reducer;
