import { useState, useEffect } from "react";

// Création d'un hook personnalisé nommé "useApartments"
export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  // Utilisation de useEffect pour effectuer des opérations lors de la mise à jour du composant
  useEffect(() => {
    const abortController = new AbortController();

    // Appel à l'API fetch pour récupérer les données depuis le fichier "db.json"
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);

    // Retourne une fonction de nettoyage pour annuler l'appel de fetch en cours si le composant est démonté
    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []);
  return apartments;
};
