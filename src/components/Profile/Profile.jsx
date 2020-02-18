import React from 'react';
import Styles from './Profile.module.css';
import Avatar from '../../img/profile/photo__maf-1.jpg';
import Photo from '../../img/profile/photo__maf-2.jpg';
import UI from '../UI/UI.module.css';
import { NavLink } from 'react-router-dom';

function Profile() {
	return (
		<div className={Styles.content}>

			{/* Gallery Preview */}
			<div className={Styles.gallery_preview}>
				<div className={Styles.avatarContainer}>
					<img src={Avatar} alt='avatar' className={Styles.avatar} width='320' height='280' />
				</div>
				<div className={Styles.gallery__heading}>
					<h2 className={Styles.heading_2}>photos</h2>
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
				<h1 className={Styles.heading_1}>marc-andre fleury</h1>
				<ul className={Styles.info__list}>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
					<li className={Styles.info__listItem}></li>
				</ul>
				<dl>
					<dt>

					</dt>
					<dd>

					</dd>
				</dl>
			</div>
		</div >
	)
}

export default Profile;