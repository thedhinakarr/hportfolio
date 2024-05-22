import * as React from "react"
import { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";
import '../styles/carousel.css';

const IndexPage = () => {
  const [showHero, setShowHero] = useState(false);

  const toggleHero = () => {
    setShowHero(!showHero);
  };

  return (
    <Layout>
      <div className="bg-black">
        <ImageCarousel />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Hiptify</title>
  </>
)
