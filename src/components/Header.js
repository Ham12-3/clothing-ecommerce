import React from "react";
import { logoDark } from "../assets";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div>
        <div>
          <img src={logoDark} alt="logoDark" className="w-28" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
