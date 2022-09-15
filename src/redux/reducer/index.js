const reducer = (state = {}, action) => {
  switch (action.type) {
    case "CURRENCIES_FETCHED":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
