import React from 'react';
import Styles from './Navbar.module.css';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className={Styles.content}>
			<div className={Styles.item}>
				<NavLink to='/friendlist' className={` ${UI.link} ${Styles.link} `}>add to friendlist</NavLink>
			</div>
			<div className={Styles.item}>
				<NavLink to='/messages' className={` ${UI.link} ${Styles.link} `}>write message</NavLink>
			</div>
			<div className={Styles.item}>
				<NavLink to='/#' className={` ${UI.link} ${Styles.link} `}>notify about posts</NavLink>
			</div>
			<div className={Styles.item}>
				<NavLink to='/#' className={` ${UI.link} ${Styles.link} `}>invite to community</NavLink>
			</div>
			<div className={Styles.item}>
				<NavLink to='/#' className={` ${UI.link} ${Styles.link} `}>remove from feed</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;