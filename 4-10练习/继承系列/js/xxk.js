function Xxk(id){
    var tabBox = document.getElementById(id);
    this.tabInp = tabBox.getElementsByTagName("input");
    this.tabDiv = tabBox.getElementsByTagName("div");

    for(var i =0;i<this.tabInp.length;i++){
        this.tabInp[i].index = i;
        var _this = this;
        this.tabInp[i].onclick = function(){
            _this.click(this);
        }
    }
}

Xxk.prototype.click = function(oo){
    for(var i = 0;i<this.tabInp.length;i++){
        this.tabInp[i].className = "";
        this.tabDiv[i].style.display = "none";
    }
    this.tabInp[oo.index].className = "active";
    this.tabDiv[oo.index].style.display = "block";
}