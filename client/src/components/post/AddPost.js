import React, { useState } from "react";
import { addPost } from "../../api";
import useNewItemMutation from "../../hooks/useNewItemMutation";

export default function AddPost() {
  // state
  const [message, setMessage] = useState("");

  //   static dummy userId of a user in database
  const userId = "61a2641458c1d4456e460861";

  const addPostFun = useNewItemMutation(["posts", userId], addPost);

  // on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    const postData = {
      _id: Math.floor(Math.random() * 100),
      title: message,
      user: userId,
      content: "",
      createdAt: new Date().toISOString(),
      like: [],
      comment: [],
    };
    addPostFun.mutate(postData);
    setMessage("");
  };

  // main return
  return (
    <form onSubmit={onSubmit} className="addPost">
      <div className="head">
        <div className="circle">
          <img src="/assets/images/profile.jpeg" alt="profile"></img>
        </div>
        <h1>What is on your mind ?</h1>
      </div>
      <input
        type="text"
        className="messageInput"
        value={message}
        placeholder="Start writing from here ..."
        onChange={(e) => setMessage(e.target.value)}
        autoFocus
      ></input>
      <div className="footer">
        <button type="button" className="photoBtn">
          <img src="/assets/images/pictureIcon.png" alt="icon"></img>
          <span>Photo/Video</span>
        </button>
        <button disabled={message === ""} className="postBtn" type="submit">
          Post it
        </button>
      </div>
    </form>
  );
}
