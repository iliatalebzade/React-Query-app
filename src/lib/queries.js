import { useQuery } from "@tanstack/react-query";
import {
  getComments,
  getPosts,
  getSingleComment,
  getSinglePost,
  getSingleTodo,
  getTodos,
} from "./api";

//posts
export const usePosts = () => useQuery(["posts"], getPosts);
export const usePost = (postId) => useQuery(["post", postId], getSinglePost);

// comments
export const useComments = () => useQuery(["comments"], getComments);
export const useComment = (commentId) =>
  useQuery(["comment", commentId], getSingleComment);

// todos
export const useTodos = () => useQuery(["todos"], getTodos);
export const useTodo = (todoId) => useQuery(["todo", todoId], getSingleTodo);
