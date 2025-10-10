const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/assets/error.png" alt="" />
      <h1 className="font-semibold text-5xl">Oops, page not found!</h1>
      <p className="mt-5">The page you are looking for is not available.</p>
      <a
        href="/"
        className="text-lg p-3 px-8 mt-10 font-semibold rounded-md text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
      >
        Home
      </a>
    </div>
  );
};

export default ErrorPage;
