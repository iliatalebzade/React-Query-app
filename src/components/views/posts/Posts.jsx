import { Link } from "react-router-dom";
import { usePosts } from "../../../lib/queries";

const Posts = () => {
  const { data, isLoading } = usePosts();

  if (isLoading === false && data.data) {
    return (
      <div className="flex flex-col gap-8 ">
        <h1 className="font-bold text-3xl">Posts</h1>
        {data.data.map((post, index) => (
          <Link
            key={index}
            to={`/posts/${post.id}`}
            className="w-full p-4 py-8 rounded-md text-lg font-semibold bg-white border-2 border-white hover:border-blue-600 hover:text-blue-600"
          >
            <h1>{post.title}</h1>
          </Link>
        ))}
      </div>
    );
  } else if (isLoading === true) {
    return (
      <>
        <h1 className="font-bold text-3xl mt-12">Loading...</h1>
      </>
    );
  } else {
    return (
      <>
        <h1 className="font-bold text-3xl mt-12">
          Something went wrong, please try again later
        </h1>
      </>
    );
  }
};

export default Posts;
