/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var coreModule = function coreModule() {
  console.log('Hola Core Module');
};
/* harmony default export */ __webpack_exports__["default"] = (coreModule);

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var internalModule = function internalModule() {
  console.log('Hola internal Module');
};
/* harmony default export */ __webpack_exports__["default"] = (internalModule);

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var videoFilterSlider = function videoFilterSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var videoFilterSliderElement = document.querySelector('.video-filter-slider');
    var videoFilterSliderInstance = null;
    var initializeSlider = function initializeSlider() {
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
            slideRole: null // Custom role for slide
          }
        });
      } else if (window.innerWidth >= 1024 && videoFilterSliderInstance) {
        videoFilterSliderInstance.destroy(true, true);
        videoFilterSliderInstance = null;
      }
    };

    // Initialize slider on load
    initializeSlider();

    // Reinitialize slider on window resize
    window.addEventListener('resize', function () {
      initializeSlider();
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (videoFilterSlider);

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var buttonFilterSlider = function buttonFilterSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.video-filter-buttons-slider', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 15,
      a11y: {
        enabled: true,
        slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
        slideRole: null // Custom role for slide
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (buttonFilterSlider);

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupButtonFilters: function() { return /* binding */ setupButtonFilters; },
/* harmony export */   setupInputFilter: function() { return /* binding */ setupInputFilter; }
/* harmony export */ });
var filterSelection = function filterSelection(c) {
  // Limpiar el input cuando se selecciona un botón
  var inputElement = document.querySelector('.video-filter__controls-input');
  if (inputElement) {
    inputElement.value = '';
  }
  var items = document.querySelectorAll('.video-filter__content-grid-item');
  if (c === 'all') c = '';
  items.forEach(function (item) {
    item.style.display = item.className.indexOf(c) > -1 ? 'block' : 'none';
  });
};
var setupInputFilter = function setupInputFilter() {
  var fnFilter = function fnFilter(inputElement, selectorContainer) {
    inputElement.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') e.target.value = '';

      // Limpiar la clase activa de los botones cuando se usa el input
      var activeButton = document.querySelector('.video-filter__controls-button.active');
      if (activeButton) {
        activeButton.classList.remove('active');
      }
      fnCompareElements(e.target.value.toUpperCase(), selectorContainer);
    });
  };
  var fnCompareElements = function fnCompareElements(filterText, selectorContainer) {
    var searchContainers = document.querySelectorAll(selectorContainer);
    searchContainers.forEach(function (container) {
      var title = container.querySelector('.video-filter__content-grid-item-title');
      var subTitle = container.querySelector('.video-filter__content-grid-item-sub-title');
      var textContent = '';
      if (title) textContent += title.textContent.toUpperCase() + ' ';
      if (subTitle) textContent += subTitle.textContent.toUpperCase();
      var searchTerms = filterText.split(' '); // Divide el texto en palabras separadas por espacios

      // Verificar si todas las palabras de búsqueda están presentes en el contenido del texto
      var isMatch = searchTerms.every(function (term) {
        return textContent.includes(term);
      });
      if (isMatch) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  };
  var inputElement = document.querySelector('.video-filter__controls-input');
  if (inputElement) {
    fnFilter(inputElement, '.video-filter__content-grid-item');
  } else {
    console.error('Input element with class "video-filter__controls-input" not found.');
  }
};
var setupButtonFilters = function setupButtonFilters() {
  var btnContainer = document.getElementById('myBtnContainer');
  if (!btnContainer) {
    console.error('Button container with id "myBtnContainer" not found.');
    return;
  }
  var btns = btnContainer.getElementsByClassName('video-filter__controls-button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      var current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      this.className += ' active';
      filterSelection(this.getAttribute('data-filter'));
    });
  }
};
document.addEventListener('DOMContentLoaded', function () {
  setupInputFilter();
  setupButtonFilters();
  filterSelection('all'); // Show all items by default
});


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var modalClose = function modalClose() {
  document.addEventListener("DOMContentLoaded", function () {
    var modals = document.querySelectorAll('.modal');
    var videos = document.querySelectorAll('video');
    modals.forEach(function (modal, index) {
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
        var backdrop = document.querySelector('.modal-backdrop');
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
    gridItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var target = this.getAttribute('data-bs-target');
        var modalElement = document.querySelector(target);
        var modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (modalClose);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_modules_coreModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _internal_modules_internalModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _internal_modules_videoFilterSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _internal_modules_buttonFilterSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _internal_modules_searchFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _internal_modules_modalClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/*here start core layout ui scripts imports*/

/*here finish core layout ui scripts imports*/

/*here start internal layout ui components scripts imports*/






/*here finish internal layout ui components scripts imports*/

(function () {
  /*here start core layout ui scripts functions*/
  (0,_core_modules_coreModule__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_internal_modules_internalModule__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_internal_modules_videoFilterSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_internal_modules_buttonFilterSlider__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_internal_modules_modalClose__WEBPACK_IMPORTED_MODULE_5__["default"])();
  document.addEventListener('DOMContentLoaded', function () {
    (0,_internal_modules_searchFilter__WEBPACK_IMPORTED_MODULE_4__.setupInputFilter)();
    (0,_internal_modules_searchFilter__WEBPACK_IMPORTED_MODULE_4__.setupButtonFilters)();
  });
  /*here finish core layout ui scripts functions*/
})();
(function () {})();
}();
/******/ })()
;
//# sourceMappingURL=index-dist.js.map