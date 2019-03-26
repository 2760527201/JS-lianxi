
    var oBox = document.getElementById("div_huanfu");
    function getWidth(){
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        return w;
    }
    function getHeight(){
        var h= document.documentElement.clientHeight || document.body.clientHeight;
        return h;
    }
    //鼠标按下
    oBox.onmousedown = function (event) {
        var e = event || window.event;
        //点击的坐标距离盒子本身的距离
        var disX = e.clientX - oBox.offsetLeft;
        var disY = e.clientY - oBox.offsetTop;
        document.onmousemove = function (event) {
            var e = event || window.event;
            var l = e.clientX - disX;
            var t = e.clientY - disY;
            if(t <= 0){
                t = 0;
            }
            if(l <= 0){
                l = 0;
            }
            if(l > getWidth() - oBox.offsetWidth){
                l = getWidth() - oBox.offsetWidth;
            }
            if(t > getHeight() - oBox.offsetHeight){
                t = getHeight() - oBox.offsetHeight;
            }
            oBox.style.left = l + "px";
            oBox.style.top = t + "px";
            oBox.style.margin = "0";
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }