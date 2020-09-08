const initialState = {
  name: "ramu",
  age: 26,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GIVE_ADDRESS":
      return {
        ...state,
        city: action.city,
      };
    case "GIVE_NAME":
      return Object.assign({}, state, {
        name: action.name,
        job: action.job,
        age: action.age,
      });
    default:
      return state;
  }
};

export default reducer;
