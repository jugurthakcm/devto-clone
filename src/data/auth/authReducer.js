export const initialState = {
  user: null,
};

export const actionAuthTypes = {
  GITHUB: 'GITHUB',
  TWITTER: 'TWITTER',
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionAuthTypes.GITHUB:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
