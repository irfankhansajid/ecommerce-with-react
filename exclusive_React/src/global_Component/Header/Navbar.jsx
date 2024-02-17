import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div>
      <nav className="grid grid-cols-12 justify-between text-black pt-7 pb-3">
        <div className="col-span-4">
          <h1 className="text-3xl ml-32 font-bold">Exclusive</h1>
        </div>
        <div className="col-span-4 m-auto">
          <ul className="flex space-x-4 font-semibold">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/link">Link</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 m-auto">
          <form className="flex">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="py-2 px-3 w-60 border-transparent bg-gray-100 focus:outline-none focus:border-blue-500"
              />
              <Link to="/search">
                <SearchIcon className="absolute top-0 right-0 m-3 text-black-500" />
              </Link>
            </div>
            <div className="m-2 space-x-5">
              <Link to="/wishlist">
                <FavoriteBorderOutlinedIcon className="text-black focus:text-red-500" />
              </Link>
              <Link to="/cart">
                <ShoppingCartOutlinedIcon className="text-black" />
              </Link>
            </div>
          </form>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
