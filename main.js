Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture (){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="blahh" src="'+data_uri+'">';
}
);
}
console.log("ml5 version : ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gHg-ueu3p/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is"+prediction1;
    speakdata2="And the second prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}