console.log("Canvas Test");

var canvas = document.getElementById('test_canvas');
var cvs = canvas.getContext('2d');

// 網格函式
var check = function(mode){
    var start = mode.start;
    for(i=0;i<mode.count;i++){
        // 橫線
        cvs.beginPath();
        cvs.moveTo(40, start);
        cvs.lineTo(760, start);
        cvs.closePath();
        cvs.stroke();
        // 直線
        cvs.beginPath();
        cvs.moveTo(start, 40);
        cvs.lineTo(start, 760);
        cvs.closePath();
        cvs.stroke();
    
        start+=mode.spacing;
    }
}

var chess = {
    start: 69,
    spacing: 30,
    count: 23
};

var mincheck = {
    start: 49,
    spacing: 10,
    count: 70
}

var chess_arr = []; // 全部棋可放置的位置
var chess_black = []; // 黑棋
var chess_white = []; // 白旗

// Main Canvas 函式
function drawChess(p){
    cvs.clearRect(40, 40, 720, 720);
    cvs.fillStyle = 'rgb(206, 167, 40)';
    cvs.rect(40, 40, 720, 720);
    cvs.fill();
    cvs.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    check(chess);

    chess_arr.forEach(function(v, i){
        cvs.beginPath();
        cvs.strokeStyle = 'rgba(0, 0, 0, 0)';
        cvs.arc(v.x, v.y, 15, 0, 2*Math.PI);
        cvs.stroke();
        if(p && cvs.isPointInPath(p.x,p.y)){
            b_x = chess_arr[i].x;
            b_y = chess_arr[i].y;
            chess_black.push({x: b_x, y: b_y});
        }
    });
    if(chess_black.length > 0){
        chess_black.forEach(function(v, i){
            cvs.beginPath();
            cvs.fillStyle = 'black';
            cvs.arc(v.x, v.y, 14, 0, 2*Math.PI);
            cvs.fill();
        })
    }
}

// 取得事件碰觸的元素相對位置
function getEventPosition(ev){
    var x, y;
    if (ev.layerX || ev.layerX == 0) {
      x = ev.layerX;
      y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
      x = ev.offsetX;
      y = ev.offsetY;
    }
    return {x: x, y: y};
}

var startchess = {
    x: 69,
    y: 69
}
for(i=0;i<23;i++){
    for(j=0;j<23;j++){
        var cir_point = {
            x: startchess.x,
            y: startchess.y
        }
        chess_arr.push(cir_point);
        startchess.x += 30;
    }
    startchess.x = 69;
    startchess.y += 30;
}

// 方框
cvs.fillStyle = 'rgb(93, 235, 80)';
cvs.fillRect(25, 25, 750, 750);

drawChess();

canvas.addEventListener('click', function(e){
    p = getEventPosition(e);
    drawChess(p);
}, false);

console.log("Canvas Test Over");

