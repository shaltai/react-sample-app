import React from 'react';
import Styles from './Profile.module.css';
import MenuSection from '../MenuSection/MenuSection';
// import MenuSectionItem from '../MenuSectionItem/MenuSectionItem';
import Avatar from '../../img/profile/photo__maf_1.jpg';
import Photo from '../../img/profile/photo__maf_2.jpg';
import Post from '../Post/Post';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';

let menuSectionArray = [
	{ index: 0, menuSectionTitle: 'add to friendlist', menuSectionUrl: '/addfriend' },
	{ index: 1, menuSectionTitle: 'write message', menuSectionUrl: '/message' },
	{ index: 2, menuSectionTitle: 'notify about posts', menuSectionUrl: '/notify' },
	{ index: 3, menuSectionTitle: 'invite to community', menuSectionUrl: '/invite' },
	{ index: 4, menuSectionTitle: 'remove from feed', menuSectionUrl: '/remove' },
];

function Profile(props) {
	let postsElements = props.postsData.map((postsItems, index) => (
		<Post key={index} title={postsItems.title} paragraph1={postsItems.paragraph1} />
	));

	return (
		<div className={UI.content}>
			<MenuSection menuSectionItems={menuSectionArray} />

			<div className={Styles.profile}>
				{/* Gallery Preview */}
				<div className={Styles.gallery_preview}>
					<div className={Styles.avatarContainer}>
						<img src={Avatar} alt='avatar' className={Styles.avatar} width='320' height='280' />
					</div>
					<div className={Styles.gallery__heading}>
						<h2 className={Styles.gallery__h2}>photos</h2>
						<NavLink to='/profile-gallery' className={` ${Styles.gallery__link} ${UI.link} `}>
							more photos
						</NavLink>
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
						<NavLink to='/profile-gallery' className={` ${Styles.info__link} ${UI.link} `}>
							more info
						</NavLink>
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
						<NavLink to='/search' className={` ${Styles.posts__link} ${UI.link} `}>
							search
						</NavLink>
					</div>
					{postsElements}
				</div>

				{/* Add post */}
				<div className={Styles.addPost}>
					<h2 className={Styles.addPost__h2}>add post</h2>
					<input className={Styles.addPost__inputText} type='text' placeholder='write something' />
					<input className={Styles.addPost__inputSubmit} type='submit' value='post it' />
				</div>
			</div>
		</div>
	);
}

export default Profile;
