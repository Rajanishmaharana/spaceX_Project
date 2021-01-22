export const intialState = {
  filterValue: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      return { ...state, filterValue: {...action.value }};
  }
}

export default reducer;