import React, { useEffect, useRef, useState } from 'react'
import SaleCard from './SaleCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData } from './ProductContent'
import { responsive } from '../../JS File/Carousel'


const FlashSale = () => {

   

  const carouselRef = useRef(null);



    const handlePrevious = () => {
      if (carouselRef.current) {
        carouselRef.current.previous();
      }
    };

    const handleNext = () => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    };

    


  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`10/01/${year}`) - +new Date();
    let timeleft = {};

    if (difference > 0) {
      timeleft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeleft;
  };

  const [timeleft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeleft).forEach((interval) => {
    if (!timeleft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeleft[interval]} {interval}{" "}
      </span>,
    );
  });


  const product = productData.map((product) => {
    // console.log(product);
    return (
      <SaleCard key={product.id} product={product} />
    );
  });
  

  return (
    <>
      <div className="mt-16 ml-14">
        <div className="flex p-16 pb-8 items-center gap-3 text-red-700">
          <div className="h-12 w-5 bg-red-600 rounded"></div>
          <h1 className="text-lg font-bold capitalize max-2xl:text-base">
            today's
          </h1>
        </div>
        <div className="pl-14 flex space-x-5">
          <h1 className="text-3xl font-bold">Flash Sales {year}</h1>
          <div className="flex space-x-8 pl-6">
            <div>
              <p className="text-lg font-semibold">Days</p>
              <h1 className="text-3xl font-bold">{timeleft.days} : </h1>
            </div>
            <div>
              <p className="text-lg font-semibold">Hours</p>
              <h1 className="text-3xl font-bold">{timeleft.hours} : </h1>
            </div>
            <div>
              <p className="text-lg font-semibold">Minutes</p>
              <h1 className="text-3xl font-bold">{timeleft.minutes} : </h1>
            </div>
            <div>
              <p className="text-lg font-semibold">Second</p>
              <h1 className="text-3xl font-bold">{timeleft.seconds}</h1>
            </div>
          </div>

          {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
          <div className="flex space-x-2">
            <button
              className=" bg-red-500 hover:bg-red-600 ml-96 text-white font-bold px-6 rounded focus:outline-none"
              onClick={handlePrevious}
            >
              &#10094;
            </button>
            <button
              className=" bg-red-500 hover:bg-red-600 text-white font-bold px-6 rounded focus:outline-none"
              onClick={handleNext}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 mr-28">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          renderButtonGroupOutside={false}
          slidesToSlide={1}
          transitionDuration={500}
          shouldResetAutoplay={true}
          arrows={false}
          rewindWithAnimation={true}
        >
          {product}
        </Carousel>
      </div>

      <div className="text-center">
        <button className="border border-red-500 bg-red-500 text-white text-lg px-9 py-2 rounded-sm font-semibold hover:scale-110 transition duration-300 ease-in-out hover:bg-red-700">
          View All Product
        </button>
      </div>
    </>
  );
}

export default FlashSale