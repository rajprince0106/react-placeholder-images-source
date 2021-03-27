import React from 'react';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import docs from "./components/docs";

function App() {
  return (
     <BrowserRouter>
         <div className="wrapper">
        <Sidebar />
      
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/docs" component={docs} />
        </Switch>
    </div>
     </BrowserRouter>
    
  );
}

export default App;
