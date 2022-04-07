import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imagesBugatti = [
  {
    id: 1,
    url: "/images/cm1.webp",
  },
  {
    id: 2,
    url: "/images/cm2.webp",
  },
  {
    id: 3,
    url: "/images/cm3.webp",
  },
  {
    id: 4,
    url: "/images/cm4.webp",
  },
  {
    id: 5,
    url: "/images/cm5.webp",
  },
  {
    id: 6,
    url: "/images/cm6.webp",
  },
  {
    id: 7,
    url: "/images/cm7.webp",
  },
];

function Centermain() {
  return (
    <div className="w-full flex flex-col bg-[#f5f5f5] ">
      <div className="w-full flex flex-row items-center">
        <div className="w-1/2 ">
          <img src="/images/ltBugatti.webp" alt="lt" />
        </div>
        <div className="w-1/2 px-[50px] flex flex-col gap-6 ">
          <h1 className="text-[24px] font-medium">
            TRUE LUXURY: AN INNER VALUE
          </h1>
          <p className="text-gray-500 font-light">
            Mirroring the CHIRON´s exterior signature line, the LED illumination
            in the distinctive C-line form separates the two seats, and reveals
            the stunning functional beauty of the interior. The cockpit layout
            of the CHIRON gives the pilot all the necessary information within
            his range of vision. Proudly displaying the magic 500 km/h mark, the
            mechanical speedometer is a feast for the eyes. On the central
            console, milled from a single piece of solid aluminum, each unit has
            independent, adjustable displays.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {imagesBugatti.map((item) => (
            <div key={item.id}>
              <img src={item.url} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Centermain;
