import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../../../../lib/queries";

const Todo = () => {
  // navigation hook for the "back button"
  const navigate = useNavigate();
  // params hook to get the id of the selected item from url
  let params = useParams();
  // reciving the required data through react-query
  const { data, isLoading } = usePost(params.todoId);

  // render information if data is avalable
  if (isLoading === false && data.data) {
    return (
      <div className="flex flex-col gap-8 ">
        <img
          src="/back.png"
          onClick={() => navigate(-1)}
          className="h-6 w-6 inline-block cursor-pointer"
        />
        <div className="bg-white p-4 rounded-md">
          <h1 className="font-bold text-3xl mb-4 text-blue-600">
            {data.data.title}
          </h1>
          <p className="font-bold font-mono text-lg">{data.data.body}</p>
        </div>
      </div>
    );
  } else if (isLoading === true) {
    // render a loading text to inform user of application's current state which is loading
    return (
      <>
        <h1 className="font-bold text-3xl mt-12">Loading...</h1>
      </>
    );
  } else {
    // rendering an error message in case anything went wrong during the dataFetch cycle
    return (
      <>
        <h1 className="font-bold text-3xl mt-12">
          Something went wrong, please try again later
        </h1>
      </>
    );
  }
};

export default Todo;
