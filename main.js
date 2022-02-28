function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Wyh6knlQU/model.json', modelReady);
}

function modelReady(){
    console.log("modelReady");
    classifier.classify(gotResults);
}