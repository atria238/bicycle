import tns from './tiny-slider';

function slider () {

	let slider = tns({
		container: '.slider__inner',
		items: 1,
		slideBy: 1,
		center: true,
		mouseDrag: true,
		prevButton: '.slider__prev-arrow',
		nextButton: '.slider__next-arrow',
		navPosition: 'bottom',
	 });
}

export default slider;