import React from "react";

function Header() {
  return (
    <div className=" w-full ">
      <div className="absolute w-full h-full pt-[80px] px-[200px] pb-[20px] text-[60px] font-medium flex flex-col leading-none">
        <span>BUGATTI</span>
        <span>CHIRON</span>
      </div>
      <div className="w-full h-full ">
        <img
          className="w-full "
          src="./images/header-bugatti.webp"
          alt="header"
        />
      </div>
    </div>
  );
}

export default Header;
