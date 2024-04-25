import * as React from "react"
import { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../components/ContactForm";

const IndexPage = () => {
  const [showHero, setShowHero] = useState(false);

  const toggleHero = () => {
    setShowHero(!showHero);
  };

  return (
    <div>
      <Header />
      <div>
        <StaticImage
          src="../images/hero1.png"
          alt="Image 1"
        />

      </div>

      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Hiptify</title>
