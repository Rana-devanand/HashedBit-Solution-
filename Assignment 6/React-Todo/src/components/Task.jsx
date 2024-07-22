import { MdDelete } from "react-icons/md";
import { useRef, useState } from "react";
import React from "react";

function Task() {
  const [elements, setElement] = useState([]);
  const inputRef = useRef(null);

  let addElement = () => {
    if (elements == null) {
      setElement([{ id: Date.now(), task: inputRef.current.value }]);
    } else {
      setElement([
        { id: Date.now(), task: inputRef.current.value },
        ...elements,
      ]);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="calculator-container w-full h-screen bg-teal-700 flex justify-center items-start pt-10">
        <div className="todoDesign border-2 bg-green-800 w-80 p-2">
          <div>
            <label>
              <h2 className=" flex justify-center items-center font-semibold text-white">
                TODO APP
              </h2>
            </label>
            <br />
            <input
              className="rounded-md p-2 font-serif text-sm"
              type="text"
              placeholder="Enter your Task..."
              ref={inputRef}
            ></input>
            <button
              className="bg-blue-600 ml-4 m-3 p-1 px-2 py-1 rounded-md text-white text-sm font-semibold"
              onClick={addElement}
            >
              Add Task
            </button>
          </div>
          <div className="text-white">
            <p></p>
          </div>
          <ol className="text-yellow-200 w-full">
            {elements.map((current) => (
              <li
                className="text-zinc-100 flex justify-between font-bold text-lg"
                key={current.id}
              >
                {current.task}
                <button
                  className="text-red-500"
                  onClick={() => {
                    setElement(
                      elements.filter((a) => {
                        return a.id !== current.id;
                      })
                    );
                  }}
                >
                  <MdDelete size={"1.5em"} />
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Task;
