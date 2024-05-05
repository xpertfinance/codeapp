import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Grid,Paper, Avatar, TextField, Button, Divider} from '@mui/material'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";

const Login = ({ setIsAuthenticated }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password)
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } catch (error) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  const SignUpUsingGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider)
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } catch (error) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Unable to sign in with Google.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  
  const paperStyle = {
    padding: 20,
    width: 280,
    backgroundColor: '#ffffff', // Match the background color
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a box shadow
  };
  
  const avatarStyle = {
    backgroundColor: '#1bbd7e',
  };
  
  return (
    <div style={containerStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            placeholder="admin@example.com"
            variant="outlined"
            fullWidth
            required
            type="email"
            id="email"
            name="email"
            value={email}
            style={{ marginTop: 12 }}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <TextField
          style={{ marginTop: 12 }}
            label="Password"
            placeholder="password"
            variant="outlined"
            fullWidth
            required
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ marginTop: 12 }}
            fullWidth
            aria-label="Login Button"
          >
            Login
          </Button>
        </form>
        <Divider style={{ margin: '12px 0' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '12px 0' }}>
          <div className="border-line" style={{ flexGrow: 1, height: 0, borderBottom: '2px solid black', marginBottom: '2.5px' }}></div>
          <div className="or-text" style={{ fontSize: 14, fontWeight: 'bold', margin: '0 10px' }}>OR</div>
          <div className="border-line" style={{ flexGrow: 1, height: 0, borderBottom: '2px solid black', marginBottom: '2.5px' }}></div>
        </div>
        <Button
          onClick={SignUpUsingGoogle}
          type="button"
          color="primary"
          variant="contained"
          style={{ marginTop: 12 }}
          fullWidth
          aria-label="Sign in with Google Button"
        >
          <svg className="google-icon" style={{ width: '24px', height: '24px', marginRight: '10px' }} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_17_40)">
            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
            <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
          </g>
          <defs>
            <clipPath id="clip0_17_40">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
          Sign in with Google
        </Button>
      </Paper>
    </div>
  );
};

export default Login;