export const initialState = {
  user: null,
};

export const actionAuthTypes = {
  GITHUB: 'GITHUB',
  GOOGLE: 'GOOGLE',
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionAuthTypes.GITHUB:
      return { ...state, user: action.user };
    case actionAuthTypes.GOOGLE:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
