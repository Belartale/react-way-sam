// import renderApp from "../render";

let renderApp = () => {
	console.log("renderApp");
};

let state = {
	profilePage: {
		posts: [
			{ id: 1, likes: 12, message: "Lorem, ipsum dolor. I have 12 likes" },
			{
				id: 2,
				likes: 33,
				message: "Lorem ipsum dolor sit amet. And I have 33 likes too",
			},
		],
		newPostText: "asd11111111",
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
		newMessageText: "textttt",
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
};

export default state;

export let addPost = () => {
	let newPost = {
		id: 1,
		likes: 0,
		message: state.profilePage.newPostText,
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = "";
	renderApp(state);
	// renderApp();
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	renderApp(state);
	// renderApp();
};
//! ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export let addMessage = () => {
	let newMessage = {
		id: 3,
		message: state.dialogsPage.newMessageText,
	};
	state.dialogsPage.messageData.push(newMessage);
	state.profilePage.newMessageText = "";

	renderApp(state);
	// renderApp();
};

export let updateNewMessageText = (newText) => {
	state.dialogsPage.newMessageText = newText;
	renderApp(state);
	// renderApp();
};

export const subscribe = (observer) => {
	renderApp = observer;
};