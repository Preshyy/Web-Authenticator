import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold underline py-6">
        Firebase Authentication
      </h1>

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          } />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
