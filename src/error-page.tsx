import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center text-white bg-orange-400 border rounded-md p-2 ">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-white">{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
