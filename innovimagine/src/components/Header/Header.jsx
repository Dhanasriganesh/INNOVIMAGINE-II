import React, { useState } from 'react';

import logo from "../images/bgimg.png"
import { Link } from 'react-router-dom';
const Header = () => {



  return (
    <header className="fixed top-0 left-0 right-0 bg shadow-md z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
             <Link to="/"><img src={logo} alt="Logo" className=" w-28 mr-2" /></Link>
            </div>
          </div>

          {/* Desktop Navigation */}

          
<Link to="/contact" className='text-white'>
              Connect
            </Link>

        </div>
      </div>

    </header>
  );
};

export default Header;