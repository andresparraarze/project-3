import React,  { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsCardChecklist } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail, HiLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

function User() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Arrow */}
      <div
        className={`bg-black h-screen p-5 pt-8 
      ${open ? "w-72" : "w-20"} duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-black text-3xl rounded-full 
      absolute -right-3 top-9 border border-black cursor-pointer ${
        !open && "rotate-180"
      }`}
          onClick={() => setOpen(!open)}
        />
        {/* Profile */}
        <div className="inline-flex">
          <CgProfile
            className={`bg-white text-4xl rounded cursor-pointer block float-left mr-4 duration-500
        ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300
        ${!open && "scale-0"}`}
          >
            Profile
          </h1>
        </div>
        {/* Search */}
        <div
          className={`flex items-center rounded-md 
        bg-gray-50 mt-6 ${!open ? "px-2" : "px-4"} py-2`}
        >
          <BsSearch
            className={`text-gray-900 text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-gray-900 focus:outline-none
            ${!open && "hidden"}`}
          />
        </div>

        {/* Menu */}

        <ul className=" pt-8">
          <li className="text-white flex justify-around text-lg pt-5 pl-0">
            <HiOutlineMail className="text-2xl" /> Messages
          </li>
          <li className="text-white flex justify-around text-base pt-5 pl-3">
            <BsCardChecklist className="text-2xl" /> Purchases and Reviews
          </li>
          <li className="text-white flex justify-around text-lg pt-5 pl-0">
            <IoSettingsOutline className="text-2xl" /> Settings
          </li>
          <li className="text-white flex justify-around text-lg pt-5 pl-0">
            <HiLogout className="text-2xl" /> Sign out
          </li>
        </ul>
      </div>

      {/* Main page */}
      <div className="p-7">
        <h1 className="text-3xl font-bold pl-10">User Home Page </h1>
      </div>
    </div>
  )
}

export default User
