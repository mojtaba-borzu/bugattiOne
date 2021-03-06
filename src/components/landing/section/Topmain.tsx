import React from "react";

function Topmain() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full flex flex-col py-[80px] gap-6 mx-auto container sm:px-[0] px-[30px]  ">
        <h1 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] font-medium">
          UNCOVERING A NEW DIMENSION: THE SKY
        </h1>
        <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-4  lg:justify-between  text-gray-500 font-light sm:text-[16px] text-[14px]">
          <p className="lg:pr-[50px]">
            The Skyview option was developed in accordance with the attributes
            that characterize the CHIRON. The symbolic horseshoe grill, and the
            distinctive C-bar on the side, still define it as unmistakably
            BUGATTI, as do its pronounced lines and generous surfaces. From
            inside, the glass roof enables a view into another dimension,
            flooding the cockpit with natural light.
          </p>
          <p>
            It generates a new feeling of speed and space, turning a drive in a
            BUGATTI with Skyview option into an incomparable, three-dimensional
            experience. The two glass elements are installed on either side of
            the central fin, which protrudes from the CHIRON's carbon fiber body
            and stretches fluidly toward the signature line which defines the
            car's unmistakable profile.
          </p>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col  gap-2 mx-auto container ">
        <img
          className="md:w-8/12 w-full"
          src="/images/leftTopmain.webp"
          alt="left-bugatti"
        />
        <div className="md:w-4/12 w-full flex md:flex-col flex-row gap-2 justify-between ">
          <img
            className="md:w-full w-[48.5%]"
            src="/images/rtTopmain.webp"
            alt="rt-bugatti"
          />
          <img
            className="md:w-full w-[48.5%]"
            src="/images/rbTopmain.webp"
            alt="lt-bugatti"
          />
        </div>
      </div>
      <div className="w-full flex flex-col py-[80px] gap-6 mx-auto container sm:px-[0] px-[30px]  ">
        <h1 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] font-medium">
          FORM FOLLOWS PERFORMANCE
        </h1>
        <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-4  lg:justify-between  text-gray-500 font-light sm:text-[16px] text-[14px]">
          <p className="lg:pr-[50px]">
            To reach its unprecedented levels of performance, the CHIRON
            effortlessly merges its captivating beauty with sleek, muscular
            efficiency; a spectacular reinterpretation of the BUGATTI design
            DNA. The intelligent air intake management significantly improves
            aerodynamics and enhances the cooling efficiency for engine and
            brakes.
          </p>
          <p>
            The distinctive quad LED headlights, for example, also serve as
            intakes routing air to the front brakes ??? and thus work as a
            remarkable example of functionality fusing with aesthetics. This
            enthusiasm for performance-oriented design continues in the
            interior, complemented by BUGATTI???s exquisite sense of comfort and
            luxury.
          </p>
        </div>
      </div>
      <div className="w-full sm:block hidden  ">
        <img className="" src="/images/centerBugatti.webp" alt="center" />
      </div>
      <div className="w-full sm:hidden block  ">
        <img className="" src="/images/rotaitCenter.png" alt="center" />
      </div>
    </div>
  );
}

export default Topmain;
