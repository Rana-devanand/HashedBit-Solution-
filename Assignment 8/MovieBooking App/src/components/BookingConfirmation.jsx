import React from "react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className="booking-confirmation">
      <h1 className="flex justify-center bg-slate-300 font-serif text-4xl ">
        Hooray !! Your Tickets is booking successfully
      </h1>
      <div className="book-seat bg-slate-300 w-full h-screen flex justify-center items-center">
        <div className="flex rounded-md bg-white p-2 mb-20">
          <div className=" bg-white h-98">
            <img
              className="w-80 h-100"
              src="https://img.freepik.com/free-photo/portrait-young-female-jumping_23-2148883673.jpg?size=626&ext=jpg&ga=GA1.1.323749771.1711071518&semt=sph"
              alt=""
            />
          </div>
          <div className="w-80 h-100 bg-zinc-800">
            <div className="p-3 font-mono text-2xl text-white">
              Booking ID: {bookingId}
            </div>
            <div className="mx-3 text-white font-mono text-lg ">
              Name: {state.name}
            </div>
            <div className="mx-3 text-white font-mono text-lg ">
              Email: {state.email}
            </div>
            <div className="mx-3 text-white font-mono text-lg ">
              Mobile: {state.mobile}
            </div>
            <div>
              <img
                className="w-full h-48"
                src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;

// <h1>Booking Confirmation</h1>
//       <p>Booking ID: {bookingId}</p>
//       <p>Name: {state.name}</p>
//       <p>Email: {state.email}</p>
//       <p>Mobile: {state.mobile}</p>
