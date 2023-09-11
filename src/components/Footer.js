import React from "react";
import { ImGithub } from "react-icons/im";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="" />
          <p className="text-white text-sm tracking-wide pb-10">
            {" "}
            &copy; ReactBD.com
          </p>
          <img className="w-56 mr-10" src={paymentLogo} alt="" />
          <div>
            {" "}
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
