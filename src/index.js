import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import postPhotos from './img/images';


let postsArray = [{
      // src: postPhotos[0],
      alt: 'Maf Photo 1',
      title: 'Fleury gets 31-save shutout for Golden Knights against Islanders',
      paragraph1: 'Marc-Andre Fleury made 19 saves for his 60th NHL shutout, and the Vegas Golden Knights defeated the New York Islanders 1-0 at T-Mobile Arena on Saturday.',
   },
   {
      // src: '../../img/profile/photo__maf_2.jpg',
      alt: 'Maf Photo 2',
      title: 'Fleury gets 19-save shutout for Golden Knights against Islanders',
      paragraph1: 'MAF made 19 saves for his 60th NHL shutout, and the Vegas Golden Knights defeated the New York Islanders 1-0 at T-Mobile Arena on Saturday.',
   }
]

ReactDOM.render( < App postsData = { postsArray }
      /> , document.getElementById('root'));

      // If you want your app to work offline and load faster, you can change
      // unregister() to register() below. Note this comes with some pitfalls.
      // Learn more about service workers: https://bit.ly/CRA-PWA
      serviceWorker.unregister();