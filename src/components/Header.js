import React, { useState } from "react";
import { Link } from "gatsby";
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [servicesHoveredOption, setServicesHoveredOption] = useState(null);
  const [industriesHoveredOption, setIndustriesHoveredOption] = useState(null);

  const handleServicesMouseEnter = (option) => {
    setServicesHoveredOption(option);
    setIndustriesHoveredOption(null);
  };

  const handleIndustriesMouseEnter = (option) => {
    setIndustriesHoveredOption(option);
    setServicesHoveredOption(null);
  };

  const handleMouseLeave = () => {
    setServicesHoveredOption(null);
    setIndustriesHoveredOption(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue py-4 z-50">
      <div className="container mx-auto flex justify-between items-center z-10">

        <Link to="/" className="text-white text-4xl font-extrabold">Hiptify</Link>

        <nav className="space-x-6 font-semibold">
          <div className="relative inline-block">
            <span
              className="text-white flex hover:text-orange cursor-pointer mr-1 transition duration-300"
              onMouseEnter={() => handleServicesMouseEnter('devservices')}
            >
              Services
              <FiChevronDown className="mt-1 h-4 w-4 font-bold" />
            </span>

            {servicesHoveredOption === 'devservices' && (
              <div
                onMouseLeave={() => handleMouseLeave()}
                className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-72 md:w-96 lg:w-108 bg-white shadow-lg rounded-lg p-4 z-20"
              >
                <h2 className="text-xl font-semibold mb-2 text-center">Services</h2><hr className="text-orange mb-1" />
                <ul className="flex flex-col items-center">
                  <li>
                    <Link to="/" className="text-blue-600 hover:underline">Development Services</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-blue-600 hover:underline">QA Services</Link>
                  </li>
                  {/* Add more sub options */}
                </ul>
              </div>
            )}
          </div>

          {/* Repeat for Industries */}
          <div className="relative inline-block">
            <span
              className="text-white flex hover:text-orange cursor-pointer mr-1 transition duration-300"
              onMouseEnter={() => handleIndustriesMouseEnter('industries')}
            >
              Industries
              <FiChevronDown className="mt-1 h-4 w-4 font-bold" />
            </span>

            {industriesHoveredOption === 'industries' && (
              <div
                onMouseLeave={() => handleMouseLeave()}
                className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-72 md:w-96 lg:w-108 bg-white shadow-lg rounded-lg p-4 z-20"
              >
                <h2 className="text-xl font-semibold mb-2 text-center">Industries</h2><hr className="text-orange mb-1" />
                <ul className="flex flex-col items-center">
                  <li>
                    <Link to="/" className="text-blue-600 hover:underline">Gaming</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-blue-600 hover:underline">Web</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-blue-600 hover:underline">Mobile</Link>
                  </li>
                  {/* Add more sub options */}
                </ul>
              </div>



            )}
          </div>

          {/* Repeat for other menu items */}
          <Link onMouseEnter={() => handleMouseLeave()} to="/" className="rounded-md text-white hover:text-orange transition duration-300">Our Work</Link>
          <Link to="/" className="rounded-md text-white hover:text-orange transition duration-300">Our Team</Link>
          <Link to="/contactUs" className=" bg-orange p-3 rounded-md text-white hover:text-orange hover:bg-ivory transition duration-300">Contact Us</Link>
        </nav>


      </div>
    </header>
  )
}

export default Header;
