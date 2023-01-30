// import Component from the react module
import React, { Component } from "react";
import Modal from "./components/Modal";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Regions from "./components/Regions";
import Login from "./components/Login";
import Sign from "./components/Sign";
import { ThemeProvider } from "@material-tailwind/react";
import MyProfile from "./components/MyProfile";
import  Carous  from "./components/Carous";
import AddAnnonce from "./components/AddAnnonce";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import Home from "./components/Home";
import {
	BrowserRouter as Router,
	Routes,
	Route,
   
  } from "react-router-dom";
import Detail from "./components/Detail";
import ModifyAnn from "./components/ModifyAnn";
// create a class that extends the component
class App extends Component {

render() {
	return (
		<div>
		<Router>
			<ThemeProvider>
			<Routes>
				<Route path="/"  element={<Home />} />
				<Route path="/log"  element={<Login />} />
				<Route path="/sign"  element={<Sign />} />
				<Route path="/myProfile"  element={<MyProfile />} />
				<Route path="/annonce"  element={<AddAnnonce />} />
				<Route path="/annonce/:id"  element={<ModifyAnn />} />

				<Route path="/:id"  element={<Detail />} />
					
			</Routes>
			</ThemeProvider>
		</Router>
		</div>
	
	);
}
}
export default App;
