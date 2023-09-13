import React, { useState } from "react";
import { googleLogo } from "../assets";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const register = async () => {
    if (email.length && password.length == 0) {
      alert("name cannot be empty");
    } else {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        addUser({
          _id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
      );
    }
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Email"
            >
              Email
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Password should be at least 6 characters
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/">
              <button
                onClick={register}
                className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <Link to="/">
          <div
            onClick={() => handleGoogleLogin()}
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img className="w-8" src={googleLogo} alt="" />
            <span className="text-sm text-gray-900"> Continue with Google</span>
          </div>
        </Link>

        <h3 className="inline-block align-baseline font-bold text-sm text-black-500 hover:text-black-800">
          Have Account?
        </h3>
        <Link to="/login">
          <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
