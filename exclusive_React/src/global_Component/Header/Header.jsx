import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {

const [currentImage, setCurrentImage] = useState(0);

const images = [
  "https://e-commerce-pied-xi.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fbanner.webp&w=1920&q=75",
  "https://e-commerce-pied-xi.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fbanner.webp&w=1920&q=75",
  "https://e-commerce-pied-xi.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fbanner.webp&w=1920&q=75",
  '../../assets/banner.webp'
];

const nextImage = () => {
  setCurrentImage((prevImage) =>
    prevImage === images.length - 1 ? 0 : prevImage + 1,
  );
};

const prevImage = () => {
  setCurrentImage((prevImage) =>
    prevImage === 0 ? images.length - 1 : prevImage - 1,
  );
};


  return (
    <>
      <div className="grid grid-cols-12 pt-8">
        <div className="col-span-3 flex justify-center text-lg font-semibold">
          <ul className="space-y-4">
            <li className="list_section">
              <Link to="womanFashion" className="dropdown_link">
                <span className="arrow">&#10095;</span>
                Woman Fashion
                <ul className="sub_dropdown bg-gray-100">
                  <li className="sub_list">Home</li>
                  <li className="sub_list">Clothing</li>
                  <li className="sub_list">Shoes</li>
                  <li className="sub_list">Accessories</li>
                  <li className="sub_list">Sale</li>
                </ul>
              </Link>
            </li>
            <li className="list_section">
              <Link to="manFashion" className="dropdown_link">
                <span className="arrow">&#10095;</span>
                Men Fashion
                <ul className="sub_dropdown bg-gray-50">
                  <li className="sub_list">Home</li>
                  <li className="sub_list">Clothing</li>
                  <li className="sub_list">Shoes</li>
                  <li className="sub_list">Accessories</li>
                  <li className="sub_list">Sale</li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="womanFashion">Electronics</Link>
            </li>
            <li>
              <Link to="womanFashion">Home & Lifestyle</Link>
            </li>
            <li>
              <Link to="womanFashion">Medicine</Link>
            </li>
            <li>
              <Link to="womanFashion">Sports & Outdoor</Link>
            </li>
            <li>
              <Link to="womanFashion">Baby's & Toys</Link>
            </li>
            <li>
              <Link to="womanFashion">Groceries & Pets</Link>
            </li>
            <li>
              <Link to="womanFashion">Health & Beauty</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-9 pr-20">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[currentImage]}
                alt={`Image ${currentImage + 1}`}
                className="w-full"
              />
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 text-gray-800 hover:text-gray-900 cursor-pointer">
              <button onClick={prevImage} className="text-white">
                &#10094;
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-gray-800 hover:text-gray-900 cursor-pointer">
              <button onClick={nextImage} className="text-white">
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header