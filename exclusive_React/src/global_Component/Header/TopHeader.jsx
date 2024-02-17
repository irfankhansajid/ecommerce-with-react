import React from 'react'

const TopHeader = () => {
  return (
    <>
        <div className="flex justify-center bg-black text-white py-2">
              <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p> 
              <a href="" className='ml-2 font-semibold underline decoration-1 text-blue-300 '> Shop Now</a>
            <div className='ml-10'>
                <select className='bg-black text-white border-none'>
                      <option value="en">English</option>
                      <option value="fr">FR</option>
                      <option value="es">ES</option>
                      <option value="de">DE</option>
                </select>
            </div>  
        </div>      
    </>
  )
}

export default TopHeader