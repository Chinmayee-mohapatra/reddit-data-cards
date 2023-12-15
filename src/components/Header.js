import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[4em] flex justify-between items-center px-10 text-white bg-blue-950 mb-10 ">
      <div className="animate-pulse text-2xl">Logo</div>
      <div>
        <ul className="flex gap-8">
          <li className="hover:cursor-pointer hover:scale-110 duration-200">
            Home
          </li>
          <li className="hover:cursor-pointer hover:scale-110 duration-200">
            About
          </li>
          <li className="hover:cursor-pointer hover:scale-110 duration-200">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
