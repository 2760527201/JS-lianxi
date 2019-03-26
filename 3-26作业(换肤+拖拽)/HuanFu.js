//换肤
var odianji = document.getElementById("HuanFu");
var ogb = document.getElementById("Er_GuanBi");
var oHuanFu = document.getElementById("div_huanfu");
var oli = document.getElementsByClassName("ul-li_img");
var oZheZhao = document.getElementById("inner");
console.log(oli);
var odaby = document.getElementsByTagName("body")[0];
var currentIndex = 0;
ogb.onclick = function () {
    oHuanFu.style.display = "none";
    oZheZhao.style.display = "none";
}
odianji.onclick = function () {
    oHuanFu.style.display = "block";
    oZheZhao.style.display = "block";
}
function Hf(index){
    var src = oli[index].src;
    console.log(src)
    odaby.style.background = "url(" +src+") no-repeat";
    odaby.style.backgroundSize = "cover";
}

for (var i = 0; i < oli.length; i++) {
    oli[i].index = i;
    oli[i].onclick = function () {
        Hf(this.index);
        setCookie("userName",this.index,setCookieDate(14));
    }
}

currentIndex = getCookie("userName");
if(currentIndex){
  Hf(currentIndex)
}