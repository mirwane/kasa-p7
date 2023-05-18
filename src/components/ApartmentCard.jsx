import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";
import "./ApartmentCard.scss";

function ApartmentCard(props) {
  return (
    // Utilisation de la composante Link de react-router-dom pour créer un lien vers la page "/flat"
    // et passage des données de l'appartement via l'état de location
    // (voir src\components\ApartmentGrid.jsx pour l'utilisation de ce lien)
    <Link
      to="/flat"
      state={{
        apartmentId: props.id,
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;
