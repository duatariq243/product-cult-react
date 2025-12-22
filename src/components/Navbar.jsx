import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-xl font-semibold tracking-tight">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
          Product Cult
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-lg font-medium text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Products
          </NavLink>
        </div>

        {/* Sign In / CTA */}
        <div className="flex gap-4 items-center">
          <button className="text-sm font-medium text-gray-700 hover:text-black">
  Login
</button>

         <button className="text-sm font-medium bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
  Sign Up
</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
