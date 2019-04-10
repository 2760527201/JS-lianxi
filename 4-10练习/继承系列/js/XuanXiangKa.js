/**
 * 选项卡
 * @param {Object} id 选项卡id
 */
function Tab(id) {
    var tabBox = document.getElementById(id);
    //将之前的全局变量变为对象的属性
    this.tabInp = tabBox.getElementsByTagName("input");
    this.tabDiv = tabBox.getElementsByTagName("div");

    for (var i = 0; i < this.tabInp.length; i++) {
        this.tabInp[i].index = i;
        //将this保存成一个变量，就可以在下面代码中调用对象的方法了
        var _this = this;
        //此处这种方式调用函数，就不会改变clickBtn方法的所属关系
        // 以参数的形式将点击的按钮传入clickBtn中，看第70行代码，以及83,84行代码
        this.tabInp[i].onclick = function () {
            //注意此处不能直接使用this，this指向this.tabInp[i]
            // _this.clickBtn();
            //注意参数this代表的是this.tabBtn[i]，即input按钮
             _this.clickBtn(this);
        };
    };
}
// 将clickBtn的调用放在一个函数里，这样就不会改变clickBtn的所属了
//将之前的全局函数添加到构造函数的原型里，作为对象的一个方法
//将点击的按钮以参数的形式传入
Tab.prototype.clickBtn = function (btn) {
    // alert(this) //[object objext]
    for (var i = 0; i < this.tabInp.length; i++) {
        this.tabInp[i].className = "";
        this.tabDiv[i].style.display = "none";
    }
    btn.className = "active";
    this.tabDiv[btn.index].style.display = "block";
};