let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      firstName: "Artur",
      status: "Lorem asdas asd asd a",
      location: { country: "Ukraine", city: "Kiev" },
    },
    {
      id: 2,
      followed: false,
      firstName: "Artem",
      status: "ASD ASD ASD AD FASDFKJ",
      location: { country: "Ukraine", city: "Odessa" },
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

    default:
      return state;
  }
};

export let followAC = () => ({ type: FOLLOW, userId });
export let unfollowAC = (text) => ({
  type: UNFOLLOW,
  userId,
});

export default usersReducer;
