import Post from "../models/post.model.js";
import cloudinary from "../libs/cloudinary.js";
import fs from 'fs-extra'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const newPostData = { title, description };

    if (req.files?.image) {
      if (!req.files.image.mimetype.startsWith("image/")) {
        return res.status(400).json({ message: "File must be an image" });
      }

      const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        { folder: "posts" }
      );
      await fs.remove(req.files.image.tempFilePath)

      newPostData.image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const newPost = await new Post(newPostData).save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const { title, description } = req.body;
    const updateData = { title, description };

    if (req.files?.image  && req.files.image.size > 0) {
      if (!req.files.image.mimetype.startsWith("image/")) {
        return res.status(400).json({ message: "File must be an image" });
      }

      if (post.image?.public_id) {
        await cloudinary.uploader.destroy(post.image.public_id);
      }

      const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        folder: "posts",
      });

      await fs.remove(req.files.image.tempFilePath);

      updateData.image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (deletedPost.image?.public_id) {
      await cloudinary.uploader.destroy(deletedPost.image.public_id)
    }

    res.json({ message: "Post Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
