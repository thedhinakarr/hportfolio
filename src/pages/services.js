import Layout from "../components/Layout";
import * as React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { navigate } from 'gatsby';

const Services = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">Services</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Experience excellence with our unparalleled services.</p>
      </div>

      <div className="flex justify-center items-center p-10">

        <div className="grid grid-cols-2 gap-8">

          {/* Service 1: Development */}
          <div onClick={(e) => {
            e.preventDefault();
            navigate("/services/development");
          }} className="group relative hover:bg-gray-100 hover:cursor-pointer p-8 rounded-lg">
            <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />Development</h2>
              <p className="text-black text-xl mb-0">
                We offer a comprehensive range of development services tailored to your business needs.
              </p>

            </div>
            <div className="absolute inset-0 hidden group-hover:block bg-black bg-opacity-10 rounded-lg"></div>
          </div>

          {/* Service 2: QA Automation */}
          <div onClick={(e) => {
            e.preventDefault();
            navigate("/services/qaAutomation");
          }} className="group relative hover:bg-gray-100 hover:cursor-pointer p-8 rounded-lg">
            <div className="text-balance">
              <h2 className="text-3xl flex text-orange font-bold mb-2"><MdOutlineDoubleArrow className="mt-1 mr-1" />QA Automation</h2>
              <p className="text-black text-xl mb-0">
                Our QA automation services ensure the reliability and quality of your software applications.
              </p>

            </div>
            <div className="absolute inset-0 hidden group-hover:block bg-black bg-opacity-10 rounded-lg"></div>
          </div>

          {/* Service 3: Enterprise Architecture */}
          <div onClick={(e) => {
            e.preventDefault();
            navigate("/services/enterpriseArchitecture");
          }} className="group relative hover:bg-gray-100 hover:cursor-pointer p-8 rounded-lg">
            <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />Enterprise Architecture</h2>
              <p className="text-black text-xl mb-0">
                Our enterprise architecture solutions drive innovation and agility across your organization.
              </p>

            </div>
            <div className="absolute inset-0 hidden group-hover:block bg-black bg-opacity-10 rounded-lg"></div>
          </div>
          <div onClick={(e) => {
            e.preventDefault();
            navigate("/services/devops");
          }} className="group relative hover:bg-gray-100 hover:cursor-pointer p-8 rounded-lg">
            <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />DevOps</h2>
              <p className="text-black text-xl mb-0">
                Our enterprise architecture solutions drive innovation and agility across your organization.
              </p>

            </div>
            <div className="absolute inset-0 hidden group-hover:block bg-black bg-opacity-10 rounded-lg"></div>
          </div>
          <div onClick={(e) => {
            e.preventDefault();
            navigate("/services/itSupport");
          }} className="group relative hover:bg-gray-100 hover:cursor-pointer p-8 rounded-lg">
            <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />IT Support</h2>
              <p className="text-black text-xl mb-0">
                Our enterprise architecture solutions drive innovation and agility across your organization.
              </p>

            </div>
            <div className="absolute inset-0 hidden group-hover:block bg-black bg-opacity-10 rounded-lg"></div>
          </div>
          <div onClick={(e) => {
            e.preventDefault();
            navigate("/services/dataEntry");
          }} className="group relative hover:bg-gray-100 hover:cursor-pointer p-8 rounded-lg">
            <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />Data Entry</h2>
              <p className="text-black text-xl mb-0">
                Our enterprise architecture solutions drive innovation and agility across your organization.
              </p>

            </div>
            <div className="absolute inset-0 hidden group-hover:block bg-black bg-opacity-10 rounded-lg"></div>
          </div>


        </div>

      </div>
    </Layout>
  )
}

export default Services

export const Head = () => <title>Services</title>
