//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "../App.tsx"
import CVPage from "../pages/CVPage.tsx";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CV" element={<CVPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
