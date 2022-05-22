const app = document.querySelector("#app");
const startBtn = document.querySelector("#start-button");
const stopBtn = document.querySelector("#stop-button");
let started = false;

 
// The captured frame's width x height in pixels
const width = 640;
const height = 480;



const faceMode = affdex.FaceDetectorMode.LARGE_FACES;

//Construct a CameraDetector and specify the image width / height and face detector mode.
const detector = new affdex.CameraDetector(app, width, height, faceMode);

// Track smiles
detector.detectExpressions.smile = true;
// Track joy emotion
detector.detectEmotions.joy = true;
// Detect person's gender
detector.detectAppearance.gender = true;


detector.detectAllEmotions();

detector.detectAllExpressions();

startBtn.addEventListener("click", function () {
    if (!started) {
        started = true;
        detector.start();
    }
});

 
stopBtn.addEventListener("click", function () {
    if (started) {
        started = false;
        detector.stop();
        const headers = {
            time: 'Time',
            gender: 'Gender',
            anger: 'Anger',
            disgust: 'Disgust',
            fear: 'Fear',
            joy: 'Joy',
            sadness: 'Sadness',
            surprise: 'Surprise',
            attention: 'Attention',
            eyeClosure: 'EyeClosure',
            jawDrop: 'jawDrop',
            mouthOpen: 'MouthOpen',
            smile: 'Smile',
        }
        exportCSVFile(headers, data, 'FinalResult');
    }
});

 
detector.addEventListener("onInitializeSuccess", function() {
    console.log('Initialized successfully');
});

detector.addEventListener("onInitializeFailure", function() {
    console.log('Initialization failed');
});

 

detector.addEventListener("onWebcamConnectSuccess", function() {
    console.log("Camera connection successfull.");
});

detector.addEventListener("onWebcamConnectFailure", function() {
    console.log("Camera connection Failed! :(");
});


const data = [];

detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {

    if (faces.length) {
        const face = faces[0];
        console.log(face);

        results.innerHTML = `
            <p>Gender : ${face.appearance.gender}</p>
            <p>Joy : ${face.emotions.joy}</p>
            <p>Smile : ${face.expressions.smile}</p>
            <p>JawDrop : ${face.expressions.jawDrop}</p>
        `;

        myChart.data.datasets.forEach((dataset) => {
            dataset.data = [
                face.emotions.anger,
                face.emotions.disgust,
                face.emotions.fear,
                face.emotions.joy,
                face.emotions.sadness,
                face.emotions.surprise
            ];

        });

        myChart.update();
        const now = new Date();

        data.push({
            time: now.getTime(),
            gender: face.appearance.gender,
            anger: face.emotions.anger,
            disgust: face.emotions.disgust,
            fear: face.emotions.fear,
            joy: face.emotions.joy,
            sadness: face.emotions.sadness,
            surprise: face.emotions.surprise,          
            attention: face.expressions.attention,
            eyeClosure: face.expressions.eyeClosure,
            jawDrop: face.expressions.jawDrop,
            mouthOpen: face.expressions.mouthOpen,
            smile: face.expressions.smile,
        });
    }
});


detector.addEventListener("onImageResultsFailure", function (image, timestamp, err_detail) {});

function convertToCSV(objArray) {
    var array = objArray;
    var str = '';
    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') {
                line += ',';
            }
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

//Use if only required! ~ Export JSON to CSV

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }
    var csv = convertToCSV(items);
    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Anger 😡', 'Disgust 😒', 'Fear 😱', 'Joy 😂', 'Sadness 😢', 'Surprise 😲'],
        // labels: ['😡', '😒', '😱', '😂', '😢', '😲'],
        datasets: [{
            label: 'Probability on the scale of 0-100',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(181, 34, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(182, 245, 66, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(182, 245, 66, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
