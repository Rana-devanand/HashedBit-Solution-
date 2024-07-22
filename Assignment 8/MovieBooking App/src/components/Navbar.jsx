import React from "react";
import { FaLocationDot } from "react-icons/fa6";
function Navbar() {
  return (
    <div className="w-full h-16 bg-zinc-700 p-2 flex justify-between items-center">
      <h2 className="text-white p-3 text-xl">Movie Booking app</h2>
      <div>
        <input
          type="text"
          placeholder="Search for movies..."
          className="p-2 w-80 text-white bg-white border-solid border-white rounded-md mx-4"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md px-3">
          Search
        </button>
      </div>

      <button className=" hover:text-red-300 text-white p-2 rounded-md flex items-center m-2">
        <FaLocationDot />
        <h5 className="mx-2">Roorkee</h5>
      </button>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md px-3">
          Login
        </button>
        <button className="ml-4 bg-gray-500 hover:bg-gray-900 text-white p-2 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
