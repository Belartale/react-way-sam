let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_MESSAGE = "NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      state.newMessageText = action.textPost;
      return state;

    case SEND_MESSAGE:
      let text = state.newMessageText;
      state.newMessageText = "";
      state.messageData.push({
        id: 3,
        message: text,
      });
      return state;

    default:
      return state;
  }

  // if (action.type === UPDATE_MESSAGE) {
  //   state.newMessageText = action.textPost;
  // } else if (action.type === SEND_MESSAGE) {
  //   let text = state.newMessageText;
  //   state.newMessageText = "";
  //   state.messageData.push({
  //     id: 3,
  //     message: text,
  //   });
  // }

  // return state;
};

export let sendMessageActionCreator = (params) => ({ type: SEND_MESSAGE }); // "ADD-POST"
export let updataMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE,
  textPost: text,
});

export default dialogsReducer;
