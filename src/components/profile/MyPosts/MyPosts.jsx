import React from "react";
import Post from "./post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let onChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let elementsPosts = props.profilePage.posts.map((post) => (
    <Post key={post.id} message={post.message} likes={post.likes} />
  ));

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
        {/* <Post postData={props.profilePage.posts} /> */}
        {elementsPosts}
      </div>
    </div>
  );
};

export default MyPosts;
