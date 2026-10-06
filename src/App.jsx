import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '../Home.jsx';
import Login from '../Login.jsx';
import Diario from '../Diario.jsx';
import Admin from '../Admin.jsx';
import OAuthConsent from '../OAuthConsent.jsx';
import UserNotRegisteredError from '../UserNotRegisteredError.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/diario" element={<Diario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Navigate to="/admin" replace />} />
        <Route path="/personalizar" element={<Navigate to="/diario" replace />} />
        <Route path="/chat" element={<Navigate to="/diario" replace />} />
        <Route path="/forgot-password" element={<Navigate to="/login" replace />} />
        <Route path="/oauth-consent" element={<OAuthConsent />} />
        <Route path="/access-restricted" element={<UserNotRegisteredError />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
