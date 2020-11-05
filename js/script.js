import appendPolyfill from './modules/appendPolyfill';
import prependPolyfill from './modules/prependPolyfill';
import imgToBackground from './modules/imgToBackground';
import menuToggle from './modules/menuToggle';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

	appendPolyfill([Element.prototype, Document.prototype, DocumentFragment.prototype]);
	prependPolyfill([Element.prototype, Document.prototype, DocumentFragment.prototype]);
	imgToBackground();
	menuToggle();
	slider();
});