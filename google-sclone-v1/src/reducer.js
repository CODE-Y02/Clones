export const initialState = {
  term: null,
  // this term is our search term--> in simple words state of searched keyword and with null as its initial value
};

// action type is used to modify state based on condn just like i want to filter search based on categories like news , img ,etc
// action type only contain action types , modification is done using reducer based on action type
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//this is modifing state based on action
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      // here we are returning obj as initial state is obj , ...state --> keep previous as it is just change the term
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
