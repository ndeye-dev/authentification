// src/composants/PrivateRoute.js
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const navigate = useNavigate(); // Accéder à la fonction navigate
  
  const token = localStorage.getItem('token'); // Vérifier le token dans le localStorage

  if (!token) {
    // Si l'utilisateur n'est pas authentifié, rediriger vers la page de login sans permettre le retour en arrière
    navigate('/LoginForm', { replace: true }); // Redirection sans ajouter à l'historique
    return null; // Retourner null en attendant la redirection
  }

  return children; // Si authentifié, afficher les enfants (composants protégés)
}

export default PrivateRoute;
