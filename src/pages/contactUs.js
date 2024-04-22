import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactUsPage = () => {
  return (
    <div>
      <Header />
      {/* <div>
        <StaticImage
          src="../images/HI.png"
          alt="Image 1"
        />
        <StaticImage
          src="../images/HI.png"
          alt="Image 1"
        />
      </div> */}
      <ContactForm />

      <Footer />
    </div>
  )
}

export default ContactUsPage

export const Head = () => <title>Hiptify | Contact-us</title>
