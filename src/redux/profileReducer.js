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
      let newPost = {
        id: 1,
        likes: 0,
        message: state.newPostText,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_POST:
      state.newPostText = action.textPost;
      return state;

    default:
      return state;
  }
};

export let addTextActionCreator = (params) => ({ type: ADD_POST }); // "ADD-POST"
export let updataTextActionCreator = (text) => ({
  type: UPDATE_POST,
  textPost: text,
});

export default profileReducer;
