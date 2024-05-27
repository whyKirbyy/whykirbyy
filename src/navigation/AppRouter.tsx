import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Routes  */
import App from "../App.tsx";



const AppRouter: React.FC = () => {
  return (
    <Router>
        <Route path="/" Component={App} />
    </Router>
  );
};

export default AppRouter;
