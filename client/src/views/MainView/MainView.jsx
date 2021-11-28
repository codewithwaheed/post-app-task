import React from "react";
import AddPost from "../../components/post/AddPost";
import PostView from "../../components/post/PostView";
import "../../assets/css/mainView.css";
export default function landingPage() {
  // main return
  return (
    <div className="landingPageWrapper">
      <AddPost />
      <PostView />
    </div>
  );
}
