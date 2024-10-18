import React from "react";
// import Card from "../assets/images/card_1.png";

const Card_1 = ({
  image,
  heading,
  heading2,
  payment,
  price,
  time,
  subheading,
  button,
  className,
}) => {
  return (
    // <div className="w-[500px] h-[200px] rounded-2xl border-[2px] overflow-hidden bg-[#FFD60A66] ">
    //   <img src={Card} alt="card1_image" className="transform scale-x-150" />
    // </div>
    // new image
    <div>
      <div
        className={`relative w-[530px] h-[220px]
 rounded-2xl border-[2px] overflow-hidden  ${className}`}
      >
        <img
          src={image}
          alt="card2_image"
          className={`w-full h-full object-cover  ${className}`}
        />
        <div className="absolute inset-0 flex  flex-col p-4">
          <h1 className="text-black text-base m-[6px] font-medium font-poppins">
            {heading}
          </h1>
          <h1 className="text-white m-1 font-poppins text-4xl font-semibold">
            {heading2}
          </h1>
          <p className="text-white font-poppins m-1 mt-2 text-base font-medium">
            {subheading}
          </p>
          <div className=" flex gap-[125px] mt-20">
            <p className="text-black text-5xl m-[6px] font-semibold font-poppins">
              {price}
            </p>
            <div className="text-right  font-poppins">
              <p className="text-sm font-semibold">{payment}</p>
              <p className="text-sm font-normal">{time}</p>
            </div>
          </div>
          {/* <div className="w-[170px] h-[50px] rounded-lg mt-12  bg-[#FFD60A] text-center pt-[10px] pb-2 pr-3 pl-3">
            <button className="text-black font-poppins font-medium text-lg ">
              {button}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card_1;
