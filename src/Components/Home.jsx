import React from "react";
import { useFirebase } from "../Context/Firebase";

function Home() {
  const firebase = useFirebase();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <p className="text-gray-700 text-lg mb-6">
          Welcome,{" "}
          <span className="font-bold">
            {firebase.currentUser?.displayName || "User"}
          </span>{" "}
          You are successfully logged in with{" "}
          <span className="font-bold">
            {firebase.currentUser?.email || "User"}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
