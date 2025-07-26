import { addPostRepo, deletePostByIdRepo, getAllPostsRepo, updatePostByIdRepo } from "../repositories/post.mjs";

export const getPosts = async () => {
    return await getAllPostsRepo();
}

export const addPost = async (postModel) => {
    return await addPostRepo(postModel);
}

export const updatePost = async (id, updateData) => {
  return await updatePostByIdRepo(id, updateData);
};

export const deletePost = async (id) => {
  return await deletePostByIdRepo(id);
};