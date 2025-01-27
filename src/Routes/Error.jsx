import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="text-red-500 text-6xl mb-4">
           
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Something Went Wrong
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn't load the page. Please check your internet connection or try again later.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#0073e6] text-white px-4 py-2 rounded hover:bg-[#0069d9] cursor-pointer"
          >
            Retry
          </button>
        </div>
      </div>
    );
  };
  
  export default Error;