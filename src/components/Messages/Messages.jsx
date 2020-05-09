import React from 'react';
import MenuSection from '../MenuSection/MenuSection';
import Heading from '../Heading/Heading';
import Styles from './Messages.module.css';
import UI from '../UI/UI.module.css';
// import { NavLink } from "react-router-dom";

let menuSectionArray = [
	{ menuSectionTitle: 'Matt Cullen', menuSectionUrl: '/dad' },
	{ menuSectionTitle: 'Chris Letang', menuSectionUrl: '/lipton' },
	{ menuSectionTitle: 'Sidney Crosby', menuSectionUrl: '/sidthekid' },
	{ menuSectionTitle: 'jake guentzel', menuSectionUrl: '/guentz' },
	{ menuSectionTitle: 'Evgeniy malkin', menuSectionUrl: '/jeno' },
	{ menuSectionTitle: 'Bryan Rust', menuSectionUrl: '/rusty' },
];

function Messages(props) {
	return (
		<div className={UI.content}>
			<MenuSection menuSectionItems={menuSectionArray} />

			<Heading headingLevel='2' headingText='messages' headingUrl='/search' headingLink='search' />
			{/* <div className={Styles.messages}>
			</div> */}

			<div className={Styles.attachments}></div>
		</div>
	);
}

export default Messages;
