import React from 'react';
import { MenuAlt3Icon, SearchIcon, BellIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';



const Header = () => {
          const navigate = useNavigate();

          const gotoProfile =()=>{
                    navigate('/profile')
          }
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Left Side - Logo and Menu Button */}
      <div className="flex items-center">
        {/* Hamburger Menu (For mobile sidebar toggle) */}
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
          <MenuAlt3Icon className="h-6 w-6 text-gray-600" />
        </button>
        {/* Logo */}
        <h1 className="text-xl font-bold ml-2 text-gray-800 cursor-pointer">VedAdmin</h1>
      </div>

      {/* Center - Search Bar */}
      <div className="hidden md:flex items-center flex-1 mx-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search courses, students, or teachers..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
        </div>
      </div>

      {/* Right Side - Notification and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
          <BellIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button className="flex items-center space-x-2 p-2 bg-gray-100 rounded-full focus:outline-none" onClick={gotoProfile}>

            <UserCircleIcon className="h-8 w-8 text-gray-600" onClick={gotoProfile} />
            <span className="hidden md:block font-medium text-gray-600">Admin</span>
          </button>
          {/* Dropdown Placeholder - You can implement this later */}
        </div>
      </div>
    </header>
  );
};

export default Header;
