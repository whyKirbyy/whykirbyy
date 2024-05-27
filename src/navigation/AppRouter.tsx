import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

/* Routes  */
import App from "../App.tsx";



const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
