import * as React from "react"
import { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

const IndexPage = () => {
  const [showHero, setShowHero] = useState(false);

  const toggleHero = () => {
    setShowHero(!showHero);
  };

  return (
    <div>
      <Header />
      <div>
        <button onClick={toggleHero}>Toggle Hero</button>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: showHero ? 1 : 0, opacity: showHero ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue text-white p-8"
        >
          {/* Your hero content goes here */}
          <h1 className="text-4xl text-black font-bold">Welcome to Our Website</h1>
          <p className="text-lg text-black">Discover amazing content and more!</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Hiptify</title>
