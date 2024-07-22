import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingConfirmation from "./components/BookingConfirmation";
import BookSeat from "./components/BookSeat";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/book/:id" element={<BookSeat />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
