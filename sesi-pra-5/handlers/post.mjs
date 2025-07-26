import { addPost, deletePost, getPosts, updatePost } from "../usecases/post.mjs";

export const getAllPostHandler = async (req, res) => {
    try {
        const result = await getPosts()
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "failed get posts"
        })
    }
}

export const addPostHandler = async (req, res) => {
    //2025-07-25T12:00:00.000+00:00
    try {
        const payload = req.body
        const result = await addPost(payload)
        res.status(200).json({
            success: true,
            data: result,
            message: "success"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "failed add posts"
        })
    }
}

export const updatePostHandler = async (req, res) => {
  try {
    const updated = await updatePost(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.json({
      success: true,
      message: "Post updated successfully"
    });
  } catch (error) {
        console.log(error)
    res.status(500).json({ success: false, message: "Failed to update post" });
  }
};

// [DELETE] /posts/:id
export const deletePostHandler = async (req, res) => {
  try {
    const deleted = await deletePost(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.json({
      success: true,
      message: "Post deleted successfully"
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to delete post" });
  }
};