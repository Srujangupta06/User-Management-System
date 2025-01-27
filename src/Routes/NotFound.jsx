import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="text-[#0073e6] text-9xl font-bold">404</div>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 text-white bg-[#0073e6] rounded hover:bg-[#0069d9] cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
