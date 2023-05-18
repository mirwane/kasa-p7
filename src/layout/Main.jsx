import React from "react";
import "./Main.scss";

// Définition du composant Main en tant que fonction
function Main({ children }) {
  return <div className="main">{children}</div>;
}

export default Main;
