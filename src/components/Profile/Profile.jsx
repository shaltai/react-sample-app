import React from 'react';
import Styles from './Profile.module.css';
import Avatar from '../../img/profile/photo__maf_1.jpg';
import Photo from '../../img/profile/photo__maf_2.jpg';
import Post from '../Post/Post';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';

function Profile(props) {

	let postsElements = props.posts.map(posts => <Post photoId={posts.photoId} title={posts.title} paragraph1={posts.paragraph1} />)

	return (
		<div className={Styles.content}>

			{/* Gallery Preview */}
			<div className={Styles.gallery_preview}>
				<div className={Styles.avatarContainer}>
					<img src={Avatar} alt='avatar' className={Styles.avatar} width='320' height='280' />
				</div>
				<div className={Styles.gallery__heading}>
					<h2 className={Styles.gallery__h2}>photos</h2>
					<NavLink to='/profile-gallery' className={` ${Styles.gallery__link} ${UI.link} `}>more photos</NavLink>
				</div>
				<div className={Styles.galleryWrapper}>
					<div className={Styles.gallery__photos}>
						<img src={Photo} alt='all-star interview' className={Styles.gallery__photo} width='320' height='208' />
						<img src={Photo} alt='all-star interview' className={Styles.gallery__photo} width='320' height='208' />
						<img src={Photo} alt='all-star interview' className={Styles.gallery__photo} width='320' height='208' />
					</div>
				</div>
			</div>

			{/* Information */}
			<div className={Styles.info}>
				<div className={` ${Styles.info__heading} ${Styles.heading} `}>
					<h1 className={Styles.info__h1}>marc-andre fleury</h1>
					<NavLink to='/profile-gallery' className={` ${Styles.info__link} ${UI.link} `}>more info</NavLink>
				</div>
				<dl className={Styles.info__list}>
					<ListItem className={Styles.info__listItem} term='birthday' definition='november 28, 1985' />
					<ListItem className={Styles.info__listItem} term='current city' definition='vegas' />
					<ListItem className={Styles.info__listItem} term='hometown' definition='sorel-tracy' />
					<ListItem className={Styles.info__listItem} term='phone' definition='1 541 754-3010' />
					<ListItem className={Styles.info__listItem} term='relationship' definition='married' />
					<ListItem className={Styles.info__listItem} term='company' definition='vegas golden nights' />
					<ListItem className={Styles.info__listItem} term='education' definition='college-français rive-sud' />
					<ListItem className={Styles.info__listItem} term='languages' definition='francias, english' />
					<ListItem className={Styles.info__listItem} term='friends' definition='472' />
					<ListItem className={Styles.info__listItem} term='communities' definition='48 groups' />
					<ListItem className={Styles.info__listItem} term='videos' definition='2 237 clips' />
					<ListItem className={Styles.info__listItem} term='audio' definition='245 compositions' />
				</dl>
			</div>

			{/* Posts */}

			<div className={Styles.posts}>
				<div className={` ${Styles.posts__heading} ${Styles.heading} `}>
					<h2 className={Styles.posts__h2}>posts</h2>
					<NavLink to='/search' className={` ${Styles.posts__link} ${UI.link} `}>search</NavLink>
				</div>
				{/* <Post filename={'/img/profile/photo__maf-4.jpg'} title='Fleury gets 19-save shutout for Golden Knights against Islanders' alt='Super Save!' paragraph1='Marc-Andre Fleury made 19 saves for his 60th NHL shutout, and the Vegas Golden Knights defeated the New York Islanders 1-0 at T-Mobile Arena on Saturday.' paragraph2='"It gets so frustrating when you allow that many goals," Fleury said about allowing nine goals his previous two starts. "I think there was some bad luck sometimes, but our team played very well defensively tonight."' /> */}
				{/* <Post /> */}
				{postsElements}
			</div>

			{/* Add post */}
			<div className={Styles.addPost}>
				<h2 className={Styles.addPost__h2}>add post</h2>
				<input className={Styles.addPost__inputText} type="text" placeholder="write something" />
				<input className={Styles.addPost__inputSubmit} type="submit" value="post it" />
			</div>
		</div>
	)
}

export default Profile;