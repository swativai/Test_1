import React from "react";
import Card2 from "../assets/images/card_2.jpeg";

const Card_3 = () => {
  return (
    <div>
      <div className="relative w-[530px] h-[220px]   rounded-2xl border-[2px] overflow-hidden ">
        <img
          src={Card2}
          alt="card2_image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 m-[10px] flex flex-col p-2">
          <h1 className="text-white m-1 font-poppins text-4xl font-semibold">
            Looking for a class?
          </h1>
          <p className="text-white font-poppins m-1 mt-2 text-base font-medium">
            Select below to browse our selection of classes.
          </p>
          <div className="w-[170px] h-[50px] rounded-lg mt-12  bg-[#FFD60A] text-center pt-[10px] pb-2 pr-3 pl-3">
            <button className="text-black font-poppins font-medium text-lg ">
              FIND CLASS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_3;
