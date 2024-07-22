import React from "react";
import { useParams, Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Maharaja", description: "Price - Rs 300" },
  { id: 2, title: "Maidaan", description: "Price - Rs 350" },
  {
    id: 3,
    title: "The Greatest of All Time & Wolverine",
    description: "Price - Rs 400",
  },

  { id: 4, title: "Kalki 2898 AD", description: "Price - Rs 370" },

  { id: 5, title: "Bhaiyya Ji", description: "Price - Rs 300" },
  { id: 6, title: "Article 370", description: "Price - Rs 350" },
  { id: 7, title: "Fighter", description: "Price - Rs 400" },
  { id: 8, title: "The GOAT life", description: "Price - Rs 370" },
  { id: 9, title: "BlackOut", description: "Price - Rs 400" },
  { id: 10, title: "Kakuda", description: "Price - Rs 370" },
];

const MovieDetails = ({ image }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src="image" alt="" srcset="" />
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
};

export default MovieDetails;
