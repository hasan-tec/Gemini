import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../src/components/Auth/SignIn';
import SignUp from '../src/components/Auth/SignUp';
import HomePage from '../src/components/Auth/HomePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} /> {/* Set LandingPage as the root URL */}
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;