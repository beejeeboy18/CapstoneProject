//broswer support

window.SpeechRecognition = window.webkitSpeechRecognition || 
window.SpeechRecognition;

if('SpeechRecognition' in window){
	console.log("browser supported");
}else{
	console.log('browser not supported');
}

const recognition = new window.SpeechRecognition;