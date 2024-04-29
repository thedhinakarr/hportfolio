import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center py-20 flex flex-col items-center">
        <h1 className="text-5xl font-bold py-4">Our Work</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Explore our impactful projects and success stories.</p>
      </div>
      <StaticImage
        src="../images/ourWorkHero.png"
        alt="Image 1"
      />
    </Layout>
  )
}

export default Services

export const Head = () => <title>Our Work - Hiptify</title>
