import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleMenu, isOpen }) => {
  return (
    <>
      <div className="w-full h-full p-4 hidden lg:inline-block">
        <div className="w-full h-full p-4 bg-gray-800 rounded-md">
          <ul className="space-y-4">
            <li className="text-gray-300 font-semibold tracking-wider text-lg hover:text-white">
              <Link to="posts">Posts</Link>
            </li>
            <li className="text-gray-300 font-semibold tracking-wider text-lg hover:text-white">
              <Link to="comments">Comments</Link>
            </li>
            <li className="text-gray-300 font-semibold tracking-wider text-lg hover:text-white">
              <Link to="todos">Todos</Link>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="absolute w-screen h-screen bg-[rgba(0,0,0,0.5)]"
        >
          <div className="w-1/2 h-screen p-4 inline-block lg:hidden">
            <div className="w-full h-full p-4 bg-gray-800 rounded-md">
              <ul className="space-y-4">
                <li className="text-gray-300 font-semibold tracking-wider text-lg hover:text-white">
                  <Link to="posts">Posts</Link>
                </li>
                <li className="text-gray-300 font-semibold tracking-wider text-lg hover:text-white">
                  <Link to="comments">Comments</Link>
                </li>
                <li className="text-gray-300 font-semibold tracking-wider text-lg hover:text-white">
                  <Link to="todos">Todos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
