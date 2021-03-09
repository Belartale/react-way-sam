let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      firstName: "Artur",
      status: "Lorem asdas asd asd a",
      location: { country: "Ukraine", city: "Kiev" },
      photo: "",
    },
    {
      id: 2,
      followed: false,
      firstName: "Artem",
      status: "ASD ASD ASD AD FASDFKJ",
      location: { country: "Ukraine", city: "Odessa" },
      photo: "",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  // let stateCopy;

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
