import React from 'react';
import Styles from './Post.module.css';
import PostPhoto from '../../img/profile/photo__maf-4.jpg';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';

function Post(props) {
	return (
		<div className={Styles.content}>
			<div className={` ${Styles.posts__heading} ${Styles.heading} `}>
				<h2 className={Styles.posts__h2}>posts</h2>
				<NavLink to='/search' className={` ${Styles.posts__link} ${UI.link} `}>search</NavLink>
			</div>
			<div className={Styles.postItem}>
				<div className={Styles.postItem__imageContainer}>
					<img src={PostPhoto} alt='Super Save!' className={Styles.postPhoto} width='672' height='320' />
				</div>
				<h3 className={Styles.postTitle}>Fleury gets 19-save shutout for Golden Knights against Islanders</h3>
				<p className={Styles.postText}>
					Marc-Andre Fleury made 19 saves for his 60th NHL shutout, and the Vegas Golden Knights defeated the New York Islanders 1-0 at T-Mobile Arena on Saturday.
					</p>
				<p className={Styles.postText}>
					"It gets so frustrating when you allow that many goals," Fleury said about allowing nine goals his previous two starts. "I think there was some bad luck sometimes, but our team played very well defensively tonight."
					</p>
			</div>
		</div >
	)
}

export default Post;