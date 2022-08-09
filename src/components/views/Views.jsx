import { Route, Routes } from "react-router-dom";
import Todos from "./todos/Todos";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";
import Home from "./home/Home";
import Comment from "./comments/comment/Comment";
import Todo from "./todos/todo/Todo";
import Post from "./posts/post/Post";

const Views = () => {
  return (
    <div className="overflow-y-scroll w-full h-screen p-12">
      <Routes>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<Post />} />
        <Route path="comments" element={<Comments />} />
        <Route path="comments/:commentId" element={<Comment />} />
        <Route path="todos" element={<Todos />} />
        <Route path="todos/:todoId" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default Views;
