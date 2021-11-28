import AxiosBase from "../config/AxiosBase";

export const getAllPostByUser = ({ queryKey }) => {
  return AxiosBase.get(`/user/${queryKey[1]}/posts`);
};
export const addPost = (data) => {
  return AxiosBase.post("/post", data);
};
export const updatePostById = ({ id, data }) => {
  return AxiosBase.patch(`/post/${id}`, data);
};
