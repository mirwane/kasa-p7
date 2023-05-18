import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";

// Définition du composant de mise en page avec en-tête, section principale et pied de page
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

// Création des routes de l'application
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/flat",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
