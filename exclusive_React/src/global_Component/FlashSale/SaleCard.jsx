import React from 'react'

const SaleCard = ({product}) => {

  return (
    <div className="mx-28 my-20">
      <div className="overflow-hidden w-64">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <div className="text-white bg-red-500 text-lg font-semibold p-1 m-3 border border-red-500 rounded-lg w-14">
            {product.percent}
          </div>
          <img
            src={product.image}
            alt=""
            className="m-auto w-36 h-36 cursor-pointer hover:scale-110 transition duration-300 ease-in-out object-contain"
          />
          <div className="">
            <button className="w-full bg-black text-white p-3">
              Add to Cart
            </button>
          </div>
          <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
          <div className="space-x-3 space-y-3 mt-2">
            <span className="text-red-500 text-lg font-semibold">{product.price}</span>
            <span className="line-through text-gray-500">{product.discount}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
  }

export default SaleCard
