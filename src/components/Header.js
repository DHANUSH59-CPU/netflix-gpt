import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const handleSignout = () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="flex justify-between absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      <button
        className="bg-red-600 text-white font-bold px-4 rounded-lg hover:bg-red-700 transition duration-300"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
