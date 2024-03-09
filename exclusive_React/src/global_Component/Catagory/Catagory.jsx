import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import { catagoryContent } from "../Catagory/CatagoryContent";
import { responsive } from "../../JS File/Carousel";
import CatagoryItem from "./CatagoryItem";

const Catagory = () => {

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


  const catagoryItems = catagoryContent.map((catagory) => (
    <CatagoryItem key={catagory.id} catagory={catagory} />
    
  ));

  return (
    <div className="mx-14 mb-14">
      <div className="flex p-16 pb-8 gap-3 text-red-700">
        <div className="h-12 w-5 bg-red-600 rounded"></div>
        <h1 className="text-lg font-bold capitalize max-2xl:text-base my-auto">
          Catagorys
        </h1>
      </div>

      <p className="ml-16 text-3xl font-bold">Browse By Catagory</p>
      <div className="flex space-x-2 mx-16 my-5 justify-end">
        <button
          className=" bg-red-500 hover:bg-red-600 text-white font-bold p-5 rounded-md"
          onClick={handlePrevious}
        >
          &#10094;
        </button>
        <button
          className=" bg-red-500 hover:bg-red-600 text-white font-bold p-5 rounded-lg"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
      <Carousel
        responsive={responsive}
        ref={carouselRef}
        slidesToSlide={1}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        renderButtonGroupOutside={false}
        transitionDuration={500}
        arrows={false}
        
      >
        {catagoryItems}
      </Carousel>
    </div>
  );
};

export default Catagory;