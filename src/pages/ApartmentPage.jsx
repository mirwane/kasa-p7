import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";

// Utilisation du hook personnalisé useApartment pour récupérer les informations de l'appartement
function ApartmentPage() {
  const flat = useApartment();

  // Affichage d'un message de chargement si les données de l'appartement ne sont pas encore disponibles
  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
