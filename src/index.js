import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
    runtime.register()
        .then( registeration => console.log('sw registered'))
        .catch( err => console.log(err) );
}


import "./assets/fonts/dk-todo.eot";
import "./assets/fonts/dk-todo.svg";
import "./assets/fonts/dk-todo.ttf";
import "./assets/fonts/dk-todo.woff";

import "./assets/icons/android-chrome-192x192.png";
import "./assets/icons/android-chrome-512x512.png";
import "./assets/icons/apple-touch-icon.png";
import "./assets/icons/favicon-16x16.png";
import "./assets/icons/favicon-32x32.png";
import "./assets/icons/favicon.ico";
import "./assets/icons/mstile-150x150.png";




import './scss/main.scss';

import './js/weather';
import './js/date';
import './js/todo.controller';


import './mobile.styles.css';