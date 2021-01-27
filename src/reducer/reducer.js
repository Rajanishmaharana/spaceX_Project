export const intialState = {
  filterValue: {},
  isLoading:false
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      return { ...state, filterValue: {...action.value }};

    case "LODER_ON":
     return {...state,isLoading:true}  ;

     case "LODER_OFF":
      return {...state,isLoading:false};
  }
}

export default reducer;