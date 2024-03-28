import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      // Correctly extract the ID token from the Google response
      const tokenId = tokenResponse.id_token; // Use id_token for backend verification

      // Send the token to your backend
      try {
        const response = await fetch('http://localhost:3000/api/v0/auth/google_auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: tokenId }),
        });
        const data = await response.json();
        console.log(data);
        // Handle the backend response accordingly
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: error => console.error('Google login failed:', error)
  });

  return (
    <div>
      <button onClick={() => login()}>Login with Google</button>
    </div>
  );
};

export default Login;




