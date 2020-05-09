import React from 'react';
// import MenuSectionItem from '../MenuSectionItem/MenuSectionItem';
import Styles from './MenuSection.module.css';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';

function MenuSection(props) {
	return (
		<nav className={Styles.content}>
			{props.menuSectionItems.map((menuSectionItems, index) => (
				<NavLink key={index} to={menuSectionItems.menuSectionUrl} className={`${UI.link} ${Styles.link}`}>
					{menuSectionItems.menuSectionTitle}
				</NavLink>
			))}
		</nav>
	);
}

export default MenuSection;
