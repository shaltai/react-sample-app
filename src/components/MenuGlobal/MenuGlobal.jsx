import React from 'react';
import Styles from './MenuGlobal.module.css';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';

function MenuGlobal() {
	return (
		<nav className={Styles.content}>
			<NavLink to='/my-profile' className={` ${UI.link} ${Styles.link_profile} `}>my profile</NavLink>
			<div className={Styles.links}>
				<NavLink to='/feed' className={` ${UI.link} ${Styles.link} `}>feed</NavLink>
				<NavLink to='/messages' className={` ${UI.link} ${Styles.link} `}>messages</NavLink>
				<NavLink to='/friends' className={` ${UI.link} ${Styles.link} `}>friends</NavLink>
				<NavLink to='/photos' className={` ${UI.link} ${Styles.link} `}>photos</NavLink>
				<NavLink to='/videos' className={` ${UI.link} ${Styles.link} `}>videos</NavLink>
				<NavLink to='/music' className={` ${UI.link} ${Styles.link} `}>music</NavLink>
				<NavLink to='/bookmarks' className={` ${UI.link} ${Styles.link} `}>bookmarks</NavLink>
			</div>
			<NavLink to='/search' className={` ${UI.link} ${Styles.link_search} `}>search</NavLink>
		</nav>
	)
}

export default MenuGlobal;