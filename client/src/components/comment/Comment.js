import React, { useState } from "react";
import CommentCard from "./CommentCard";

export default function CommentView({
  view,
  commentData,
  userId,
  updatePost,
  postId,
}) {
  // state
  const [comment, setComment] = useState("");

  // on Comment submit
  const onCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment) return;

    const newComment = {
      message: comment,
      _id: Math.floor(Math.random() * 100),
      createdAt: new Date().toISOString(),
      like: [],
    };

    updatePost.mutate({
      id: postId,
      data: { comment: [...commentData, newComment] },
    });
    setComment("");
  };

  // main return
  return (
    <div className={view ? "comment show" : "comment"}>
      <form onSubmit={onCommentSubmit} className="addComment">
        <img
          className="profile"
          src="/assets/images/profile.jpeg"
          alt="profile"
        />
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          autoFocus
        />
      </form>
      {commentData.length > 0 &&
        commentData.map((item) => {
          return (
            <CommentCard
              {...item}
              updatePost={updatePost}
              userId={userId}
              postId={postId}
              commentData={commentData}
            />
          );
        })}
    </div>
  );
}
