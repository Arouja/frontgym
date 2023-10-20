import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests

const Activation = () => {
  const { token } = useParams(); // Get the activation token from the URL

  useEffect(() => {
    // Send a request to your backend to activate the user's account
    axios.post('http://localhost:8089/api/v1/auth/activate', { token })
      .then(response => {
        console.log('Account activated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error activating account:', error.response.data);
      });
  }, [token]);

  return (
    <div>
      <p>Activating your account...</p>
    </div>
  );
}

export default Activation;
