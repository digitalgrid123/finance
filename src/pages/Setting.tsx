import { PasskeyList, useCorbado, useCorbadoSession } from "@corbado/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Setting: React.FC = () => {
  const { isAuthenticated, loading } = useCorbado();
  const { user } = useCorbadoSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate("/auth");
    }
  }, [isAuthenticated, loading, navigate]);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto my-5 break-words border rounded-xl p-3">
          <div className="flex items-center mb-3">
            <button
              onClick={handleBack}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-6 w-6 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          </div>
          <h1 className="text-2xl">Settings</h1>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="text-center max-w-md mx-auto my-5 break-words border rounded-xl p-3">
              <h1 className="text-2xl">Profile</h1>
              {user && (
                <>
                  <p>Email: {user.email}</p>
                  <p>Name: {user.name}</p>
                  <div className="text-left">
                    <PasskeyList />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
