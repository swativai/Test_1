import React from "react";
import Day from "./Day";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Card_2 = () => {
  return (
    <div className="w-[340px] h-[315px] rounded-2xl border-[1px] border-gray-300 ">
      <div className="flex justify-between mt-[22px] mx-[22px]">
        <div>
          <Day
            className="w-[59px] h-[20px] rounded-[4px] text-sm px-[6px]"
            name="TODAY"
          />
        </div>
        <div className="text-[#003566] text-xl">
          <FaArrowAltCircleRight />
        </div>
      </div>
      <div className=" mt-[17px] mx-[22px] font-poppins text-lg font-semibold leading-custom-27">
        <p>Sample Class Preview Portal </p>
      </div>
      <div className=" mx-[22px] mt-2 font-poppins text-[15px] font-normal">
        <p>4pm - 5pm</p>
      </div>
      <div className="flex gap-2 ml-[21px] mt-2">
        <Day name="M" className="w-[24px] h-[24px] rounded-full text-sm" />
        <Day
          name="T"
          className="w-[25px] h-[25px] rounded-full text-sm p-[2px]"
        />
        <Day
          name="W"
          className="w-[25px] h-[25px] rounded-full text-sm p-[2px]"
        />
        <Day
          name="T"
          className="w-[25px] h-[25px] rounded-full text-sm p-[2px]"
        />
        <Day
          name="F"
          className="w-[25px] h-[25px] rounded-full text-sm p-[2px]"
        />
        <Day
          name="S"
          className="w-[25px] h-[25px] rounded-full text-sm p-[2px]"
        />
        <Day
          name="S"
          className="w-[25px] h-[25px] rounded-full text-sm p-[2px]"
        />
      </div>
      <div className="flex justify-between mx-[22px] mt-6">
        <div>
          <h1 className="font-poppins font-semibold text-sm">Main Teacher</h1>
          <p className="font-poppins  text-sm font-normal">Miss Sura</p>
        </div>
        <div>
          <h1 className="font-poppins font-semibold text-sm">
            Next Substitution
          </h1>
          <p className="font-poppins  text-sm font-normal">N/A</p>
        </div>
      </div>
      <div className="flex gap-20 mx-[22px]  mt-6 ">
        <div>
          <h1 className="font-poppins font-semibold text-sm">Class Starts</h1>
          <p className="font-poppins text-sm font-normal">08/12/2024</p>
        </div>
        <div>
          <h1 className="font-poppins font-semibold text-sm">Class End</h1>
          <p className="font-poppins  text-sm font-normal">N/A</p>
        </div>
      </div>
    </div>
  );
};

export default Card_2;
