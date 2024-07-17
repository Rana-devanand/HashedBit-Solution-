import React, { useState } from "react";

function Number() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="calculator border-zinc-950 border-2 px-2 py-3 bg-sky-600">
        <form action="">
          <div className="display bg-zinc-300">
            <input
              className="display p-4 bg-zinc-100 placeholder:italic placeholder:text-slate-400"
              type="text"
              placeholder="Calculating..."
              value={value}
            />
          </div>
          {/* second line  */}
          <div className="flex items-center justify-between border-2 mb-1 mt-1 ">
            <input
              className="p-3 text-white border-solid text-base cursor-pointer"
              type="button"
              value="AC"
              onClick={(e) => setValue("")}
            />
            <input
              className="p-3 text-white border-solid text-base cursor-pointer "
              type="button"
              value="DEL"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              className="p-3 text-white border-solid text-lg cursor-pointer "
              type="button"
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid text-base cursor-pointer "
              type="button"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          {/* first line */}
          <div className="flex items-center justify-between border-2 mb-1">
            <input
              className="p-3 text-white border-solid cursor-pointer "
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between border-2 mb-1">
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer "
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer "
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center border-2 mb-1">
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="flex justify-between items-start border-2 ">
            <input
              className="p-3 text-white border-solid cursor-pointer "
              type="button"
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="p-3 text-white border-solid cursor-pointer"
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="equal p-3 text-white border-solid cursor-pointer "
              type="button"
              value="="
              onClick={(e) => setValue(eval(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Number;
