import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";

const SideNav = () => {
  return (
    <div className="w-48 min-h-screen border-2 border-gray-200  font-poppins  ">
      <div className="">
        <div className="m-7">
          <img
            className="w-28 h-8 overflow-hidden text-base top-3 right-2 object-contain "
            src={Logo}
            alt="logo_image"
          />
        </div>
        <div className="m-3 p-2 text-sm">
          <ul>
            <li className=" m-3 ">
              <NavLink to="/" className="flex gap-2">
                <IoMdHome className="text-[#FFC300]  mt-[2px] text-base " />
                HOME
              </NavLink>
            </li>
            <li className=" m-3 ">
              <NavLink to="/billpayment" className="flex gap-2">
                <MdOutlinePayment className="text-gray-400 visited:text-[#FFC300] mt-[2px] text-base" />
                Bill & Payment
              </NavLink>
            </li>
            <li className=" m-3 ">
              <NavLink to="/classevent" className="flex gap-2">
                <MdOutlineEventNote className=" text-gray-400 visited:text-[#FFC300] mt-[2px] text-base" />
                Classes & Events
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
