import React from 'react';
import Styles from './Navbar.module.css';

function Navbar() {
	return (
		<nav className={Styles.nav}>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>Messages</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>News</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>Music</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>Profile</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>Settings</a>
			</div>
		</nav>
	)
  }

export default Navbar;