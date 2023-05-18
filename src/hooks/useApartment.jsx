import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Création d'un hook personnalisé nommé "useApartment"
export function useApartment() {
  const [flat, setFlat] = useState(null);

  // Utilisation du hook useLocation pour obtenir les informations sur l'URL actuelle
  const location = useLocation();

  // Utilisation de useEffect pour effectuer des opérations lors de la mise à jour du composant
  useEffect(() => {
    const abortController = new AbortController();

    // Appel à l'API fetch pour récupérer les données depuis le fichier "db.json"
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        // Recherche de l'appartement correspondant à l'ID dans les données récupérées
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch(console.error);

    // Retourne une fonction de nettoyage pour annuler l'appel de fetch en cours si le composant est démonté
    return () => {
      abortController.abort();
    };
  }, []);
  return flat;
}
