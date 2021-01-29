let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE_POST";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 1,
      likes: 0,
      message: state.newPostText,
    };
    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_POST) {
    state.newPostText = action.textPost;
  }

  return state;
};

export default profileReducer;
