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
      console.log(action.user);
      return state;
    default:
      return state;
  }
};
