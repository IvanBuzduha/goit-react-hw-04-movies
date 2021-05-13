import React from "react";
const Cast = ({ cast }) => {
  return (
    <>
      <ul className=" flex flex-col items-stretch content-center flex-wrap">
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li className="flex items-center content-center mt-2" key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : "defaultMovie"
              }
              width="50px"
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
