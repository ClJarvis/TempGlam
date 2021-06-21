import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const { emailAddress, setEmailAddress } = useState('');
  const { password, setPassword } = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - TempGlam';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md item-center h-screen">
      <p>This is the TempGlam Login page</p>
    </div>
  );
}
