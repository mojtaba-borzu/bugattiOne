import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imagesBugatti = [
  {
    id: 0,
    url: "/images/c10.webp",
  },
  {
    id: 1,
    url: "/images/c1.webp",
  },
  {
    id: 2,
    url: "/images/c2.webp",
  },
  {
    id: 3,
    url: "/images/c3.webp",
  },
  {
    id: 4,
    url: "/images/c4.webp",
  },
  {
    id: 5,
    url: "/images/c5.webp",
  },
  {
    id: 6,
    url: "/images/c6.webp",
  },
  {
    id: 7,
    url: "/images/c7.webp",
  },
  {
    id: 8,
    url: "/images/c8.webp",
  },
  {
    id: 9,
    url: "/images/c9.webp",
  },
];

function CarouselDemo() {
  return (
    <div className="w-full">
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        {imagesBugatti.map((item) => (
          <div key={item.id}>
            <img src={item.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselDemo;
