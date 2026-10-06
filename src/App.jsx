import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TemaProvider from '@/components/TemaProvider';
import SyncProvider from '@/components/SyncProvider';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Diario from '@/pages/Diario';
import Admin from '@/pages/Admin';
import OAuthConsent from '@/pages/OAuthConsent';
import UserNotRegisteredError from '@/pages/UserNotRegisteredError';

export default function App() {
  return (
    <TemaProvider>
      <SyncProvider>
        <BrowserRouter>
          <ScrollToTop />
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
      </SyncProvider>
    </TemaProvider>
  );
}
