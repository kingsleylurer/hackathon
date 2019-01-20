'use strict';

/*
 * hack to use es6 modules in extension
 */
const script = document.createElement('script');
const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
script.setAttribute('type', 'module');

