/*here start core layout ui scripts imports*/
import coreModule from './core-modules/coreModule';
/*here finish core layout ui scripts imports*/

/*here start internal layout ui components scripts imports*/
import internalModule from './internal-modules/internalModule';
import videoFilterSlider from './internal-modules/videoFilterSlider';
import searchFilter  from './internal-modules/searchFilter';
/*here finish internal layout ui components scripts imports*/

(() => {
	/*here start core layout ui scripts functions*/
    coreModule();
	internalModule();
	videoFilterSlider();
	searchFilter();
	/*here finish core layout ui scripts functions*/
})();

(() => {
	
})();
