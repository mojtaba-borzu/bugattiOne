import React from "react";

function NavBar() {
  return (
    <div className="w-full h-[60px]  flex flex-row justify-between items-center px-[30px]">
      <div className="w-[20px] flex flex-col items-center gap-[4px] cursor-pointer">
        <div className="w-full h-[2px] bg-gray-500 rounded-lg"></div>
        <div className="w-full h-[2px] bg-gray-500 rounded-lg"></div>
        <div className="w-full h-[2px] bg-gray-500 rounded-lg"></div>
      </div>
      <div className="cursor-pointer">
        <img src="/images/logo-bugatti.webp" alt="logo" />
      </div>
      <div className="text-gray-500 font-light cursor-pointer">
        <span className="sm:block hidden">FIND A BUGATTI PARTNER</span>
      </div>
    </div>
  );
}

export default NavBar;
