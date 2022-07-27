import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  //onClick navbar    
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#19191b] text-white'>
      
      {/*Logo*/}
      <div className='font-extrabold text-2xl'>
        <h1>LEA LACROIX</h1>
      </div>

      {/*reamining nav bar icons*/}
      <ul className='hidden md:flex font-bold'>
        <li>
          Categories
        </li>
        <li>
          Shopping cart
        </li>
        <li>
          About
          </li>
        <li>
          Login
        </li>
      </ul>

      {/*mobile navbar*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/> }
      </div>

      {/*Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[##010101] font-bold flex flex-col justify-center items-center text-white'}>
        <li className='py-6 text-4xl'>
          Home
        </li>
        <li className='py-6 text-4xl'>
          Shop
        </li>
        <li className='py-6 text-4xl'>
          About
          </li>
        <li className='py-6 text-4xl'>
          Login
        </li>
        <li className='py-6 text-4xl'>
          Signup
        </li>
      </ul>
    </div>
  )
}

export default Navbar