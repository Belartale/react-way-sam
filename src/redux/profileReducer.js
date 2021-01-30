let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE_POST";

const profileReducer = (state, action) => {
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

  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 1,
  //     likes: 0,
  //     message: state.newPostText,
  //   };
  //   state.posts.push(newPost);
  //   state.newPostText = "";
  // } else if (action.type === UPDATE_POST) {
  //   state.newPostText = action.textPost;
  // }

  // return state;
};

export let addTextActionCreator = (params) => ({ type: ADD_POST }); // "ADD-POST"
export let updataTextActionCreator = (text) => ({
  type: UPDATE_POST,
  textPost: text,
});

export default profileReducer;
