import React from "react";

const Day = ({ className, name }) => {
  return (
    <div
      className={`  text-center bg-[#FFD60A] text-[#000814] font-poppins ${className}`}
    >
      <h1>{name}</h1>
    </div>
  );
};

export default Day;
