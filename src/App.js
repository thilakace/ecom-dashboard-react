import logo from './logo.svg';
import './App.css';
import Login from './Pages/login';
import Dashboard from './Pages/Admin/Dashboard/dashboard';
import Home from './Pages/Web/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../src/Pages/Admin/Components/sidebar";

import React, {  useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { HomeOutline, CartOutline, BagHandleOutline, SettingsOutline, BarChartOutline, LogOutOutline, ListOutline } from 'react-ionicons'
import Category from './Pages/Admin/Dashboard/category';
import Users from './Pages/Admin/Dashboard/users';

function App() {
  

  return (
    <Router>
      <div>
      <SideBar/>
      
      

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
       <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/admin/login" element={<Login />} /> 
          <Route path="/admin/dashboard" element={<Dashboard />} /> 
          <Route path="/admin/category" element={<Category />} /> 
          <Route path="/admin/users" element={<Users />} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
