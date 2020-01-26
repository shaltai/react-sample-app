import React from 'react';
import Styles from './Navbar.module.css';

function Navbar() {
	return (
		<nav className={Styles.nav}>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>add to friendlist</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>write message</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>notify about posts</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>invite to community</a>
			</div>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>remove from feed</a>
			</div>
		</nav>
	)
  }

export default Navbar;