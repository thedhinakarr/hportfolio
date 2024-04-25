import * as React from "react"
import { navigate, Link } from 'gatsby';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="bg-blue text-white text-center py-24 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">Our Work</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Explore our impactful projects and success stories.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Services

export const Head = () => <title>Our Work - Hiptify</title>
