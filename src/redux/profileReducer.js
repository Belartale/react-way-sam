let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE_POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, likes: 12, message: "Lorem, ipsum dolor. I have 12 likes" },
    {
      id: 2,
      likes: 33,
      message: "Lorem ipsum dolor sit amet. And I have 33 likes too",
    },
  ],
  newPostText: "something text of new post",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 3,
            likes: 0,
            message: state.newPostText,
          },
        ],
        newPostText: "",
      };

    case UPDATE_POST: {
      return {
        ...state,
        posts: [...state.posts],
        newPostText: action.textPost,
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    default:
      return state;
  }
};

export let addTextActionCreator = () => ({ type: ADD_POST });
export let updateTextActionCreator = (text) => ({
  type: UPDATE_POST,
  textPost: text,
});

export let setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});

export default profileReducer;
