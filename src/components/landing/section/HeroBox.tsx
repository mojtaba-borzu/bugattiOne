import React from "react";

function HeroBox() {
  return (
    <div className="w-full flex lg:flex-row flex-col-reverse items-center lg:px-[0] px-[30px]">
      <div className="lg:w-1/2 w-full">
        <img src="/images/hero-bugatti.webp" />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col lg:mt-[0] mt-[50px] gap-6 lg:pr-[100px] sm:text-[16px] text-[14px]">
        <h1 className="sm:text-[22px] text-[18px] font-medium">
          BREAKING NEW DIMENSIONS
        </h1>
        <p className="text-gray-500">
          The CHIRON is the fastest, most powerful, and exclusive production
          super sports car in BUGATTI’s history. Its sophisticated design,
          innovative technology, and iconic, performance-oriented form make it a
          unique masterpiece of art, form and technique, that pushes boundaries
          beyond imagination
        </p>
        <p className="text-gray-500">
          BUGATTI owes its distinctive character to a family of artists and
          engineers, and has always strived to offer the extraordinary, the
          unrivaled, the best. Every element of the CHIRON is a combination of
          reminiscence to its history and the most innovative technology. The
          result is a unique creation of enduring value, and breathtaking
          automotive accomplishment.
        </p>
      </div>
    </div>
  );
}

export default HeroBox;
