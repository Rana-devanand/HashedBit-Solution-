import React from "react";
import { FaLocationDot } from "react-icons/fa6";
function Navbar() {
  return (
    <div className="w-full h-16 bg-zinc-700 p-2 flex justify-between items-center">
      <h2 className="text-white p-3 text-xl">Movie Booking app</h2>

      <button className=" hover:text-red-300 text-white p-2 rounded-md flex items-center m-2">
        <FaLocationDot />
        <h5 className="mx-2">Roorkee</h5>
      </button>

      <div>
        <button className="bg-red-800 hover:bg-red-500 text-white p-2 rounded-md px-3">
          <a href="http://localhost:5173/">Logout</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
