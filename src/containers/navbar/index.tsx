import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive ? 'navbar_link navbar_link-active' : 'navbar_link'
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/user-form"
        className={({ isActive }) =>
          isActive ? 'navbar_link navbar_link-active' : 'navbar_link'
        }
      >
        User Form
      </NavLink>
    </nav>
  );
};

export  {Navbar};
