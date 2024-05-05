import React from 'react';
import Swal from 'sweetalert2';

import { getAuth, signOut } from "firebase/auth";
import { Button } from '@mui/material';

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    const auth = getAuth();
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.value) {
        signOut(auth).then(() => {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              setIsAuthenticated(false);
            },
          });
        }).catch((error) => {
          console.log(error)
        });
      }
    });
  };

  return (
    <Button
      
    color="inherit"
      onClick={handleLogout}
    >
      Logout
    </Button>

  );
};

export default Logout;