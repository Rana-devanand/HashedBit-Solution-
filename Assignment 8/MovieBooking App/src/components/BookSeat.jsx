import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingNavBar from "../components/Navbar/BookingNavBar";

const BookSeat = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { name, email, mobile, movieId: id } });
  };

  return (
    <>
      <BookingNavBar />
      <h1 className="flex justify-center bg-slate-300 font-serif text-4xl ">
        Book Your Tickets
      </h1>
      <div className="book-seat bg-slate-300 w-full h-screen flex justify-center items-center">
        <div className="flex rounded-md bg-white p-2 mb-28">
          <div className=" bg-white h-98">
            <img
              className="w-80 h-100"
              src="https://plus.unsplash.com/premium_photo-1718674393884-6cede49e0a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlja2V0c3xlbnwwfDF8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="w-80 h-100 bg-zinc-800">
            <form onSubmit={handleSubmit}>
              <h1 className="p-4 font-mono text-xl text-white mt-6">
                Book Seat for Movie {id}
              </h1>

              <div className="p-3 font-mono text-2xl ">
                <input
                  className="bg-white ml-3 w-64 mt-8 text-sm py-2 px-3 font-thin"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="p-3 font-mono text-2xl ">
                {/* <label>Email:</label> */}
                <input
                  className="bg-white ml-3 w-64  text-sm py-2 px-3"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="p-3 font-mono text-2xl ">
                {/* <label>Mobile:</label> */}
                <input
                  className="bg-white ml-3 w-64 text-sm py-2 px-3"
                  type="text"
                  placeholder="Enter Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <button
                className="w-32 py-2 ml-5 text-white bg-green-500 rounded-md hover:bg-green-800"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSeat;
