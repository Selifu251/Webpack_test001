import $ from 'jquery';

console.log("box.js Into");

var box = document.getElementById("box");
var styles = window.getComputedStyle(box);
var size_w = styles.getPropertyValue("width");
var size_h = styles.getPropertyValue("height");

size_w = parseInt(size_w);
size_h = parseInt(size_h);

$("#box").mouseover(function(){
    var size = 0;
    var boxbig = window.setInterval(function(){
        if(size>=20){
            window.clearInterval(boxbig);
            return;
        }
        size+=2;
        size_w+=size;
        size_h+=size;
        box.style.width = size_w+"px";
        box.style.height = size_h+"px";
    },20);
});

$("#box").mouseout(function(){
    var size = 0;
    var boxsmall = window.setInterval(function(){
        if(size>=20){
            window.clearInterval(boxsmall);
            return;
        }
        size+=2;
        size_w-=size;
        size_h-=size;
        box.style.width = size_w+"px";
        box.style.height = size_h+"px";
    },20);
});