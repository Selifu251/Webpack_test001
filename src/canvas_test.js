console.log("Canvas Test");

var canvas = document.getElementById('test_canvas');
var cvs = canvas.getContext('2d');

// 方框
cvs.fillStyle = 'rgb(93, 235, 80)';
cvs.fillRect(25, 25, 750, 750);
cvs.clearRect(40, 40, 720, 720);

cvs.strokeStyle = 'red';
var point = 69;
var count = 23;
for(i=0;i<count;i++){
    // 橫線
    cvs.beginPath();
    cvs.moveTo(40, point);
    cvs.lineTo(760, point);
    cvs.closePath();
    cvs.stroke();
    // 直線
    cvs.beginPath();
    cvs.moveTo(point, 40);
    cvs.lineTo(point, 760);
    cvs.closePath();
    cvs.stroke();

    point+=30;
}




console.log("Canvas Test Over");