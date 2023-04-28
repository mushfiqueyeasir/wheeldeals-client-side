import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../../../layouts/AppLayout";

const User = () => {
  const { user, userRefetch } = useContext(GLOBAL_CONTEXT);
  const handleLogout = () => {
    sessionStorage.clear();
    userRefetch();
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border-2 border-green-400">
          <img src={user.imgURL} alt={user.name} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content  shadow bg-black text-white rounded-box w-[8rem]"
      >
        <li className="py-2 flex justify-center items-center font-bold">
          <NavLink
            to={`/dashboard/${user.role === "admin" ? "analytics" : "profile"}`}
            className="active:bg-black"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-[#EBA83A] text-white text-base font-semibold py-1  btn-block  rounded-b-xl flex justify-center"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default User;
