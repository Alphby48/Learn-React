import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const eror = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry.., salah alamat bro...</p>
      <p className="text-2xl">{eror.statusText || eror.message}</p>
    </div>
  );
};
export default ErrorPage;
