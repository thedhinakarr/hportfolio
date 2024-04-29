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
                className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-96 md:w-108 lg:w-120 xl:w-144 bg-white shadow-lg rounded-lg p-4 z-20"
              >
                <Link to="/services" className="text-xl text-orange font-semibold mb-2 text-center">Services</Link>
                <hr className="text-orange mb-5" />
                <div className="grid grid-cols-2 gap-7">
                  <ul className="flex flex-col gap-2 items-start">
                    <li>
                      <Link to="/services/development" className=" hover:underline">Development </Link>
                    </li>
                    <li>
                      <Link to="/services/qaAutomation" className=" hover:underline">QA Automation</Link>
                    </li>
                    <li>
                      <Link to="/services/enterpriseArchitecture" className=" hover:underline">Enterprise Architecture</Link>
                    </li>

                  </ul>
                  <ul className="flex flex-col gap-2 items-start">
                    <li>
                      <Link to="/services/devops" className=" hover:underline mb-10">DevOps</Link>
                    </li>
                    <li>
                      <Link to="/services/itSupport" className=" hover:underline">IT Support</Link>
                    </li>
                    <li>
                      <Link to="/services/dataEntry" className=" hover:underline">Data Entry</Link>
                    </li>

                  </ul>

                </div>
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
                <Link to="/industries" className="text-xl font-semibold mb-2 text-orange text-center">Industries</Link>
                <hr className="text-orange mb-5" />
                <div className="grid grid-cols-2 gap-7">
                  <ul className="flex flex-col gap-2 items-start">
                    <li>
                      <Link to="/industries" className=" hover:underline">Retail Solutions </Link>
                    </li>
                    <li>
                      <Link to="/industries" className=" hover:underline">Healthcare Innovations</Link>
                    </li>

                  </ul>
                  <ul className="flex flex-col gap-2 items-start">
                    <li>
                      <Link to="/industries" className=" hover:underline mb-10">Data Science Insights</Link>
                    </li>
                    <li>
                      <Link to="/industries" className=" hover:underline">ETL Solutions</Link>
                    </li>
                  </ul>

                </div>
              </div>

            )}
          </div>

          {/* Repeat for other menu items */}
          <Link onMouseEnter={() => handleMouseLeave()} to="/ourWork" className="rounded-md text-white hover:text-orange transition duration-300">Our Work</Link>
          <Link to="/contactUs" className=" bg-orange p-3 rounded-md text-white hover:text-orange hover:bg-ivory transition duration-300">Contact Us</Link>
        </nav>


      </div>
    </header>
  )
}

export default Header;
