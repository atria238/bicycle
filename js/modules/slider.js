function slider() {
	const
		 togglePrev = document.querySelector('.slider__prev-arrow'),
		 toggleNext = document.querySelector('.slider__next-arrow'),
		 sliderWrapper = document.querySelector('.slider__wrapper'),
		 sliderField = document.querySelector('.slider__field'),
		 dotsWrapper = document.querySelector('.slider__dots');
		 
	let allSlide = document.querySelectorAll('.slider__slide'),
		 widthWrapper = window.getComputedStyle(sliderWrapper).width,
		 lastSlide = allSlide[allSlide.length - 1],
		 firstSlide = allSlide[0],
		 cloneLastSlide = lastSlide.cloneNode(true),
		 cloneFirstSlide = firstSlide.cloneNode(true),
		 index = 1,
		 counterSlider = 1,
		 offset = deliteNotDigit(widthWrapper),
		 allowShift = true;

	for(let i = 1; i <= allSlide.length; i++) {
		 dotsWrapper.innerHTML += `<div data-dot = '${i}' class = 'dot'></div>`; 
	}
	
	const dots = document.querySelectorAll('.dot');

	sliderField.append(cloneFirstSlide);
	sliderField.prepend(cloneLastSlide);

	allSlide = document.querySelectorAll('.slider__slide');

	function setWidthSliderField () {
		allSlide.forEach(slide => slide.style.width = widthWrapper);
		
		sliderField.style.width = `${100 * allSlide.length}%`;
		sliderField.style.display = 'flex';
	}

	setWidthSliderField ();

	window.addEventListener('resize', () => {
	
		widthWrapper = window.getComputedStyle(sliderWrapper).width;
		offset = deliteNotDigit(widthWrapper);
		setWidthSliderField ();
		sliderField.style.transform = `translateX(-${offset}px)`;

	});

	sliderField.style.transform = `translateX(-${offset}px)`;
	document.querySelector(`[data-dot = '${counterSlider}' ]`).classList.add('activeDot');

	function toggleSlide () {
			  sliderField.classList.add('shiftSlide');
			  sliderField.style.transform = `translateX(-${offset}px)`;
	}

	function deliteNotDigit(str){
		 return Math.round(+str.replace(/[A-Za-z]/g, '')) ;
	}

	sliderField.addEventListener('transitionend', () => {

		 sliderField.classList.remove('shiftSlide');

		 if(index == allSlide.length - 1){
				index = 1;
				offset = deliteNotDigit(widthWrapper);
				sliderField.style.transform = `translateX(-${offset}px)`;
		
		 }else if(index == 0){
			  index = allSlide.length - 2;
			  offset = deliteNotDigit(widthWrapper) * (allSlide.length - 2);
			  sliderField.style.transform = `translateX(-${offset}px)`;
		 }

		 allowShift = true;
	});

	toggleNext.addEventListener('click', () => {
		if(allowShift){
		 ++index;
		 offset += deliteNotDigit(widthWrapper);

		 ++counterSlider;
		 
		 if(counterSlider == allSlide.length - 1 ){
				counterSlider = 1;
		 }
		 
		 toggleSlide ();
		 dots.forEach(dot => dot.classList.remove('activeDot'));
		 document.querySelector(`[data-dot = '${counterSlider}' ]`).classList.add('activeDot'); 

		 allowShift = false;
		}
	});

	
	togglePrev.addEventListener('click', () => {   
	 if(allowShift){
		 --index; 
		 offset -= deliteNotDigit(widthWrapper);
		 
		 --counterSlider;
		 
		 if(counterSlider == 0){
			  counterSlider = allSlide.length - 2;
		 }
		 
		 toggleSlide ();
		 dots.forEach(dot => dot.classList.remove('activeDot'));
		 document.querySelector(`[data-dot = '${counterSlider}' ]`).classList.add('activeDot');
	 }
	 allowShift = false;
	});

	dots.forEach(dot => {
			  dot.addEventListener('click', (e) => {
					dots.forEach(dot => dot.classList.remove('activeDot'));
					
					e.target.classList.add('activeDot');

					const target = e.target.getAttribute("data-dot");

					counterSlider = +target;
					index = +target;
					offset = deliteNotDigit(widthWrapper) * (target);
					toggleSlide();
			  });
			  
	});
}
export default slider;