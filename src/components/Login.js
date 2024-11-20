import React, { useState } from "react";
import Browse from "./Browse";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg" />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg">
        <h1 className="font-bold text-3xl p-3">
          {isSignInForm ? "Sign In" : "Sign Out"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700 "
        />
        <button className="p-4 m-4 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Out"}
        </button>
        <p className="text-sm py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already Resgistered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
