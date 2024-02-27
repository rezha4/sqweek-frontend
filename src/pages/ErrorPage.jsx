import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center h-screen flex flex-col gap-2 justify-center items-center">
        <h1 className="text-xl">Quack! Sorry, an error occured.</h1>
        <p>
          <i>{JSON.stringify(error)}</i>
        </p>
        <Link to={"/"} className="link link-primary mt-2">Go back home</Link>
    </div>
  );
};

export default ErrorPage;
