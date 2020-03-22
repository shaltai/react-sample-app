import React from 'react';
import Styles from './Heading.module.css';
import { NavLink } from 'react-router-dom';
import UI from '../UI/UI.module.css';

function Heading(props) {

	const Level = 'h' + props.headingLevel;

	return (
		<div className={Styles.heading}>
			<Level>{props.headingText}</Level>
			<NavLink className={UI.link} to={props.headingUrl}>{props.headingLink}</NavLink>
		</div>
	)
}

export default Heading;