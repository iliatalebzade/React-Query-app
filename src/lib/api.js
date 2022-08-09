import axios from "axios";

// posts
export const getPosts = async () => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return posts;
  } catch (err) {
    return err;
  }
};
export const getSinglePost = async (params) => {
  const postId = params.queryKey[1];
  try {
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return posts;
  } catch (err) {
    return err;
  }
};

// comments
export const getComments = async () => {
  try {
    const comments = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return comments;
  } catch (err) {
    return err;
  }
};

export const getSingleComment = async (params) => {
  const commentId = params.queryKey[1];
  try {
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );
    return posts;
  } catch (err) {
    return err;
  }
};

// Todos
export const getTodos = async () => {
  try {
    const todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return todos;
  } catch (err) {
    return err;
  }
};

export const getSingleTodo = async (params) => {
  const todoId = params.queryKey[1];
  try {
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    return posts;
  } catch (err) {
    return err;
  }
};
