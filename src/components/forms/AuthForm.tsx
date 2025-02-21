import React from 'react';
import InputField from '../fields/InputField';
import AuthButton from '../buttons/AuthButton';
import { Link } from 'react-router-dom';  // Make sure to import Link here

const AuthForm = ({
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleSubmit,
  formType
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {formType === 'login' ? 'Login' : 'Sign Up'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={setUsername}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />

        {formType === 'signup' && (
          <>
            {/* Confirm Password Field for Sign Up only */}
            <InputField
              id="confirm-password"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
          </>
        )}

        {/* Submit Button */}
        <AuthButton
          type="submit"
          text={formType === 'login' ? 'Login' : 'Sign Up'}
          onClick={handleSubmit}
        />
      </form>

      {/* Links for toggling between Login and Sign Up */}
      {formType === 'login' ? (
        <div className="text-center mt-4">
          <Link to="/signup" className="text-blue-600">
            Don't have an account? Sign Up
          </Link>
        </div>
      ) : (
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-600">
            Already have an account? Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
