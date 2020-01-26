import React from 'react';
import Styles from './Header.module.css';
import Logo from '../img/logo.svg';

function Header() {
	return (
		<header className={Styles.header}>
			<img className={Styles.logo} src={Logo} alt="Logotype"/>
			<div className={Styles.item}>
				<a href="/#" className={Styles.link}>about min-i</a>
			</div>
		</header>
	)
  }

export default Header;