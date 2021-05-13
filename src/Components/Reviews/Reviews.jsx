import React from "react";
const Reviews = ({ reviews }) => {
  return (
    <>
      {
        <ul className="m-10">
          {reviews.length ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className="text-white">{author}</p>
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
