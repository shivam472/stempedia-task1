import { createStore } from "redux";

const inputReducer = (state = { inputValue: "" }, action) => {
  if (action.type === "change") {
    return {
      inputValue: action.value,
    };
  }
  return state;
};

const store = createStore(inputReducer);

export default store;
