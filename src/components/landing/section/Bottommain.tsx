//librareis
import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imgTab = [
  {
    id: 0,
    url: "/images/t1.webp",
  },
  {
    id: 1,
    url: "/images/t2.webp",
  },
  {
    id: 2,
    url: "/images/t3.webp",
  },
  {
    id: 3,
    url: "/images/t4.webp",
  },
  {
    id: 4,
    url: "/images/t5.webp",
  },
  {
    id: 5,
    url: "/images/t6.webp",
  },
  {
    id: 6,
    url: "/images/t7.webp",
  },
];

const ctOne = [
  {
    id: 0,
    url: "/images/ctOne1.webp",
  },
  {
    id: 1,
    url: "/images/ctOne2.webp",
  },
  {
    id: 2,
    url: "/images/ctOne3.webp",
  },
  {
    id: 3,
    url: "/images/ctOne4.webp",
  },
];
const ctTwo = [
  {
    id: 0,
    url: "/images/ctTwo1.webp",
  },
  {
    id: 1,
    url: "/images/ctTwo2.webp",
  },
  {
    id: 2,
    url: "/images/ctTwo3.webp",
  },
  {
    id: 3,
    url: "/images/ctTwo4.webp",
  },
];
const ctThree = [
  {
    id: 0,
    url: "/images/ctThree1.webp",
  },
  {
    id: 1,
    url: "/images/ctThree2.webp",
  },
  {
    id: 2,
    url: "/images/ctThree3.webp",
  },
  {
    id: 3,
    url: "/images/ctThree4.webp",
  },
];
const ctFour = [
  {
    id: 0,
    url: "/images/ctFour1.webp",
  },
  {
    id: 1,
    url: "/images/ctFour2.webp",
  },
  {
    id: 2,
    url: "/images/ctFour3.webp",
  },
  {
    id: 3,
    url: "/images/ctFour4.webp",
  },
];
const ctFive = [
  {
    id: 0,
    url: "/images/ctFive1.webp",
  },
  {
    id: 1,
    url: "/images/ctFive2.webp",
  },
  {
    id: 2,
    url: "/images/ctFive3.webp",
  },
  {
    id: 3,
    url: "/images/ctFive4.webp",
  },
];
const ctSix = [
  {
    id: 0,
    url: "/images/ctSix1.webp",
  },
  {
    id: 1,
    url: "/images/ctSix2.webp",
  },
  {
    id: 2,
    url: "/images/ctSix3.webp",
  },
  {
    id: 3,
    url: "/images/ctSix4.webp",
  },
];
const ctSeven = [
  {
    id: 0,
    url: "/images/ctSeven1.webp",
  },
  {
    id: 1,
    url: "/images/ctSeven2.webp",
  },
  {
    id: 2,
    url: "/images/ctSeven3.webp",
  },
  {
    id: 3,
    url: "/images/ctSeven4.webp",
  },
];

function Bottommain() {
  const [showTab, setShowTab] = useState({
    id: 0,
    url: "/images/t1.webp",
  });
  const [changeImage, setChangeImage] = useState(ctOne);

  useEffect(() => {
    showTab.id == 0 && setChangeImage(ctOne);
    showTab.id == 1 && setChangeImage(ctTwo);
    showTab.id == 2 && setChangeImage(ctThree);
    showTab.id == 3 && setChangeImage(ctFour);
    showTab.id == 4 && setChangeImage(ctFive);
    showTab.id == 5 && setChangeImage(ctSix);
    showTab.id == 6 && setChangeImage(ctSeven);
  }, [showTab]);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col py-[80px] gap-6 mx-auto container">
        <h1 className="text-[50px] font-medium">DISCOVER YOUR INSPIRATION</h1>
        <div className="w-full flex flex-row justify-between text-gray-500 font-light">
          <p className="pr-[50px]">
            Each CHIRON is one of a kind; an exquisite masterpiece of
            breathtaking power and unrivaled beauty. To build each customer’s
            unique work of art, BUGATTI designers collaborate closely with the
            owner to create a car that fits their personality, while matching
            the brand’s captivating legend status and ardent commitment to
            utmost quality. There are virtually no limits to the levels of
            personalization that can be achieved.
          </p>
          <p>
            A vast selection of color and material combinations is available,
            from the finest hand-picked leather to precious metals. Individual
            engravings or embroidery add the personalized finishing touch,
            making every CHIRON as unique as its owner. Below you can be
            inspired by a small selection of the countless possibilities
            available:
          </p>
        </div>
      </div>
      <div className="w-full h-[100px] flex flex-row justify-center gap-10 items-center">
        {imgTab.map((item) => (
          <div
            onClick={() => {
              setShowTab(item);
            }}
            key={item.id}
            className={`rounded-full flex items-center justify-center duration-300 cursor-pointer ${
              item.id == showTab.id
                ? "w-[80px] h-[80px] px-[5px] bg-gray-200"
                : "w-[40px] h-[40px]"
            }`}
          >
            <img src={item.url} alt="tab" />
          </div>
        ))}
      </div>
      <div className="w-full mx-auto container px-[50px]">
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {changeImage.map((item) => (
            <div key={item.id}>
              <img src={item.url} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-full flex flex-col py-[80px] gap-6 mx-auto container">
        <h1 className="text-[50px] font-medium">GROUNDBREAKING ENGINEERING</h1>
        <div className="w-full flex flex-row justify-between text-gray-500 font-light">
          <p className="pr-[50px]">
            The heart of the CHIRON is its quad-turbocharged 8 l W16 engine.
            This unique masterpiece generates an incredible 1,500 hp and 1,600
            Nm of torque, with an almost linear power output between 2,000 and
            6,000 rpm. Four high-performing turbochargers work in a two-stage
            controlled configuration, and define this champion of performance. A
            remarkable 60,000 liters of air are pumped through the engine every
            minute.
          </p>
          <p>
            Simultaneously, 800 liters of water per minute circulate through the
            CHIRON’s heart, and guarantee the cooling of the engine and generate
            the extraordinary power. The new titanium exhaust system, with
            reduced gas back pressure, boosts this performance further. To
            maximise the CHIRON’s engine power, lightweight materials, such as
            titanium and carbon fiber, have been used wherever possible.
          </p>
        </div>
      </div>
      <div className="w-full ">
        <img src="/images/engine.webp" alt="engine" />
      </div>
      <div className="w-full flex flex-col py-[80px] gap-6 mx-auto container">
        <h1 className="text-[22px] font-medium">CHIRON ACCESSORIES</h1>
        <div className="w-full flex flex-row justify-between text-gray-500 font-light">
          <p className="pr-[50px]">
            The Chiron family is renowned for including some of the fastest,
            most powerful, and exclusive production super sports cars in BUGATTI
            history. Such extraordinary vehicles deserve accessories that match
            the exquisite design and technology quality of the car.
          </p>
          <p>
            BUGATTI Chiron Accessories are now available: a roster of exclusive,
            authentic components to bring out the personality of the Chiron.
            Each accessory comes with a two-year warranty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bottommain;
