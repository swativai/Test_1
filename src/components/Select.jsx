import React, { useState } from "react";

const Select = () => {
  return (
    <div className="">
      <select
        name="select"
        className="w-40 bg-white text-gray-900 font-normal  border-2 border-solid border-gray-300 rounded-md p-1 text-sm"
      >
        <option value="select">Show: All</option>
      </select>
    </div>
  );
};

export default Select;
