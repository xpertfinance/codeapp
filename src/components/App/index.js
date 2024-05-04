import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('is_authenticated')) || false
  );

  useEffect(() => {
    localStorage.setItem('is_authenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;