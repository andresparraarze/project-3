import React, {useState, Fragment} from 'react'
import {FaBars, FaTimes, FaShoppingCart} from 'react-icons/fa'
import {Menu, Transition} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { QUERY_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const { loading, data } = useQuery( QUERY_CATEGORIES );
  const categoryData = data?.categories || [];
  //onClick navbar    
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  if (Auth.loggedIn()) {
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#000000] text-white'>
      
      {/*Logo*/}
      <div className='font-extrabold text-2xl cursor-pointer'>
        <a href="/">LEA LACROIX</a>
      </div>

      {/*reamining nav bar icons*/}
      <ul className='hidden md:flex font-bold'>
        <li>
          <Menu as="div" className="relative inline-block">

            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
      >
        
            
            </Transition>
          </Menu>
        </li>
        <li>
          <Link to="/cart">
            Shopping cart
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
          </li>
        <li>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      </ul>

      {/*mobile navbar*/}
      <div className='md:hidden z-10'>
        <FaShoppingCart/>
      </div>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/> }
      </div>
      
      {/*Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[##5e5e5e] font-bold flex flex-col justify-center items-center text-white'}>
        <li className='py-6 text-6xl'>
          Home
        </li>
        <li>
          <Link to="/cart">
            Shopping cart
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
          </li>
        <li>
          <Link to="/wishlist">
            Wish List
          </Link>
        </li>
      </ul>

      {/*Shopping cart*/}
    </div>
  );
 } else {
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#000000] text-white'>
      
      {/*Logo*/}
      <div className='font-extrabold text-2xl cursor-pointer'>
        <a href="/">LEA LACROIX</a>
      </div>

      {/*reamining nav bar icons*/}
      <ul className='hidden md:flex font-bold'>
        <li>
          <Menu as="div" className="relative inline-block">
            

            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
      >
        
            
            </Transition>
          </Menu>
        </li>
        <li>
          Shopping cart
        </li>
        <li>
          About
          </li>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
      </ul>

      {/*mobile navbar*/}
      <div className='md:hidden z-10'>
        <FaShoppingCart/>
      </div>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/> }
      </div>
      
      {/*Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[##5e5e5e] font-bold flex flex-col justify-center items-center text-white'}>
        <li className='py-6 text-4xl'>
          Home
        </li>
        <li className='py-6 text-4xl'>
          About
          </li>
        <li className='py-6 text-4xl'>
          <Link to="/login">
            Login
          </Link>
        </li>
      </ul>

      {/*Shopping cart*/}
    </div>
  );
 }
}

export default Navbar