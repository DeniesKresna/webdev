import {PostModel} from '../models/post.mjs'

export const getAllPostsRepo = async () => {
    return await PostModel.find()
}

export const addPostRepo = async (postData) => {
    const newPost = new PostModel(postData)
    return await newPost.save()
}

export const updatePostByIdRepo = async (id, updateData) => {
  return await PostModel.findByIdAndUpdate(id, updateData, { new: true });
};

export const deletePostByIdRepo = async (id) => {
  return await PostModel.findByIdAndDelete(id);
};