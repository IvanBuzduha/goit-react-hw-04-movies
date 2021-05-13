import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import startRouts from "../../routes/startRoutes";
const Navigation = ({ location }) => {
  return (
    <>
      <ul className="w-full  flex flex-wrap justify-center items-center gap-10 py-5">
        {startRouts.map((item) => (
          <li
            className="mb-3 pb-3 text-xl font-semibold text-shadow backdrop bg-opacity-10 rounded p-3 text-white"
            key={item.path}
          >
            <NavLink
              to={{
                pathname: item.path,
                state: { from: location.pathname },
              }}
              exact={item.exact}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(Navigation);
