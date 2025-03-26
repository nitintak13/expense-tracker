const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_LIST":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_LIST":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
export default AppReducer;
