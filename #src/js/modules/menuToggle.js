function menuToggle () {
	const burgger = document.querySelector('.menu__burgger'),
			menu = document.querySelector('.menu__body'),
			content = document.body,
			toggleClass = function() {
				burgger.classList.toggle('menu__burgger-active');
				menu.classList.toggle('menu__body-active');
				content.classList.toggle('lock');
			};
			burgger.addEventListener('click', toggleClass);	
}
export default menuToggle;