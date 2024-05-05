import React, { useState, useEffect } from 'react';
import Login from '../Login';
import Dashboard from '../Dashboard';
import { Container } from '@mui/material';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('is_authenticated')) || false
  );

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
