import React from 'react';
import Styles from './Profile.module.css';

function Profile() {
	return (
		<div className={Styles.content}>
			<div className={Styles.cover}></div>
			<div className={Styles.block}>
				<img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Avatar" className={Styles.avatar} />
				<div className={Styles.info}>
					Personal Information
				</div>
			</div>
			<div className="Posts-block">
				<div className="New-post">
					New Post Input
				</div>
				<div className="Post">
					Posts
				</div>
			</div>
		</div>
	)
}

export default Profile;