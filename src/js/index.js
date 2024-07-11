/*here start core layout ui scripts imports*/
import coreModule from './core-modules/coreModule';
/*here finish core layout ui scripts imports*/

/*here start internal layout ui components scripts imports*/
import internalModule from './internal-modules/internalModule';
import videoFilterSlider from './internal-modules/videoFilterSlider';
import buttonFilterSlider from './internal-modules/buttonFilterSlider';
import { setupInputFilter, setupButtonFilters } from './internal-modules/searchFilter';
import modalClose from './internal-modules/modalClose';

/*here finish internal layout ui components scripts imports*/

(() => {
	/*here start core layout ui scripts functions*/
    coreModule();
	internalModule();
	videoFilterSlider();
	buttonFilterSlider();
	modalClose();
	document.addEventListener('DOMContentLoaded', () => {
		setupInputFilter();
		setupButtonFilters();
	  });
	/*here finish core layout ui scripts functions*/
})();

(() => {
	
})();
