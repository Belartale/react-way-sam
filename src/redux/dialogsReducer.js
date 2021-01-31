let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_MESSAGE = "NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Artur" },
    { id: 2, name: "lorem" },
  ],

  messageData: [
    { id: 1, message: "Lorem, ipsum dolor111." },
    { id: 2, message: "Lorem ipsum dolor sit amet." },
  ],
  newMessageText: "something text of new message",
};

const dialogsReducer = (state = initialState, action) => {
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
