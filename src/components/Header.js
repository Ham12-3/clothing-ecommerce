import React from "react";
import { cart, logoDark } from "../assets";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white  border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
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
          <div className="relative">
            <img className="w-14" src={cart} alt="" />
            <span className="absolute w-6 top-4 left-4 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_640.png"
            alt="userLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
