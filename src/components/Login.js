import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const Navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          setErrorMessage(null);
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              Navigate("/Browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log(userCredential.user);
          Navigate("/");
        })

        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          setErrorMessage(null);
          console.log(userCredential.user);
          Navigate("/Browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.code + "-" + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg"
      >
        <h1 className="font-bold text-3xl p-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-700"
            ref={name}
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          type="button"
          onClick={handleButtonClick}
          className="p-4 m-4 bg-red-600 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
