import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';

import { SignInEmail } from './components/SignInEmail';
import { SignInOTP } from './components/SignInOTP';
import { FinalApp } from './components/FinalApp';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<SignInEmail />} />
        <Route path={'sign-in-otp'} element={<SignInOTP />} />
        <Route path={'final-app'} element={<FinalApp />} />
      </Routes>
    </>
  );
};

App.displaySettings = 'App';
