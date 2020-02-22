import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Friendlist from './components/Friendlist/Friendlist';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App-wrapper">
				<Header />
				<Navbar />
				<Route path='/friendlist' component={Friendlist} />
				<Route path='/messages' component={Messages} />
				<Profile />
			</div>
		</BrowserRouter>
	);
}

export default App;
