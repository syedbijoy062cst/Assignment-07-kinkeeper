
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-500">404</h1>

        <h2 className="text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="404 Error"
          className="w-56 mx-auto my-6"
        />

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;