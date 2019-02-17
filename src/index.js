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

import './scss/main.scss';

import './js/weather';
import './js/date';
import './js/todo.controller';