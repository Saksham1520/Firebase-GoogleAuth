import React from "react";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";

function Googleauth() {
  const firebase = useFirebase();

  const handleLogin = async () => {
    try {
      const result = await firebase.googleAuth();
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleLogin}
        className="px-6 py-3 text-white bg-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        SignIn with Google
      </button>
    </div>
  );
}

export default Googleauth;
