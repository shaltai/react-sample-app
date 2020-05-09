import React from 'react';
import Styles from './MenuSectionItem.module.css';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';

function MenuSectionItem(props) {
	return (
		<NavLink
			to='/#'
			// to={props.menuSectionUrl}
			className={`${UI.link} ${Styles.link}`}>
			{props.menuSectionTitle}
		</NavLink>
	);
}

export default MenuSectionItem;
