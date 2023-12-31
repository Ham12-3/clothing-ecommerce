import React from "react";
import { cart, logoDark } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/bazarSlice";
const Header = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully");
        dispatch(removeUser());
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(productData);
  return (
    <div className="w-full h-20 bg-white  border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img
              style={{
                height: 50,
                width: 50,
              }}
              src={logoDark}
              alt="logoDark"
              className=""
            />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-14" src={cart} alt="" />
              <span className="absolute w-6 top-4 left-4 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>

          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_640.png"
            alt="userLogo"
          />

          <Link to="/login">
            <button
              onClick={handleSignOut}
              className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            >
              {userInfo ? "Sign Out" : "Sign In"}
            </button>
          </Link>
          <p className="text-base font-titleFont font-semibold underline underline-offset">
            {userInfo ? userInfo.email.substring(0, 10) : ""}
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Header;
