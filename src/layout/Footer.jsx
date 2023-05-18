import React from "react";
import "./Footer.scss";

// Définition du composant Footer en tant que fonction
function Footer() {
  return (
    <div className="footer">
      <div>
        <img src="logo-black.png" alt="logo" width="100" />
      </div>
      <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
