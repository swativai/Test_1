import React from "react";
import { NavLink } from "react-router-dom";
import { GrFormSchedule } from "react-icons/gr";
import { PiGraduationCap } from "react-icons/pi";
import { PiCakeLight } from "react-icons/pi";

const ClassEventNav = () => {
  return (
    <div className="flex gap-6 ml-8 mb-5 mt-6 border-b-[1px] p-2 border- border-gray-300">
      <div className="flex gap-2">
        <GrFormSchedule className="text-2xl text-gray-600" />

        <NavLink
          to="/myschedule"
          className="text-base font-poppins font-semibold"
        >
          MySchedule
        </NavLink>
      </div>
      <div className="flex gap-2 text-gray-500">
        <PiGraduationCap className="text-2xl" />

        <NavLink to="/findclasses" className="font-poppins">
          Find Classes
        </NavLink>
      </div>
      <div className="flex gap-2  text-gray-500">
        <PiCakeLight className="text-2xl" />

        <NavLink to="/findevent" className="font-poppins">
          Find Event
        </NavLink>
      </div>
    </div>
  );
};

export default ClassEventNav;
