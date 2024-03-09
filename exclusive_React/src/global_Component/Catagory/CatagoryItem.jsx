import React from 'react'

const CatagoryItem = ({ catagory }) => (
  <div className="">
    <div className="">
      <div className='py-5 border box-border border-spacing-5 hover:bg-red-500 transition shadow-sm '>
        <img
          src={catagory.icon}
          alt={catagory.title}
          className="w-20 h-20 p-4 bg-transparent mx-auto mt-4"
        />
        <h2 className='text-center font-semibold'>{catagory.name}</h2>
      </div>
    </div>
  </div>
);

export default CatagoryItem