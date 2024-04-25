import * as React from "react"
import { navigate, Link } from 'gatsby';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StaticImage } from 'gatsby-plugin-image';

const Services = () => {
  return (
    <div>
      <Header />
      <div className="bg-blue text-white text-center py-24 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">About Us</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Discover our journey and the values that drive us.</p>
      </div>
      <StaticImage
        src="../images/aboutUs.png"
        alt="Image 1"
      />

      <Footer />
    </div>
  )
}

export default Services

export const Head = () => <title>Services - Hiptify</title>
