import React from "react";
import Post from "./post/Post";
import {
  addTextActionCreator,
  updataTextActionCreator,
} from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = (e) => {
    e.preventDefault();
    // props.addPost();
    props.dispatch(addTextActionCreator());
  };

  let onChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch(updataTextActionCreator(text));
  };

  return (
    <div className="block">
      <form className="block" action="">
        <textarea
          className="control"
          value={props.profilePage.newPostText}
          ref={newPostElement}
          onChange={onChange}
          name=""
          id=""
          cols="30"
          rows="5"
        />
        <button className="control" onClick={addPost}>
          <p className="caption--size_3">Отправить</p>
        </button>
      </form>
      <div>
        <Post postData={props.profilePage.posts} />
      </div>
    </div>
  );
};

export default MyPosts;
