import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
function Premiere() {
  return (
    <div className="bg-sky-950 flex justify-start items-center">
      <div className="text-red-600  ml-16 my-5">
        <IoPlayCircleSharp size="5rem" />
      </div>
      <div className="text-white mx-4 ">
        <h2 className="text-4xl font-mono">Premiere</h2>
        <b className="font-sans text-sm">
          Watch new movies at home, every Friday
        </b>
      </div>
    </div>
  );
}

export default Premiere;
