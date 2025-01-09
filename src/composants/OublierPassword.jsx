import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { resetToken } = useParams();  // Récupère le jeton de l'URL
  const navigate = useNavigate();

  useEffect(() => {
    if (!resetToken) {
      navigate('/LoginForm');  // Si le jeton n'est pas présent, rediriger
    }
  }, [resetToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Vérifier si le mot de passe est suffisamment sécurisé
    if (newPassword.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
  
    try {
      const response = await fetch(`https://authenticbackend.onrender.com/api/auth/reset-password/${resetToken}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword }),
      });
  
      // Vérifiez si la réponse du serveur est correcte
      const data = await response.json();
  
      if (response.ok) {
        setMessage(data.message);
        setTimeout(() => {
          navigate('/LoginForm');
        }, 3000);
      } else {
        setError(data.message || 'Erreur inconnue');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);  // Affiche des détails supplémentaires
      setError(`Erreur réseau: ${error.message || 'Veuillez réessayer plus tard'}`);
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjB8fGVsZWN0cmljfGVufDB8fHx8fDE2NzA2ODI2MDE&ixlib=rb-1.2.1&q=80&w=1080)' }}>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Réinitialiser votre mot de passe</h2>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword">Nouveau mot de passe</label>
            <input
              id="newPassword"
              type="password"
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Réinitialiser le mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
