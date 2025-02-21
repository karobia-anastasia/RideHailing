import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/forms/AuthForm';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.trim() && password.trim()) {
      alert(`Welcome back, ${username}!`);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleLogin}
        formType="login"
      />
  
    </div>
  );
};

export default LoginPage;
