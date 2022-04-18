 
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import PublicRoute from './PublicRoute'; 
import PageNotFound from './pages/PageNotFound'; 

import { routes } from './constant'; 
import './antd.css';
import './App.scss';
 

const App = () => { 

  return ( 
      <Router>
        <Switch> 
          <PublicRoute exact component={Login} path={routes.LoginUrl} />

          <Route component={PageNotFound} path="*" />
        </Switch>
      </Router> 
  );
};

export default App;
