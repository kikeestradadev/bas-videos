const modalClose = () => {
	document.addEventListener("DOMContentLoaded", function() {
		var modals = document.querySelectorAll('.modal');
		var videos = document.querySelectorAll('video');
		
		modals.forEach((modal, index) => {
			var video = videos[index];
		
			modal.addEventListener('shown.bs.modal', function () {
			video.muted = false; // Unmute the video
			video.play();
			});
		
			modal.addEventListener('hidden.bs.modal', function () {
			video.pause();
			video.currentTime = 0;
			video.muted = true; // Mute the video again
			// Ensure modal-backdrop is removed when modal is closed
			const backdrop = document.querySelector('.modal-backdrop');
			if (backdrop) {
				backdrop.parentNode.removeChild(backdrop);
			}
		
			// Ensure body overflow is reset when modal is closed
			document.body.style.overflow = '';
			document.body.classList.remove('modal-open');
			});
		});
		
		// Add event listeners to the grid items to open modals
		var gridItems = document.querySelectorAll('.video-filter__content-grid-item');
		gridItems.forEach(item => {
			item.addEventListener('click', function() {
			var target = this.getAttribute('data-bs-target');
			var modalElement = document.querySelector(target);
			var modalInstance = new bootstrap.Modal(modalElement);
			modalInstance.show();
			});
		});
	});	  
};
export default modalClose 
