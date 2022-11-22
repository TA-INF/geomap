import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import App from './pages/App';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Router>
          <Routes>
          <Route path="/" element={<App />} />
            <Route element={<App />} >
              <Route path="/signin" element={<SignInForm/>} />
              <Route path="/signup" element={<SignUpForm />} />
          </Route>
        </Routes>   
      </Router>
  // </React.StrictMode>
);
