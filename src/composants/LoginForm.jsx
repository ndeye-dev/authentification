
// export default LoginForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';  
import { setUser, setError } from '../redux/Store';  

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();  
  const navigate = useNavigate();

  // Utiliser useSelector pour accéder à l'erreur dans le store Redux
  const error = useSelector((state) => state.user.error);  // Accéder à l'erreur du store

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://authenticbackend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Enregistrer le token et les informations de l'utilisateur dans Redux
        dispatch(setUser({ username: data.username, email: data.email, token: data.token }));
        localStorage.setItem('token', data.token);  
        navigate('/Accueil', { replace: true }); 
      } else {
        // Dispatcher l'erreur dans Redux
        dispatch(setError(data.message || 'Erreur de connexion'));
      }
    } catch (error) {
      dispatch(setError('Erreur réseau, veuillez réessayer'));
      console.error('Erreur:', error);
    }
  };

  const handleForgotPassword = () => {
    navigate('/ReinitialPassword'); 
  };
  const handleInscription = () => {
    navigate('/');  
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjB8fGVsZWN0cmljfGVufDB8fHx8fDE2NzA2ODI2MDE&ixlib=rb-1.2.1&q=80&w=1080)' }}>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Connexion</h2>
        {/* Affichage des erreurs de connexion */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end cursor-pointer" onClick={handleForgotPassword}>
            Vous avez oublié votre mot de passe ? <span className='text-teal-500 hover:underline'> Le réinitialiser.</span>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Se connecter
          </button>
          <div className='flex justify-end '>Vous n'avez pas de compte  ?<span onClick={handleInscription} className='text-teal-500 hover:underline cursor-pointer'>Inscrivez-vous.</span> </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
