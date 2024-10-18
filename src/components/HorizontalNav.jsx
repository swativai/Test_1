import React from "react";
import Profile from "./Profile";
import Account from "../assets/images/account.jpeg";

const HorizontalNav = () => {
  return (
    <div className=" flex justify-between ">
      <div className="relative top-5 left-[980px]">
        <Profile
          image={Account}
          title="Account"
          className="text-[#00081499] font-normal text-base "
        />
      </div>
    </div>
  );
};

export default HorizontalNav;
