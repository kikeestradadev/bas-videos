const buttonFilterSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		new Swiper('.video-filter-buttons-slider', {
		direction: 'horizontal',
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 15,
		a11y: {
			enabled: true,
			slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
			slideRole: null, // Custom role for slide
		},
		});
	});
}

export default buttonFilterSlider;
