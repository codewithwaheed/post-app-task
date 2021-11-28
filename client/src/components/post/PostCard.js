import React, { useState } from "react";
import { formatDistance, parseISO } from "date-fns";
import { updatePostById } from "../../api";
import useUpdateQueryItem from "../../hooks/useUpdateQueryItem";
import Comments from "../comment/Comment";
export default function PostCard({
  title,
  like,
  comment,
  createdAt,
  userId,
  userData,
  _id,
}) {
  // show comment state to render comment sec
  const [showComments, setShowComments] = useState(false);
  // is post liked
  const isLiked = like.includes(userId);

  // user name
  const { firstName, lastName } = userData;
  const name = `${firstName} ${lastName}`;

  // mutaion hook for update post
  const updatePost = useUpdateQueryItem(["posts", userId], updatePostById);

  //  on like fun
  const onLike = () => {
    const postData = {
      id: _id,
      data: {
        like: isLiked ? like.filter((el) => el != userId) : [...like, userId],
      },
    };
    updatePost.mutate(postData);
  };
  // main return
  return (
    <div className="post">
      <div className="content">
        <div className="head">
          <div className="profile">
            <img
              src="/assets/images/profile.jpeg"
              alt="profile"
              className="cover"
            ></img>
            <div className="right">
              <h3>{name}</h3>
              <div className="flexCenter">
                <img src="/assets/images/marker.svg"></img>
                <span>OH , USA</span>
              </div>
              <p>{formatDistance(new Date(), parseISO(createdAt))} ago</p>
            </div>
          </div>
          <img
            src="/assets/images/moreIcon.svg"
            alt="moreIcon"
            className="pointer"
          ></img>
        </div>
        <h1>{title}</h1>
        <div className="counter">
          <h5>{like.length} Likes</h5>
          <span>.</span>
          <h5>{comment.length} comments</h5>
        </div>
      </div>
      <div className="footer">
        <div className="action">
          <div onClick={onLike} className="flexCenter">
            <img
              src={
                isLiked
                  ? "/assets/images/heart-like.svg"
                  : "/assets/images/heart.svg"
              }
              alt="heart"
            ></img>
            <span>Like</span>
          </div>
          <div
            onClick={() => setShowComments((prev) => !prev)}
            className="flexCenter"
          >
            <img src="/assets/images/comment.svg" alt="heart"></img>
            <span>Comment</span>
          </div>
        </div>
        <Comments
          view={showComments}
          commentData={comment}
          userId={userId}
          updatePost={updatePost}
          postId={_id}
          name={name}
        />
      </div>
    </div>
  );
}
