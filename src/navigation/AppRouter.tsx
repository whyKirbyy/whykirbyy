import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Routes
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
 */


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/*}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
        */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
