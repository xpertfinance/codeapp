import React, { useState, useEffect } from 'react';
import Login from '../Login';
import Dashboard from '../Dashboard';
import { Container } from '@mui/material';

const App = () => {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('is_authenticated')) || false 
  );

  // Effect to update localStorage when isAuthenticated changes
  useEffect(() => {
    localStorage.setItem('is_authenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Container maxWidth="lg"> 
      {isAuthenticated ? ( 
        <Dashboard setIsAuthenticated={setIsAuthenticated} /> 
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </Container>
  );
};

export default App; 
