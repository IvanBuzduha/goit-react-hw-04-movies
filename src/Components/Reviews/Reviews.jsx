import React from "react";
const Reviews = ({ reviews }) => {
  return (
    <>
      {
        <ul className="m-10 flex flex-col flex-wrap content-center  text-white">
          {reviews.length ? (
            reviews.map(({ id, author, content }) => (
              <li
                className=" gap-3 items-center content-center bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg"
                key={id}
              >
                <p className="text-red-600">{author}:</p>
                <p>Character: {content}</p>
              </li>
            ))
          ) : (
            <span>Reviews not found</span>
          )}
        </ul>
      }
    </>
  );
};

export default Reviews;
