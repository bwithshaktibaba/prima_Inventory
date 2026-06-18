import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AboutUs from './pages/aboutus'
import Dashboard from './pages/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  // If logged in, always show dashboard
  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  // Public pages
  switch (currentPage) {
    case 'login':
      return (
        <LoginPage
          onLogin={handleLogin}
          onNavigateHome={() => setCurrentPage('home')}
          onNavigateSignup={() => setCurrentPage('signup')}
        />
      );
    case 'signup':
      return (
        <SignupPage
          onSignup={handleSignup}
          onNavigateHome={() => setCurrentPage('home')}
          onNavigateLogin={() => setCurrentPage('login')}
        />
      );
    case 'about':
      return (
        <AboutUs
          onNavigateHome={() => setCurrentPage('home')}
        />
      );
    default:
      return (
        <HomePage
          onNavigateLogin={() => setCurrentPage('login')}
          onNavigateSignup={() => setCurrentPage('signup')}
          onNavigateAbout={() => setCurrentPage('about')}
        />
      );
  }
}

export default App