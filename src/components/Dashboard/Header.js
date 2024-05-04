import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAuthenticated }) => {
  return (
    <header>
      <h1>Employee List</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
