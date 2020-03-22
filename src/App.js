import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Friendlist from './components/Friendlist/Friendlist';
import MenuGlobal from './components/MenuGlobal/MenuGlobal';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div className="App-wrapper">
				<Header />

				<Route path='/friends' component={Friendlist} />
				<Route path='/messages' component={Messages} />
				<Route path='/profile' render={() => <Profile posts={props.posts} />} />
				<MenuGlobal />
			</div>
		</BrowserRouter>
	);
}

export default App;
