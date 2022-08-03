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
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-600">
                Categories
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
      >
        
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            {categoryData.map((category) => (
              <div key={category._id} className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-200 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {category.name}
                    </a>
                  )}
                </Menu.Item>
                </div>
                ))}
               
            </Menu.Items>
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
          <Link to="/wishlist">
            Wish List
          </Link>
        </li>
        <li>
          <Link to="/orderhistory">
            Order History
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
        <li className='py-6 text-6xl'>
          Categories
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
        <li>
          <Link to="/orderhistory">
            Order History
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
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-600">
                Categories
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
      >
        
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            {categoryData.map((category) => (
              <div key={category._id} className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-200 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {category.name}
                    </a>
                  )}
                </Menu.Item>
                </div>
                ))}
               
            </Menu.Items>
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
          Categories
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