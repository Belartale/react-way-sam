let SET_AUTH_USER = "SET_AUTH_USER";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        ...action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export let setUserData = (userId, email, login) => ({
  type: SET_AUTH_USER,
  data: { userId, email, login },
});

export default authReducer;
