// JavaScript Document
function catalogue() {
	window.parent.location.href = "../catalogue";
}
function loginfollow(){
	window.parent.postMessage("login","*");
}
function signupfollow(){
	window.parent.postMessage("signup","*");
}
window.onmessage = function(e){
    if (e.data == 'login') {
	location.href="../inc/login.html";
    }

	else if (e.data=='signup') {
	location.href="../inc/signup.html";

	}
};

