import React, { useState } from "react";
import { parseISO } from "date-fns";
import { formatDistance } from "date-fns/esm";
export default function CommentCard({
  _id,
  like,
  createdAt,
  message,
  updatePost,
  commentData,
  userId,
  postId,
  name,
}) {
  console.log(name);
  // state
  const [edit, setEdit] = useState(false);
  const [editedInput, setEditedInput] = useState(message || "");
  // is Comment liked by user
  const isCommentLiked = like.includes(userId);
  // on Comment like
  const onCommentLike = () => {
    const updatedComments = commentData.filter((el) => {
      if (el._id === _id) {
        el.like = isCommentLiked
          ? el.like.filter((el) => el != userId)
          : [...el.like, userId];
      }
      return el;
    });
    updatePost.mutate({
      id: postId,
      data: { comment: updatedComments },
    });
  };

  // on Commment Edit
  const onCommentEdit = () => {
    if (!editedInput) return;
    const updatedComments = commentData.filter((el) => {
      if (el._id === _id) {
        el.message = editedInput;
      }
      return el;
    });
    updatePost.mutate({
      id: postId,
      data: { comment: updatedComments },
    });
    setEdit(false);
  };

  // on Comment Delete
  const onCommentDelete = () => {
    const updatedComments = commentData.filter((el) => el._id !== _id);

    updatePost.mutate({
      id: postId,
      data: { comment: updatedComments },
    });
  };

  // main return
  return (
    <div className="flexCenter commentSec">
      <img
        className="profile"
        src="/assets/images/profile.jpeg"
        alt="profile"
      />
      <div className="message">
        <div className="flexBetweenCenter">
          <h3>{name}</h3>
          <p>{formatDistance(new Date(), parseISO(createdAt))} ago</p>
        </div>
        <h5>Professional-Student</h5>
        {edit ? (
          <form onSubmit={onCommentEdit}>
            <input
              className="editInput"
              type="text"
              value={editedInput}
              onChange={(e) => setEditedInput(e.target.value)}
              autoFocus
            />
          </form>
        ) : (
          <h4>{message}</h4>
        )}
        <div className="flexCenter commentActions">
          <div className="item">{like.length} Likes</div>
          <button onClick={onCommentLike}>
            <img
              src={
                isCommentLiked
                  ? "/assets/images/heart-like.svg"
                  : "/assets/images/heart.svg"
              }
              alt="heart"
            ></img>
            <span>Like</span>
          </button>
          <button onClick={() => setEdit((prev) => !prev)}>
            <img src="/assets/images/edit.svg" alt="edit"></img>
            <span>Edit</span>
          </button>
          <button onClick={onCommentDelete}>
            <img src="/assets/images/trash.svg" alt="trash"></img>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
