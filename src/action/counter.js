import { DECREMENT, INCREMENT } from "../store/constans/counter";
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => ({
  type: DECREMENT,
});
