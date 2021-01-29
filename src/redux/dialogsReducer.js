let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_MESSAGE = "NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  if (action.type === UPDATE_MESSAGE) {
    state.newMessageText = action.textPost;
  } else if (action.type === SEND_MESSAGE) {
    let text = state.newMessageText;
    state.newMessageText = "";
    state.messageData.push({
      id: 3,
      message: text,
    });
  }

  return state;
};

export default dialogsReducer;
