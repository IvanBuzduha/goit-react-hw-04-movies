import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const MoviesList = ({ renderMovie, location, query = "" }) => {
  return (
    <>
      <ul className=" w-full min-h-screen flex flex-wrap justify-center items-center gap-3 ">
        {renderMovie.map(({ title, id, poster_path, name }) => (
          <li
            className="h-136  w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg"
            key={id}
          >
            <NavLink
              className="w-full mb-3 pb-3 text-xl font-semibold text-shadow"
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location.pathname,
                  query: query,
                },
              }}
            >
              <img
                className="w-full h-116 object-cover mb-2"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : "defaultMovie"
                }
                alt={`Poster for ${name || title} movie`}
              />
              <p className="text-red pl-4 overflow-hidden">{name || title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(MoviesList);
