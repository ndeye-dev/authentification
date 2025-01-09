import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // Gérer les erreurs ici
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Inscription réussie', data);
        navigate('/LoginForm');  // Redirection vers la page de connexion
      } else {
        setError(data.message || 'Erreur d\'inscription');
      }
    } catch (error) {
      setError('Erreur réseau, veuillez réessayer');
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200" style={{ backgroundImage:       'url(https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjB8fGVsZWN0cmljfGVufDB8fHx8fDE2NzA2ODI2MDE&ixlib=rb-1.2.1&q=80&w=1080)',
    }}>
      <div className="w-full max-w-lg  p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Inscription</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
