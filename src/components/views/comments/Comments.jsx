import { Link } from "react-router-dom";
import { useComments } from "../../../lib/queries";

const Comments = () => {
  // const { data, isLoading } = useQuery(["comments"], getComments);
  const { data, isLoading } = useComments();

  if (isLoading === false && data.data) {
    return (
      <div className="flex flex-col gap-8 ">
        <h1 className="font-bold text-3xl">Comments</h1>
        {data.data.map((post, index) => (
          <Link
            to={`/comments/${post.id}`}
            href="#"
            className="w-full p-4 py-8 rounded-md text-lg font-semibold bg-white border-2 border-white hover:border-blue-600 hover:text-blue-600"
          >
            <h1>{post.name}</h1>
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

export default Comments;
