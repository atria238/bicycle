
function ibg(){

	let ibg=document.querySelectorAll(".imgBg");
		for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

function menuToggle () {
	const burgger = document.querySelector('.menu__burgger'),
			menu = document.querySelector('.menu__body'),
			content = document.body;
	
			burgger.addEventListener('click', () => {
				burgger.classList.toggle('menu__burgger-active');
				menu.classList.toggle('menu__body-active');
				content.classList.toggle('lock');
			});
}
menuToggle();