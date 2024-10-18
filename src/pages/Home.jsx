import React from "react";
import Select from "../components/Select";
import Print from "../components/print";
import Card_2 from "../components/Card_2";
import Card_1 from "../components/Card_1";
import Profile from "../components/Profile";
import Emily from "../assets/images/emily.jpeg";
import Olivia from "../assets/images/olivia.jpeg";
import Card1 from "../assets/images/card_1.png";
import Card2 from "../assets/images/card_2.jpeg";

const Home = () => {
  return (
    <div>
      <div className=" flex gap-2  ml-4 font-poppins">
        <h1 className=" font-semibold text-[#003566] text-2xl">
          Welcome, Jane
        </h1>
        <h1 className=" mt-[6px] ml-3">HOME</h1>
      </div>
      <div className="mt-11 ml-4 flex gap-[25px]">
        <div>
          <Card_1
            image={Card1}
            heading=" Current Outstanding Balance"
            price=" $134.00"
            payment="Last Payment:"
            time="$12.66 on 11/06/2024"
            className="mix-blend-overlay  bg-[linear-gradient(109.71deg,_rgba(255,214,10,0.4)_36.81%,_rgba(255,195,0,0.4)_93.82%)]"
          />
        </div>
        {/* <Card_3 /> */}
        <Card_1
          image={Card2}
          heading2=" Looking for a class?"
          subheading=" Select below to browse our selection of classes."
          // button=" FIND CLASS"
          className="bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45))] mix-blend-darken"
        />
      </div>
      <div className="mt-7 ml-6 flex justify-between">
        <div>
          <h1 className="font-poppins font-semibold text-xl text-[#000814]">
            MySchedule
          </h1>
        </div>
        <div className="flex gap-2 ">
          <Select />
          <Print />
        </div>
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
    </div>
  );
};

export default Home;
