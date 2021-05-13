import React from "react";
const Cast = ({ cast }) => {
  return (
    <>
      <ul className=" flex flex-col items-stretch mt-4 content-center flex-wrap">
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li
            className=" gap-3 mt-2 flex items-center content-center w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg"
            key={cast_id}
          >
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : "defaultMovie"
              }
              alt={name}
              width="100px"
            />
            <div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
