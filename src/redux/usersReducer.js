let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default: {
      return state;
    }
  }
};

export let follow = (userId) => ({ type: FOLLOW, userId });
export let unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export let setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export let setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  newCurrentPage: page,
});
export let setUsersTotalCount = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  newTotalCount: totalCount,
});
export let toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export let toggleIsFollowingProgress = (params) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: params.isFetching,
  userId: params.userId,
});

export const getUsersThunkCreator = () => {
  dispatch(toggleIsFetching(true));
  userAPI
    .getUsers({
      currentPage: this.props.currentPage,
      pageSize: this.props.pageSize,
    })
    .then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
};
export default usersReducer;
