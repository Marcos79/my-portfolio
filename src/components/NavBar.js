import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-black text-4xl font-bold cursive tracking-widest"
          >
            Marco
          </NavLink>
          <NavLink
            to="/project"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black"
            activeClassName="text-red-100 bg-yellow-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black"
            activeClassName="text-red-100 bg-yellow-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex px-3 py-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/marco-spano-39b06094/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon url="https://www.facebook.com/marco.spano.359"className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://github.com/Marcos79?tab=projects"className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
