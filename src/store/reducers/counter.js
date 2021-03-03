import { DECREMENT, INCREMENT } from "../constans/counter";
const counter = (state = 1, action = {}) => {
  switch (action.type) {
    case DECREMENT:
      if (state < 1) return 0;
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default counter;
