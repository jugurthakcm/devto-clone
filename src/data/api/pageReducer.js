export const initialPage = { page: 1 };

export const actionTypes = {
  CHANGE_PAGE: 'CHANGE_PAGE',
};

export const pageReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE:
      return { ...state, page: action.page };

    default:
      return state;
  }
};
