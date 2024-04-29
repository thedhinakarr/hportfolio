import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';


const ContactUsPage = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center py-24 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">Enquiry?</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Share your details and we will get back to you soon.</p>
      </div>

      <ContactForm />

    </Layout>
  )
}

export default ContactUsPage

export const Head = () => <title>Contact Us - Hiptify </title>
