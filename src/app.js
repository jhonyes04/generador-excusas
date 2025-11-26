import 'bootstrap';
import './style.css';

import './assets/img/rigo-baby.jpg';
import './assets/img/4geeks.ico';

window.onload = function () {
    //write your code here
    let excuse = document.querySelector('#excuse');

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = [
        'beferoe the class',
        'when I was sleeping',
        'while I was exercising',
        'during my lunch',
        'while I whas playing',
    ];

    let template = '';

    template += `${who[Math.floor(Math.random() * 4)]} `;
    template += `${action[Math.floor(Math.random() * 4)]} `;
    template += `${what[Math.floor(Math.random() * 4)]} `;
    template += `${when[Math.floor(Math.random() * 4)]}`;

    excuse.innerHTML = template;
};
