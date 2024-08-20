import { createStore } from "redux";
const initialState = {
  name: "",
  mobile: null,
  balance: 0,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + + action.paylaod };
    case "withdraw":
      return { ...state, balance: state.balance - + action.paylaod };
    case "nameUpdate":
      return { ...state, name: action.paylaod };
    case "numberUpdate":
      return { ...state, mobile: action.paylaod };
      case "reset":
        return initialState
    default:
        return state;
  }
}
  const store = createStore (accountReducer)
  
  

export default store
