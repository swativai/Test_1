import React from "react";
// import Account from "../assets/images/account.jpeg";

const Profile = ({ image, title, className }) => {
  return (
    <div className="w-36 h-7 flex  ">
      <div className="w-12 h-12 m-2">
        <img
          className={`w-12 h-12 border-2  border-yellow-400 rounded-full object-fill  ${className}`}
          src={image}
          alt="Account_image"
        />
      </div>
      <div className={` mt-[17px]  font-poppins   ${className}`}>{title}</div>
    </div>
  );
};

export default Profile;
