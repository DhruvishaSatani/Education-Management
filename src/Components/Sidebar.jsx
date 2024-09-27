import React from 'react';
import { Link } from 'react-router-dom';
import {  BookOpenIcon, UserGroupIcon} from '@heroicons/react/outline';
import { RiAdminFill } from "react-icons/ri";
import { FaHome,FaRegUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-2 flex flex-col justify-center items-start">
      <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">Vedantu</h1>
      </div>
      <nav className="mt-10 flex-1">
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <FaHome className="h-6 w-6" />
          <span className="ml-2">Dashboard</span>
        </Link>
        <Link to="/courses" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <BookOpenIcon className="h-6 w-6" />
          <span className="ml-2">Courses</span>
        </Link>
        <Link to="/teachers" className="flex items-center py-2 px-4 hover:bg-gray-700">
          {/* <AcademicCapIcon className="h-6 w-6" /> */}
          <RiAdminFill className="h-6 w-6" />
          <span className="ml-2">Teachers</span>
        </Link>
        <Link to="/students" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <UserGroupIcon className="h-6 w-6" />
          <span className="ml-2">Students</span>
        </Link>
      </nav>

      <div className='px-4 mb-[30px] flex'>
      {/* <IoSettings  className='text-white text-2xl cursor-pointer  m-2'/> */}
      {/* <FaRegUserCircle className='text-white text-2xl cursor-pointer m-2 '/> */}
       <div className='flex flex-col my-2 '>
       <p>&copy;CopyRight.Vedantu </p>
       </div>
      </div>
     

    </div>
  );
};

export default Sidebar;





