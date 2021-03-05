let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE_POST";

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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let stateCopy = { ...state };

      let newPost = {
        id: 1,
        likes: 0,
        message: state.newPostText,
      };

      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;

    case UPDATE_POST: {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = action.textPost;
      return stateCopy;
    }
    default:
      return state;
  }
};

export let addTextActionCreator = () => ({ type: ADD_POST }); // "ADD-POST"
export let updataTextActionCreator = (text) => ({
  type: UPDATE_POST,
  textPost: text,
});

export default profileReducer;
