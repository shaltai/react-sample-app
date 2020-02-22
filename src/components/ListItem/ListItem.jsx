import React from 'react';
import Styles from './ListItem.module.css';
import { NavLink } from 'react-router-dom';
import UI from '../UI/UI.module.css';

function ListItem(props) {
	return (
		<div className={Styles.listItem}>
			<dt className={Styles.listItem__term}>{props.term}</dt>
			<dd className={Styles.listItem__definition}><NavLink to='/profile-gallery' className={UI.link}>{props.definition}</NavLink></dd>
		</div>
	)
}

export default ListItem;