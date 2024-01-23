import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <li className="text-sm text-gray-700 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-300">
        <Link to="/">Home</Link>
      </li>
      <li className="text-sm text-gray-700 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-300">
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );

  return (
    <section className="font-poppins bg-purple-50 dark:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <nav className="flex items-center justify-between py-4">
          <a href="" className="text-3xl font-semibold leading-none dark:text-gray-400">
            House Renter
          </a>
          <div className="flex lg:hidden">
            <a
              href="#"
              className="inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-purple-600 border border-purple-400 rounded dark:hover:text-purple-300 dark:text-gray-400 dark:border-gray-400 hover:text-purple-700 hover:border-purple-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </a>
            <button
              className="flex items-center px-3 py-2 text-purple-600 border border-purple-400 rounded dark:text-gray-400 hover:text-purple-800 hover:border-purple-300 dark:border-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>

          <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
            {menuItems}
          </ul>
          <div className="hidden lg:flex">
            <a
              href=""
              className="inline-block px-4 py-3 mr-4 text-xs font-semibold leading-none text-purple-500 border border-purple-300 rounded dark:hover:text-purple-300 dark:text-gray-400 dark:border-gray-400 hover:text-purple-700 hover:border-purple-500 dark:hover:border-purple-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </a>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-800 opacity-25 dark:bg-gray-400 lg:hidden ${
            open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
          }`}
        ></div>
        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-purple-50 w-80 lg:hidden lg:transform-none lg:relative ${
            open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
          }`}
        >
          <div className="flex justify-between px-5 py-2">
            <a className="text-2xl font-bold dark:text-gray-400" href="#">
              House Renter
            </a>
            <button className="rounded-md hover:text-purple-300 lg:hidden dark:text-gray-400" onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>

          <ul className="px-5 text-left mt-7">{menuItems}</ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
