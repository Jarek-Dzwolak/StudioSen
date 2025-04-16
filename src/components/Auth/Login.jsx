import React from "react";
import { useAuth } from "../../contexts/AuthContext"; // Zmieniony import
import { useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInWithGoogle, currentUser, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get return URL from location state or default to dashboard
  const from = location.state?.from?.pathname || "/dashboard";

  // Redirect if already logged in
  React.useEffect(() => {
    if (currentUser) {
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, from]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      // Navigation will happen in the useEffect above once currentUser is set
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Studio Sen - Panel Firmowy
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Zaloguj się, aby zarządzać klientami, terminami i płatnościami
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={handleGoogleLogin}
            className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <FcGoogle className="h-5 w-5" />
            </span>
            Zaloguj się przez Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
