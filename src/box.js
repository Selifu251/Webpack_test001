function showWidth(){
    var box = document.getElementById("box");
    // 取得當前尺寸設定
    var styles = window.getComputedStyle(box);
    var size_w = styles.getPropertyValue("width");
    var size_h = styles.getPropertyValue("height");
    var size = 0;

    size_w = parseInt(size_w);
    size_h = parseInt(size_h);
    

    var animed = window.setInterval(function(){
        if(size>=30){
            window.clearInterval(animed);
            return;
        }
        size+=2;
        size_w+=size;
        size_h+=size;
        box.style.width = size_w+"px";
        box.style.height = size_h+"px";
    }, 20);
};

window.showWidth = showWidth;