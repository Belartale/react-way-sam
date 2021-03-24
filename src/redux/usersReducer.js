let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.newCurrentPage };
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.newTotalCount };
    }
    default: {
      return state;
    }
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
export let setCurrentPageAC = (page) => ({
  type: SET_CURRENT_PAGE,
  newCurrentPage: page,
});
export let setUsersTotalCountAC = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  newTotalCount: totalCount,
});
export default usersReducer;
