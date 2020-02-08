import React from 'react';
import Styles from './Header.module.css';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';

import Logo from '../../img/logo.svg';

function Header() {
	return (
		<header className={Styles.header}>
			<img className={Styles.logo} src={Logo} alt="Logotype" />
			<NavLink to='/about' className={UI.link}>about min-i</NavLink>
			{/* <a href="/#" className={UI.link}>about min-i</a> */}
			{/* <div className={Styles.item}>
			</div> */}
		</header>
	)
}

export default Header;