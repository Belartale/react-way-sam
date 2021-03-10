let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      console.log("action.users", action.users);
      setTimeout(() => {
        console.log("state", JSON.stringify(state));
      }, 100);
      return { ...state, users: [...state.users, action.users] };

    default:
      return state;
  }
};

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export let setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
