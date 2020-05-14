// JavaScript Document
var navdddisabled = 0;
var nav2disabled = 0;
if ( window.addEventListener ) {
    window.addEventListener('message', handleMessage, false);
} else if ( window.attachEvent ) { // ie8
    window.attachEvent('onmessage', handleMessage);
}
function handleMessage(e) {
    if (e.data == 'login') {
        document.getElementById("hlcta").innerHTML = "All of your <span class=\"highlight\">horticultural</span><br> requirements.";
		document.getElementById("hlcta").classList.remove("signup");
		document.getElementById("hlcta").classList.add("login");
		document.getElementById("signup-frame").contentWindow.postMessage("login","*");
    }

	else if (e.data=='signup') {
		document.getElementById("hlcta").innerHTML = "Sign up today to gain instant access to our <span class=\"highlight\">comprehensive</span><br> range of horticultural products.";
		document.getElementById("hlcta").classList.add("signup");
		document.getElementById("hlcta").classList.remove("login");
		document.getElementById("signup-frame").contentWindow.postMessage("signup","*");
	}
}
function dropdown (number) {
	if(number==1){
		if (navdddisabled==1) {
			$('#caret-1').attr('style','transform:rotate(180deg)');
			$('.dropdown').addClass('show');
			navdddisabled = 0;
		}
		else {
			$('#caret-1').removeAttr('style','transform:rotate(180deg)');
			$('.dropdown').removeClass('show');
			navdddisabled = 1;
		}
	}
	if(number==2){
		if (navdddisabled==1) {
			$('#caret-2').attr('style','transform:rotate(180deg)');
			$('.dropdown2').addClass('show');
			navdddisabled = 0;
		}
		else {
			$('#caret-2').removeAttr('style','transform:rotate(180deg)');
			$('.dropdown2').removeClass('show');
			navdddisabled = 1;
		}
	}

}


