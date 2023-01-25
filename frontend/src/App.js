// import Component from the react module
/*import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from 'axios';*/
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import home from './components/home';
import Annonce from './components/Annonce';
import AnnonceDetail from './components/AnnonceDetail';
import Category from './components/category';
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
		
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
			<Route exact path='/annonce' component={Annonce} />
            <Route exact path='/category/:id' component={Category} />
            <Route exact path='/annonce/:id' component={AnnonceDetail} />
          </Route>
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;


// create a class that extends the component
/*class App extends Component {

// add a constructor to take props
constructor(props) {
	super(props);
	
	// add the props here
	this.state = {
	
	// the viewCompleted prop represents the status
	// of the task. Set it to false by default
	viewCompleted: false,
	activeItem: {
		title: "",
		description: "",
		completed: false
	},
	
	// this list stores all the completed tasks
	taskList: []
	};
}

// Add componentDidMount()
componentDidMount() {
	this.refreshList();
}


refreshList = () => {
	axios //Axios to send and receive HTTP requests
	.get("http://localhost:8000/api/tasks/")
	.then(res => this.setState({ taskList: res.data }))
	.catch(err => console.log(err));
};

// this arrow function takes status as a parameter
// and changes the status of viewCompleted to true
// if the status is true, else changes it to false
displayCompleted = status => {
	if (status) {
	return this.setState({ viewCompleted: true });
	}
	return this.setState({ viewCompleted: false });
};

// this array function renders two spans that help control
// the set of items to be displayed(ie, completed or incomplete)
renderTabList = () => {
	return (
	<div className="my-5 tab-list">
		<span
		onClick={() => this.displayCompleted(true)}
		className={this.state.viewCompleted ? "active" : ""}
		>
		completed
			</span>
		<span
		onClick={() => this.displayCompleted(false)}
		className={this.state.viewCompleted ? "" : "active"}
		>
		Incompleted
			</span>
	</div>
	);
};
// Main variable to render items on the screen
renderItems = () => {
	const { viewCompleted } = this.state;
	const newItems = this.state.taskList.filter(
	(item) => item.completed === viewCompleted
	);
	return newItems.map((item) => (
	<li
		key={item.id}
		className="list-group-item d-flex justify-content-between align-items-center"
	>
		<span
		className={`todo-title mr-2 ${
			this.state.viewCompleted ? "completed-todo" : ""
		}`}
		title={item.description}
		>
		{item.title}
		</span>
		<span>
		<button
			onClick={() => this.editItem(item)}
			className="btn btn-secondary mr-2"
		>
			Edit
		</button>
		<button
			onClick={() => this.handleDelete(item)}
			className="btn btn-danger"
		>
			Delete
		</button>
		</span>
	</li>
	));
};

toggle = () => {
	//add this after modal creation
	this.setState({ modal: !this.state.modal });
};
handleSubmit = (item) => {
	this.toggle();
	alert("save" + JSON.stringify(item));
};

// Submit an item
handleSubmit = (item) => {
	this.toggle();
	if (item.id) {
	// if old post to edit and submit
	axios
		.put(`http://localhost:8000/api/tasks/${item.id}/`, item)
		.then((res) => this.refreshList());
	return;
	}
	// if new post to submit
	axios
	.post("http://localhost:8000/api/tasks/", item)
	.then((res) => this.refreshList());
};

// Delete item
handleDelete = (item) => {
	axios
	.delete(`http://localhost:8000/api/tasks/${item.id}/`)
	.then((res) => this.refreshList());
};


// Create item
createItem = () => {
	const item = { title: "", description: "", completed: false };
	this.setState({ activeItem: item, modal: !this.state.modal });
};

//Edit item
editItem = (item) => {
	this.setState({ activeItem: item, modal: !this.state.modal });
};

// Start by visual effects to viewer
render() {
	return (
	<main className="content">
		<h1 className="text-success text-uppercase text-center my-4">
		GFG Task Manager
		</h1>
		<div className="row ">
		<div className="col-md-6 col-sm-10 mx-auto p-0">
			<div className="card p-3">
			<div className="">
				<button onClick={this.createItem} className="btn btn-info">
				Add task
				</button>
			</div>
			{this.renderTabList()}
			<ul className="list-group list-group-flush">
				{this.renderItems()}
			</ul>
			</div>
		</div>
		</div>
		{this.state.modal ? (
		<Modal
			activeItem={this.state.activeItem}
			toggle={this.toggle}
			onSave={this.handleSubmit}
		/>
		) : null}
	</main>
	);
}
}
export default App;
*/