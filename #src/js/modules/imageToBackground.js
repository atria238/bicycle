import isIE from './isIE';

function ibg(){
	const ibg = document.querySelectorAll('.img-bg');
	
	for (var i = 0; i < ibg.length; i++) {

		if(isIE()){

			if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				ibg[i].querySelector('img').style.width = '0px';
				ibg[i].querySelector('img').style.height = '0px';

			}
		}else if(ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null){
			
			// ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
			ibg[i].querySelector('img').style.width = '';
			ibg[i].querySelector('img').style.height = '';
		}	
	}
}
export default ibg; 
