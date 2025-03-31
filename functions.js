function resize() {
	if (document.zeobject) {
		//alert(document.layers);
		//alert(document.zeobject.width + " - "+ document.body.clientWidth + "-"+document.body.scrollWidth + " + " +screen.availWidth);
		//window.screen.width = document.zeobject.width;

		var w = eval(document.zeobject.width);
		var h = eval(document.zeobject.height);
		//self.resizeTo(document.body.scrollWidth, document.body.scrollHeight);
	
	//window.outerWidth = document.zeobject.width;
	//window.outerHeight = document.zeobject.height;
	//alert(document.body.clientWidth);
	
	}
}
function wopen(winurl,winfeatures) {
	ss = window.open(winurl, "ska", winfeatures);
	setTimeout('ss.focus();', 250);
}

  /*
	function resizing () {
	
		if (document.body.clientWidth || document.body.clientHeight){ 
			docwidth = document.body.clientWidth; 
			reddiv = document.getElementById("red");
			headdiv = document.getElementById("headline");
			cont = document.getElementById("content");
			if (docwidth<950) {
				reddiv.style.width = "950px";
				headdiv.style.width = "950px";
				cont.style.width = "950px";
			} else if (navigator.appName != "Netscape") {
				reddiv.style.width = docwidth;
				headdiv.style.width = docwidth;		
				cont.style.width = docwidth;
				//alert(navigator.appName);
			} else {
				reddiv.style.width = "auto";
				headdiv.style.width = "auto";		
				cont.style.width = "auto";
			}
		}
	}
	
	/* */
