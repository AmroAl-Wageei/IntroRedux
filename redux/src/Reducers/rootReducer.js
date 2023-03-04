const intialState = {
  count: 0,
  name: "Sana",
  age: 26,
  location: "Amman",
};

const rootReducer = (state = intialState, action) => {
  if (action.type === "INCREASE") {
    return { count: state.count + 5 };
  } else if (action.type === "DECRESE") {
    return { count: state.count - 5 };
  }
  return state;
};

export default rootReducer;
