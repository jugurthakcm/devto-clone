export const initialSearch = { search: '' };

export const actionTypesSearch = {
  SEARCH: 'SEARCH',
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case actionTypesSearch.SEARCH:
      return { ...state, search: action.search };

    default:
      return state;
  }
};
