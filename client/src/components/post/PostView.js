import React from "react";
import PostCard from "./PostCard";
import { useQuery } from "react-query";
import { getAllPostByUser } from "../../api";
import Loader from "../common/Loader";
export default function PostView() {
  //   static dummy userId
  const userId = "61a2641458c1d4456e460861";
  const { data, isLoading } = useQuery(["posts", userId], getAllPostByUser);

  //   console.log(data, "data");

  const postData = data?.data?.data;

  // main return
  return (
    <section className="postWrapper">
      {isLoading && <Loader />}
      {isLoading ||
        postData.map((item) => {
          return <PostCard key={item?._id} {...item} userId={userId} />;
        })}
    </section>
  );
}
