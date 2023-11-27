'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello World!',
            img: 'https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png',
            alt: 'Vue Js Logo',
        }
    }
}).mount('#app');