import React from "react";
const MovieDetails = ({
  poster_path,
  title,
  vote_average,
  release_date,
  genres,
  overview,
}) => {
  return (
    <>
      <div className="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
        <div className=" w-full  flex flex-wrap justify-center items-center gap-3 py-5">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : "defaultMovie"
            }
            alt={`Poster for ${title} movie`}
          />
          <div>
            <h2>{title}</h2>

            <ul>
              <li>
                <span>Raiting: </span>
                {vote_average}
              </li>
              <li>
                <span>Realise Date: </span>
                {release_date}
              </li>
            </ul>
            <ul className=" flex flex-wrap">
              <span>Genres: </span>
              {genres &&
                genres.map(({ id, name }) => (
                  <li key={id} className="pl-2">
                    {name}
                  </li>
                ))}
            </ul>
            <h3>Overview: </h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
