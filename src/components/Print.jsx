import React from "react";
import { IoPrintOutline } from "react-icons/io5";

const Print = () => {
  return (
    <div className=" w-[104px] h-8 flex gap-1 pl-2 border-2 border-solid border-gray-300 rounded-md p-[2px] text-gray-900 font-medium">
      <IoPrintOutline className="mt-[4px] font-medium " />

      <button>Print</button>
    </div>
  );
};

export default Print;
