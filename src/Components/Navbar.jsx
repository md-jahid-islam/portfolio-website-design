import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <> 

       <nav>
  <div className="container">
   <div className=' menu_row pt-5'>
   <NavLink to='#' ><h2 className=' text-2xl text-[#36C2CE] w-[40px] h-[40px] rounded-full'> <img src=" public/images/portfolio.png" alt="img" /></h2> </NavLink>
   <ul className=" flex justify-center items-center flex-wrap gap-10 text-black font-bold mt-[-30px] ml-[300px] w-[100%]">

 <NavLink
  to="/"className={({ isActive,  }) =>  isActive ?<li> <NavLink to="#" > Home</NavLink></li> :<li> <NavLink to="#" >Home</NavLink></li>   }>Home</NavLink>
     <NavLink
  to="/About"className={({ isActive,  }) =>  isActive ?<li> <NavLink to="#" >About</NavLink></li> :<li> <NavLink to="#" >About</NavLink></li> }>About</NavLink>
     <NavLink
  to="/Protfolio"className={({ isActive,  }) =>  isActive ?<li> <NavLink to="#" >Protfolio</NavLink></li>:<li> <NavLink to="#" >Protfolio</NavLink></li> }>Protfolio</NavLink>
     <NavLink
  to="/Blog"className={({ isActive,  }) =>  isActive ?<li> <NavLink to="#" >Blog</NavLink></li>:<li> <NavLink to="#" >Blog</NavLink></li> }>Blog</NavLink>
     <NavLink
  to="/Services"className={({ isActive,  }) =>  isActive ?<li> <NavLink to="#" >Services</NavLink></li> :<li> <NavLink to="#" >Services </NavLink></li> }>Services </NavLink>

<NavLink
  to="/Contact"className={({ isActive,  }) =>  isActive ?<li> <NavLink to="#" >Contact</NavLink></li> :<li> <NavLink to="#" >Contact</NavLink></li> }>Contact</NavLink>
 </ul>
 </div>
 </div>
 </nav>

   </>
  )
}

export default Navbar
