import Header from './Header'; // Import your header component
import Footer from './Footer';
import * as React from "react";


const Layout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex-grow">
        {/* Render the children components */}
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
