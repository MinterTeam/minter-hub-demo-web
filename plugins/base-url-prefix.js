import Vue from 'vue';
import {APP_BASE_URL} from '~/assets/variables.js';

console.log({APP_BASE_URL, BASE_URL_PREFIX: APP_BASE_URL.replace(/\/$/, ''),})
console.log('process.env.APP_BASE_URL', process.env.APP_BASE_URL)

Vue.mixin({
    computed: {
        BASE_URL_PREFIX: () => APP_BASE_URL.replace(/\/$/, ''),
    },
});
