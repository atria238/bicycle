
import imgToBackground from './modules/imageToBackground.js';
import menuToggle from './modules/menuToggle';
import slider from './modules/slider';
import forms from './modules/form';
import {smoothScrolling} from './modules/scrolling';


window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	imgToBackground();
	menuToggle();
	slider();
	forms();
	smoothScrolling('.inner-link');
});