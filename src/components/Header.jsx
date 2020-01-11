import React from 'react';
import Styles from './Header.module.css';
import logo from '../logo.svg';

function Header() {
	return (
		<header className={Styles.header}>
			<img className={Styles.logo} src={logo} alt="Logotype"/>
		</header>
	)
  }

export default Header;