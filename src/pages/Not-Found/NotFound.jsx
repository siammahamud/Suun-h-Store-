import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-12 bg-transparent rounded-lg shadow-2xl animate-fade-in-up shadow-orange-400">
        <h1 className="text-9xl font-bold text-red-400 mb-4 animate-bounce">
          404
        </h1>
        <p className="text-xl text-gray-800 mb-6 animate-pulse">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="px-6 py-3 font-semibold text-white bg-cyan-600 rounded-md hover:bg-blue-600 transition-colors duration-200"
          onClick={handleGoHome}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
