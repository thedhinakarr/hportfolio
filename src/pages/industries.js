import * as React from "react"
import { navigate, Link } from 'gatsby';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StaticImage } from 'gatsby-plugin-image'

const Industries = () => {
  return (
    <div>
      <Header />
      <div className="bg-blue text-white text-center py-20 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">Industries</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Unlocking success across diverse industries.</p>
      </div>
      <StaticImage
        src="../images/industriesHero.png"
        alt="Image 1"
      />

      <Footer />
    </div>
  )
}

export default Industries

export const Head = () => <title>Industries - Hiptify</title>
