
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Shops from './pages/Shops';
import Account from './pages/Account';
import Signup from './pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={Home} />
      <Route path = "/shops" exact component ={Shops} />
      <Route path= "/account" exact component ={Account}/>
      <Route path = "/signup" exact component ={Signup} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;