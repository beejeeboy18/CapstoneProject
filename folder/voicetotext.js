

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

let finalTranscript = '';
let recognition = new window.SpeechRecognition();

recognition.interimResult = true;
recognition.maxAlternatives = 10;
recognition.continous = true;

//trigger the start of recording

recognition.onresult = (event) => {
	let interimTranscrip = '';
	for(let i = event.resultIndex, len = event.results.length; i < len;i++){
		let transcript = event.results[i][0].transcript;
		if(event.results[i].isFinal){
			finalTranscript+=transcript;
		}else{
			interimTranscrip+=transcript;
		}
	}
	document.querySelector('body').innerHTML = finalTranscript+'<i style = "color:#ddd>'+interimTranscrip+'</>';
	var speech = new SpeechSynthesisUtterance();
		if(finalTranscript.includes('hello'))
			speech.("hi");
			window.SpeechSynthesis.speak(speech);
}
recognition.start();