import React from 'react'
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-12 pt-8">
        <div className="col-span-3 flex justify-center">
          <ul className='space-y-2 font-semibold'>
            <li className='list_section'>
              <Link to="womanFashion">Woman Fashion
              <ul className='sub_dropdown'>
                <li className='sub_list' >home</li>
                <li className='sub_list' >home</li>
                <li className='sub_list' >home</li>
                <li className='sub_list' >home</li>
                <li className='sub_list' >home</li>
                </ul></Link>
            </li>
            <li>
              <Link to="womanFashion">Man Fashion</Link>
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
        <div className="col-span-9 bg-green-200  " style={{positon: "relative"}}>
          Lorem ipsum dolor sit amet.
          
        </div>
      </div>
      
    </>
  );
}

export default Header