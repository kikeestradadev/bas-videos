const videoFilterSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		let videoFilterSliderElement = document.querySelector('.video-filter-slider');
		let videoFilterSliderInstance = null;

		const initializeSlider = () => {
			if (window.innerWidth < 1024 && !videoFilterSliderInstance) {
				videoFilterSliderInstance = new Swiper('.video-filter-slider', {
					direction: 'horizontal',
					loop: false,
					allowThresholdMove: true,
					slidesPerView: 'auto',
					spaceBetween: 7,
					a11y: {
						enabled: true,
						slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
						slideRole: null, // Custom role for slide
					},
				});
			} else if (window.innerWidth >= 1024 && videoFilterSliderInstance) {
				videoFilterSliderInstance.destroy(true, true);
				videoFilterSliderInstance = null;
			}
		};

		// Initialize slider on load
		initializeSlider();

		// Reinitialize slider on window resize
		window.addEventListener('resize', () => {
			initializeSlider();
		});
	});
}

export default videoFilterSlider;
