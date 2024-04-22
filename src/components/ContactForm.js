import { navigate } from 'gatsby';
import React from 'react';

const ContactForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => { alert("Your input has been submitted. Thank you!"); navigate("/"); })
      .catch((error) => alert(error));
  };


  return (
    <form onSubmit={handleSubmit} name="contact" method="post" className="border-dblue border-4 p-3 max-w-md mx-auto" data-netlify="true">
      {/* Add hidden form fields */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Rest of your form */}
      <p>
        <label className="block mb-2">Your Name:</label>
        <input type="text" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      </p>
      <p>
        <label className="block mb-2">Your Email:</label>
        <input type="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      </p>
      <p>
        <label className="block mb-2">Message:</label>
        <textarea name="message" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
      </p>
      <p>
        <button type="submit" className="items-center justify-center bg-blue hover:bg-dblue text-white font-bold py-2 px-4 rounded">Send</button>
      </p>
    </form>

  )
};

export default ContactForm;
