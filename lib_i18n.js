// Initializing the i18Next Js library. 

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "name": "Sukhsagar Singh",
      	"dob" : "04 December, 1993",
      	"studiedAt": "Guru Nanak Dev university",
		"currentPosition": "Chief Convener at TSS",
		"profession": "Web Developer"      	
      }
    },
    pbi: {
      translation: {
        "name": "ਸੁੱਖਸਗਰ ਸਿੰਘ",
      	"dob" : "04 ਦਸੰਬਰ, 1993",
      	"studiedAt": "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ",
		"currentPosition": "TSS ਵਿਖੇ ਮੁੱਖ ਕਨਵੀਨਰ",
		"profession": "ਵੈੱਬ ਡਿਵੈਲਪਰ"
      }
    }
  }
}, function(err, t) {
  updateContent();
});

// Function for updating the content of the webpage.
function updateContent() {

	let translatingElementsArr = document.querySelectorAll('[translate]');
  	translatingElementsArr.forEach(function(element){
  		let key = element.innerHTML;
  		element.style.display="none";
    	let translatedElement = document.getElementById(key);
    	if(translatedElement===undefined||translatedElement===null){
    		translatedElement =  document.createElement(element.tagName);
    		translatedElement.setAttribute("id", key);
    		element.parentNode.appendChild(translatedElement);
    	}
    	translatedElement.innerHTML = i18next.t(key);
    	translatedElement.style.display="block";
    });
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});