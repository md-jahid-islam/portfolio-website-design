import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
     <div className="container mt-[100px]">
      <h2 className=' text-2xl font-bold text-[#FF0080] hover:text-[#000]'> Get In Touch.</h2>
      <h2 className=' w-[400px] h-[3px] border border-solid bg-white mt-[-10px] ml-[160px]'></h2>
      <h3 className=' mt-10'> TAKE AN COFFEE & CHAT WITH ME</h3>
      <div className=' w-[400px] h-[60px] bg-[#171b22] hover:scale-105 mt-20'>
      <img className=' w-[50px] h-[50px] ml-[10px] pt-3' src=" public/images/email.png" alt="img" />
      <h2 className=' text-[16px] font-bold mt-[-50px] ml-[100px] text-[#fff]'> Email</h2>
       <Link to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' ><h3 className=' ml-[100px] text-[#fff] hover:text-green-500'> jahidulislamwebbd@gmail.com</h3></Link>
      </div>
      <div className=' w-[400px] h-[60px] bg-[#171b22] hover:scale-105 mt-[-60px] ml-[600px]'>
      <img className=' w-[50px] h-[50px] ml-[10px] pt-3' src=" public/images/contact.png" alt="img" />
      <h2 className=' text-[16px] font-bold mt-[-50px] ml-[100px] text-[#fff]'> phone</h2>
       <Link to='#' ><h3 className=' ml-[100px] text-[#fff] hover:text-green-500'> + 01772353905</h3></Link>
      </div>
      <div>
        <h2 className=' text-2xl font-bold uppercase mt-10'> name </h2>
        <input className=' w-[400px] h-[50px] p-5 border-none mt-5' type="text" placeholder='Enter Your Name' />
        <h2 className=' w-[400px] h-[3px] border border-solid mt-5'></h2>
        <div className=' mt-[-145px] ml-[600px]'>
          
        <h2 className=' text-2xl font-bold uppercase mt-5'> email </h2>
        <input className=' w-[400px] h-[50px] p-5 border-none mt-5' type="text" placeholder='Enter Your Email' />
        <h2 className=' w-[400px] h-[3px] border border-solid mt-5'></h2>
        </div>
        <div>
        <Link to='#' > <button className=' w-[150px] h-[45px] border border-solid bg-green-400 hover:bg-[#DB005B] text-black hover:text-white mt-[160px]'> Resume</button></Link>

          <Link to='#' > <button className=' w-[150px] h-[45px] border border-solid bg-green-400 hover:bg-[#FF0060] text-black hover:text-white mt-[160px]'> Submit Now</button></Link>
          <div className=' mt-[-145px] ml-[600px]'>
          
          <h2 className=' text-2xl font-bold uppercase mt-5'>MESSAGE</h2>
          <input className=' w-[400px] h-[150px] p-5 border-none mt-5' type="text" placeholder='Write Your text...' />
          <h2 className=' w-[400px] h-[3px] border border-solid mt-5'></h2>
          </div>
        </div>

      </div>
      <div className=' mt-10'> 
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29072.60109759209!2d91.41629619999999!3d24.37868945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751445418320993%3A0x4aac154dd6283b1f!2sHabiganj!5e0!3m2!1sen!2sbd!4v1723662041183!5m2!1sen!2sbd"
            width="1340" height="600" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>

        
      </div>
      
     </div>
    </>
  )
}

export default Contact