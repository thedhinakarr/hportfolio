import * as React from "react"
import { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../components/Layout";

const IndexPage = () => {
  const [showHero, setShowHero] = useState(false);

  const toggleHero = () => {
    setShowHero(!showHero);
  };

  return (
    <Layout>
      <div>
        <StaticImage
          src="../images/hero1.png"
          alt="Image 1"
        />

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
