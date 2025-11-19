import axios from "axios";

export const getPostsReq = async () => await axios.get("/api/posts");

export const createPostReq = async (post) => {
  const form = new FormData();

  for (const key in post) {
    form.append(key, post[key]);
  }

  return await axios.post("/api/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePostReq = async (id) =>
  await axios.delete(`/api/posts/${id}`);

export const getPostReq = async (id) => await axios.get(`/api/posts/${id}`);

export const updatePostReq = async (id, values) => {
  const form = new FormData();

  for (const key in values) {
    form.append(key, values[key]);
  }

  return await axios.put(`/api/posts/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
