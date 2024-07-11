const filterSelection = (c) => {
	// Limpiar el input cuando se selecciona un botón
	const inputElement = document.querySelector('.video-filter__controls-input');
	if (inputElement) {
		inputElement.value = '';
	}

	const items = document.querySelectorAll('.video-filter__content-grid-item');
	if (c === 'all') c = '';
	items.forEach(item => {
		item.style.display = item.className.indexOf(c) > -1 ? 'block' : 'none';
	});
	};

	const setupInputFilter = () => {
	const fnFilter = (inputElement, selectorContainer) => {
		inputElement.addEventListener('keyup', e => {
		if (e.key === 'Escape') e.target.value = '';

		// Limpiar la clase activa de los botones cuando se usa el input
		const activeButton = document.querySelector('.video-filter__controls-button.active');
		if (activeButton) {
			activeButton.classList.remove('active');
		}
		fnCompareElements(e.target.value.toUpperCase(), selectorContainer);
		});
	};

	const fnCompareElements = (filterText, selectorContainer) => {
		let searchContainers = document.querySelectorAll(selectorContainer);

		searchContainers.forEach(container => {
		const title = container.querySelector('.video-filter__content-grid-item-title');
		const subTitle = container.querySelector('.video-filter__content-grid-item-sub-title');
		let textContent = '';

		if (title) textContent += title.textContent.toUpperCase() + ' ';
		if (subTitle) textContent += subTitle.textContent.toUpperCase();

		let searchTerms = filterText.split(' ');  // Divide el texto en palabras separadas por espacios

		// Verificar si todas las palabras de búsqueda están presentes en el contenido del texto
		let isMatch = searchTerms.every(term => textContent.includes(term));

		if (isMatch) {
			container.style.display = 'block';
		} else {
			container.style.display = 'none';
		}
		});
	};

	const inputElement = document.querySelector('.video-filter__controls-input');
	if (inputElement) {
		fnFilter(inputElement, '.video-filter__content-grid-item');
	} else {
		console.error('Input element with class "video-filter__controls-input" not found.');
	}
	};

	const setupButtonFilters = () => {
	const btnContainer = document.getElementById('myBtnContainer');
	if (!btnContainer) {
		console.error('Button container with id "myBtnContainer" not found.');
		return;
	}
	const btns = btnContainer.getElementsByClassName('video-filter__controls-button');
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function () {
		const current = document.getElementsByClassName('active');
		if (current.length > 0) {
			current[0].className = current[0].className.replace(' active', '');
		}
		this.className += ' active';
		filterSelection(this.getAttribute('data-filter'));
		});
	}
	};

	

	document.addEventListener('DOMContentLoaded', () => {
	setupInputFilter();
	setupButtonFilters();
	filterSelection('all'); // Show all items by default
	});
export { setupInputFilter, setupButtonFilters };
