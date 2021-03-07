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
  // let stateCopy;

  switch (action.type) {
    case SEND_MESSAGE:
      // let stateCopy = { ...state };

      return {
        ...state,
        messageData: [
          ...state.messageData,
          {
            id: 3,
            message: state.newMessageText,
          },
        ],
        newMessageText: "",
      };

    // return stateCopy;

    case UPDATE_MESSAGE: {
      return {
        ...state,
        newMessageText: action.textDialog,
      };

      // return stateCopy;
      // return state;
    }

    default:
      return state;
  }
};

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE }); // "ADD-POST"
export let updataMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE,
  textDialog: text,
});

export default dialogsReducer;
