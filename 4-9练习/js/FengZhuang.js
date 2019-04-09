//构造函数
function Qwe() {
    //创建一个数组,用来保存获取到的元素
    this.elements = [];
    //通过id获取元素
    this.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
    }
    //获取TagName获取元素
    this.getTag = function (tag) {
        var taga = document.getElementsByTagName(tag);
        for (var i = 0; i < taga.length; i++) {
            this.elements.push(taga[i]);
        }
        return this;
    }
    //获取ClassName获取元素
    this.getClass = function(Class1){
        var classa = document.getElementsByClassName(Class1);
        for(var i = 0;i<classa.length;i++){
            this.elements.push(classa[i]);
        }
        return this;
    }
     //获取Name获取元素
     this.getName = function(name1){
        var name2 = document.getElementsByName(name1);
        for(var i = 0;i<name2.length;i++){
            this.elements.push(name2[i]);
        }
        return this;
    }
}
//给原型上添加属性和方法
Qwe.prototype.click = function (fn) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onclick = fn;
    }
    return this;
}
//创建html方法
Qwe.prototype.html = function (html1) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = html1;
    }
    return this;
}
//实例化一个对象
var $ = function () {
    return new Qwe();
}