import React from "react";

function Header() {
  return (
    <div className=" w-full ">
      <div className="absolute w-full h-full 2xl:pt-[80px] xl:pt-[70px] lg:pt-[60px] md:pt-[40px] 2xl:px-[200px] xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px] pt-[16px] pb-[20px] 2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[24px] text-[20px] font-medium flex flex-col leading-none">
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
