import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './composants/SignUpForm';
import LoginForm from './composants/LoginForm';
import Accueil from './components/Accueil';
import Reinitialise from './composants/ReinitilPassword';
import ResetPassword from './composants/OublierPassword';
import PrivateRoute from './composants/PrivateRoute';  // Importer PrivateRoute



function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          {/* <Route path="/Accueil" element={<Accueil />} /> */}
          <Route 
            path="/Accueil" 
            element={
              <PrivateRoute>
                <Accueil />
              </PrivateRoute>
            } 
          />
          <Route path="/ReinitialPassword" element={<Reinitialise />} /> {/* Nouvelle route pour la réinitialisation */}
          <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
