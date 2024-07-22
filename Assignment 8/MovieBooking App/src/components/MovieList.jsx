import React from "react";
import { Link } from "react-router-dom";
import Premiere from "./Premiere";

const movies = [
  {
    id: 1,
    title: "Maharaja",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNDQxYjgzYTAtYTFiMS00ZjhmLWI0ZjItYTI5ZWQ4OWFhYTUyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
  },
  {
    id: 2,
    title: "Maidaan",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNzczMWUwNzAtZGIyMy00MDllLThjZTUtYjk2NzRiNjdiMzE5XkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_.jpg",
  },
  {
    id: 3,
    title: "The Greatest of All..",
    imgSrc:
      "https://preview.redd.it/the-greatest-of-all-time-new-poster-v0-21g6479eu68d1.jpeg?auto=webp&s=dc36f40c9fa8d22ab6c2149b730324f4e86ed401",
  },
  {
    id: 4,
    title: "Kalki 2898 AD",
    imgSrc:
      "https://www.teluguone.com/tmdb/movieimages/kalki%202898%20ad%20review%20and%20rating.webp",
  },
  {
    id: 5,
    title: "Bhaiyya Ji",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNTUxZmYzZjgtYmU1NS00NzhjLTgxYjctNjc4MmYyMzRlYmQxXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
  },
  {
    id: 6,
    title: "Article 370",
    imgSrc: "https://www.m9.news/wp-content/uploads/2024/02/Article-370-1.jpg",
  },
  {
    id: 7,
    title: "Fighter",
    imgSrc:
      "https://static.india.com/wp-content/uploads/2024/01/fight.jpg?impolicy=Medium_Widthonly&w=400",
  },
  {
    id: 8,
    title: "The GOAT life",
    imgSrc:
      "https://preview.redd.it/aadujeevitham-2024-posters-malayalam-tamil-hindi-kannada-v0-urvagvgi3ddc1.jpg?width=640&crop=smart&auto=webp&s=4948c01daf91e0e58b564b7dbb0223eced85c227",
  },
  {
    id: 9,
    title: "BlackOut",
    imgSrc:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202405/blackout_1716282014.jpg",
  },
  {
    id: 10,
    title: "Kakuda",
    imgSrc:
      "https://i1.sndcdn.com/artworks-zNvybd0tUYBv8SyI-Sg3JIg-t500x500.jpg",
  },
];

const MovieList = () => {
  return (
    <>
      <div className="movie-list w-full h-full bg-sky-950 flex justify-center items-center flex-wrap ">
        {movies.map((movie) => (
          <div className="w-52 bg-zinc-100 rounded-md overflow-hidden mx-3 my-4">
            <div
              className="w-full h-72 bg-zinc-300 font-semibold"
              key={movie.id}
            >
              <img
                className="w-full h-full object-cover"
                src={movie.imgSrc}
                alt={movie.title}
                srcset=""
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold text-xl">{movie.title}</h2>
              <p className="text-xs mt-3">Hindi</p>
              <Link to={`/details/${movie.id}`} image={movie.imgSrc}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
