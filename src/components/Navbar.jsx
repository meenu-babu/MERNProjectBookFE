import React from 'react';
import { IoMdHome } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar=({containerStyles,toggleMenu,menuOpened})=> {
  const navItems = [
    { to: '/', label: 'Home', icon: <IoMdHome /> },
    { to: '/shop', label: 'Shop', icon: <IoLibrary /> },
    { to: 'mailto:bookkart@gmail.com', label: 'Contact', icon: <IoMdMailOpen /> }
  ];

  return (
    <nav className={containerStyles}>
      {/* close button inside navbar */}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex relative top-1">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? "text-secondary relative after:w-2/3 after:h-[2px] after:rounded-full after:bg-secondary after:absolute after:-bottom-2 after:left-0 flex items-center justify-center gap-x-2"
                : "flex items-center justify-center gap-x-2"
            }
          >
            <span className='text-xl'>{icon}</span>
            <span className='text-base font-medium'>{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
