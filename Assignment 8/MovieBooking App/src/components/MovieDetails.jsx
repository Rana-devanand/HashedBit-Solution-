import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import Premiere from "./Premiere";
import Navbar from "./Navbar";
const movies = [
  {
    id: 1,
    title: "Maharaja",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNDQxYjgzYTAtYTFiMS00ZjhmLWI0ZjItYTI5ZWQ4OWFhYTUyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
    description: "Rs 300",
  },
  {
    id: 2,
    title: "Maidaan",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNzczMWUwNzAtZGIyMy00MDllLThjZTUtYjk2NzRiNjdiMzE5XkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_.jpg",
    description: "Rs 350",
  },
  {
    id: 3,
    title: "Srikanth",
    imgSrc:
      "https://media0050.elcinema.com/uploads/_315x420_0b6243547fa440e9dd6bbd215fedcdf980e2d33bdaad2566b7fd9694667fb5a7.jpg",
    description: "Rs 400",
  },

  {
    id: 4,
    title: "Kalki 2898 AD",
    imgSrc:
      "https://www.teluguone.com/tmdb/movieimages/kalki%202898%20ad%20review%20and%20rating.webp",
    description: "Rs 370",
  },

  {
    id: 5,
    title: "Bhaiyya Ji",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNTUxZmYzZjgtYmU1NS00NzhjLTgxYjctNjc4MmYyMzRlYmQxXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
    description: "Rs 300",
  },
  {
    id: 6,
    title: "Article 370",
    imgSrc: "https://www.m9.news/wp-content/uploads/2024/02/Article-370-1.jpg",
    description: "Rs 350",
  },
  {
    id: 7,
    title: "Fighter",
    imgSrc:
      "https://static.india.com/wp-content/uploads/2024/01/fight.jpg?impolicy=Medium_Widthonly&w=400",
    description: "Rs 400",
  },
  {
    id: 8,
    title: "The GOAT life",
    imgSrc:
      "https://preview.redd.it/aadujeevitham-2024-posters-malayalam-tamil-hindi-kannada-v0-urvagvgi3ddc1.jpg?width=640&crop=smart&auto=webp&s=4948c01daf91e0e58b564b7dbb0223eced85c227",
    description: "Rs 370",
  },
  {
    id: 9,
    title: "BlackOut",
    imgSrc:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202405/blackout_1716282014.jpg",
    description: "Rs 400",
  },
  {
    id: 10,
    title: "Kakuda",
    imgSrc:
      "https://i1.sndcdn.com/artworks-zNvybd0tUYBv8SyI-Sg3JIg-t500x500.jpg",
    description: "Rs 370",
  },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const style = { color: "white ", fontSize: "1rem" };
  return (
    <>
      <Navbar></Navbar>
      <Premiere />
      <div className="movie-list w-full h-full bg-zinc-700 flex justify-start items-center flex-wrap">
        <div className="w-52 bg-zinc-100 rounded-md overflow-hidden mx-3 my-4 ml-6">
          <div className="w-full h-72 bg-zinc-300 font-semibold">
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
            <p className="text-lg">
              Price - <b className="text-red-700"> {movie.description} ₹</b>
            </p>
          </div>
        </div>
        {/* Card end here */}
        <div className="w-99 p-5 ">
          <h1 className="font-semibold text-5xl mt-0 my-6 text-white">
            {movie.title}
          </h1>
          <div className="px-3 py-3 w-full border-2 flex justify-between items-center gap-1 text-sm rounded-lg">
            <FaThumbsUp style={style} />
            <div>
              <p className="text-white">329.5K are interested.</p>
              <p className="text-white">
                Are you interested in watching this movie?
              </p>
            </div>
            <button className="p-1 px-3 ml-3 text-black bg-white  hover:bg-red-600 ">
              i'am interested
            </button>
          </div>

          {/* are you interested end here */}
          <div className="w-80 border-2 text-white text-sm rounded-lg py-3 px-4 mt-4">
            <i>
              2D , IMAX 2D , 3D , 2D SCREEN X , MX4D 3D , 3D SCREEN X , 4DX 3D ,
              ICE 3D , IMAX 3D
            </i>
            ;
          </div>

          {/* -------------------------------------            */}
          <div className="w-60 border-2 text-black text-sm rounded-lg mt-3 p-2 bg-white">
            <b>English , Hindi , Tamil , Telugu</b>
          </div>

          {/* -------------------------------------            */}

          <div className="text-white my-3 font-extralight">
            <b>2h 8m • Action , Adventure , Comedy • A</b>
          </div>

          <div className="BookNow">
            <Link to={`/book/${movie.title}`}>
              <button className="w-32 py-3 text-white bg-red-500 rounded-md hover:bg-red-600">
                Book Tickets
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
