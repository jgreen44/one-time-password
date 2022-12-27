import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { FinalApp } from './components/FinalApp';

import { SignInEmail } from './components/SignInEmail';
import { SignInOTP } from './components/SignInOTP';

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
