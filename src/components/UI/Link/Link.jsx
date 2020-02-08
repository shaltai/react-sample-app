import React from 'react';
import Styles from '../UI.module.css';

function Link(props) {
	return (
		<a href="#" className={UI.link}>{props.text}</a>
	)
}

export default Link;