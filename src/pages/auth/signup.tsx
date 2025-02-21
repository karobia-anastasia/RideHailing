import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/forms/AuthForm';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();

    if (username.trim() && password.trim()) {
      if (password === confirmPassword) {
        alert(`Account created for ${username}!`);
      } else {
        alert("Passwords do not match.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleSubmit={handleSignUp}
        formType="signup"
      />
   
    </div>
  );
};

export default SignUpPage;
