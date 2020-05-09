import React from 'react';
import Styles from './Post.module.css';
import PostPhoto from '../../img/profile/photo__maf_4.jpg';

function Post(props) {
	return (
		<div className={Styles.content}>
			<div className={Styles.postItem}>
				<div className={Styles.postItem__imageContainer}>
					<img src={PostPhoto} alt={props.alt} className={Styles.postPhoto} width='672' height='320' />
				</div>
				<h3 className={Styles.postTitle}>{props.title}</h3>
				<p className={Styles.postText}>{props.paragraph1}</p>
				<p className={Styles.postText}>{props.paragraph2}</p>
			</div>
		</div>
	);
}

export default Post;
