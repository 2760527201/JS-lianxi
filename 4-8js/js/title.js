window.onload = function () {
    document.getElementById("box").onclick = function () {
        this.style.background = "red";
        document.getElementById("text").innerHTML = "hello";
        document.getElementById("text").style.background = "blue";
        document.getElementById("change").style.background = "url('img/1.jpg') no-repeat center";
        // document.getElementById("change").style.backgroundSize = "cover";
        document.getElementById("change").style.backgroundSize = "contain";
    }
}