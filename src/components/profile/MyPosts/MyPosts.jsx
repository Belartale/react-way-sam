import React from "react";
import Post from "./post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  // let addPost = (e) => {
  //   e.preventDefault();
  //   props.dispatchAction();
  // };

  // let onChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

  let onChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className="block">
      <form className="block" action="">
        <textarea
          ref={newPostElement}
          className="control"
          name=""
          id=""
          cols="30"
          rows="5"
          value={props.profilePage.newPostText}
          onChange={onChange}
        />
        <button className="control" onClick={props.addPost}>
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
