import React from "react";
import ClassEventNav from "../components/ClassEventNav";
import Select from "../components/Select";
import Print from "../components/print";
import Card_2 from "../components/Card_2";
import Profile from "../components/Profile";
import Emily from "../assets/images/emily.jpeg";
import Olivia from "../assets/images/olivia.jpeg";

const ClassEvent = () => {
  return (
    <>
      <div className="font-poppins">
        <h1 className=" font-semibold text-[#003566] text-2xl">MySchedule</h1>
        <ClassEventNav />
      </div>
      <div className="flex gap-3  ml-8">
        <Select />
        <Print />
      </div>
      <div className="ml-4 mt-2 font-poppins ">
        <Profile
          image={Emily}
          title="Emily"
          className="text-[000814] font-medium  text-xl border-none"
        />
      </div>
      <div className=" ml-6 mt-10">
        <h1 className=" font-poppins font-normal text-base text-[#000814]">
          Classes:3
        </h1>
      </div>
      <div className="flex gap-6 ml-4 mt-5">
        <Card_2 />
        <Card_2 />
        <Card_2 />
      </div>
      <div className="ml-4 mt-4 font-poppins ">
        <Profile
          image={Olivia}
          title="Olivia"
          className="text-[000814] font-medium  text-xl border-none"
        />
      </div>
      <div className=" ml-6 mt-10">
        <h1 className=" font-poppins font-normal text-base text-[#000814]">
          Classes:1
        </h1>
      </div>
      <div className="flex gap-6 ml-4 mt-5">
        <Card_2 />
      </div>
    </>
  );
};

export default ClassEvent;
