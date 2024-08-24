import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
  <div className="container">
 <div className="baner_part">
  <h1 className=' text-2xl font-bold text-black pt-44 uppercase  hover:text-gray-500 transition'> jahidul islam </h1>
  <h2 className=' text-[18px] text-green-600 uppercase mt-[20px] animate-pulse hover:text-red-600'>front end developer & react developer </h2>
  <p className=' w-[290px] h-[120px] mt-[20px] hover:text-[#fff] transition animate-pulse'> We appreciate your trust greatly our clients choose us & our products because they know we are the best.</p>
 <div className=' flex gap-10'>
 <NavLink to='/About'> <button className=' w-[170px] h-[50px] uppercase rounded-full text-gray-50 bg-[#007944] hover:bg-[#F35588] transition animate-pulse'> viwe work</button></NavLink>
 <NavLink to='/Contact'> <button className=' w-[170px] h-[50px] uppercase rounded-full text-gray-50 bg-[#ffdb59] hover:bg-[#F35588] transition animate-pulse'> contact me </button> </NavLink>
  
 <div className=' mt-[-320px] ml-[400px]'>
  <img className=' w-[450px] h-[450px] rounded-full rounded-s-lg animate-pulse hover:scale-105' src=" public/images/img.png" alt="img" />
  <img className=' w-[100px] h-[100px] rounded-full mt-[-495px] animate-spin transition hover:scale-105' src=" public/images/img1.png" alt="img" />
  <img className=' w-[60px] h-[60px] rounded-full mt-[150px] animate-spin hover:scale-105' src=" public/images/img2.png" alt="img" />

 </div>
 </div>
 </div>
 <div>
  <h2 className=' mt-[80px] animate-pulse'> Trusted by World Leading Brands</h2>

  </div>

  </div>

    </>
  )
}

export default Home