let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE_POST";

let NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

export let store = {
  _state: {
    profileData: {
      posts: [
        { id: 1, likes: 12, message: "Lorem, ipsum dolor. I have 12 likes" },
        {
          id: 2,
          likes: 33,
          message: "Lorem ipsum dolor sit amet. And I have 33 likes too",
        },
      ],
      newPostText: "something text of new post",
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Artur" },
        { id: 2, name: "lorem" },
      ],

      messageData: [
        { id: 1, message: "Lorem, ipsum dolor111." },
        { id: 2, message: "Lorem ipsum dolor sit amet." },
      ],
      newMessageText: "something text of new message",
    },

    sideBar: {
      friends: [
        "Saha",
        "Andre",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lorem",
        "Lili",
      ],
    },
  },
  getState() {
    return this._state;
  },

  _callSubscribe() {
    console.log("renderApp!!!!!!!!!!!!!!!!!!!!!!!!");
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  addMessage() {
    let newMessage = {
      id: 3,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messageData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscribe(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscribe(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 1,
        likes: 0,
        message: this._state.profileData.newPostText,
      };
      this._state.profileData.posts.push(newPost);
      this._state.profileData.newPostText = "";
      this._callSubscribe(this._state);
    } else if (action.type === UPDATE_POST) {
      this._state.profileData.newPostText = action.textPost;
      this._callSubscribe(this._state);
    }
  },
};

export default store;

export let addTextActionCreator = (params) => ({ type: ADD_POST });

export let updataTextActionCreator = (text) => ({
  type: UPDATE_POST,
  textPost: text,
});
