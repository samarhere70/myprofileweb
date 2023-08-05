import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light text-center">
        <p>
          @{year} <span className="footerName">MyProfile</span>. All Rights
          Reserved | Terms & Conditions Apply
        </p>
      </footer>
    </>
  );
};

export default Footer;
