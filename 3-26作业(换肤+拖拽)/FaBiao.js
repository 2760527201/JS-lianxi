 //点击 个人中心  获取 list列表
 var ospan = document.getElementsByTagName("span")[0];
 var ob1 = document.getElementsByTagName("b")[0];
 var ob2 = document.getElementsByTagName("b")[1];
 var oul = document.getElementsByTagName("ul")[0];
 ospan.onmouseover = function () {
     // if (getStyle(oul, "display") == "block") {
     //     ob1.style.display = "block";
     //     ob2.style.display = "none";
     //     oul.style.display = "none";
     // } else {
     //     ob1.style.display = "none";
     //     ob2.style.display = "block";
     //     oul.style.display = "block";
     // }
     ob1.style.display = "none";
     ob2.style.display = "block";
     oul.style.display = "block";
 }
 ospan.onmouseout = function(){
    ob1.style.display = "block";
    ob2.style.display = "none";
    oul.style.display = "none";
 }
 ob1.onmouseover = function () {
     ob1.style.display = "none";
     ob2.style.display = "block";
     oul.style.display = "block";
 }
 // function getStyle(element, attr) {
 //     if (window.getComputedStyle) {
 //         return window.getComputedStyle(element, null)[attr];
 //     } else {
 //         return element.currentStyle[attr];
 //     }
 // }
 //点击列表中的发表  获取弹框  以及弹框的关闭
 var obtn = document.getElementById("ul_li_fb");
 var olog = document.getElementById("login");
 var oco = document.getElementById("close");
 var oinner = document.getElementById("inner");
 obtn.onclick = function () {
     olog.style.display = "block";
     oinner.style.display = "block";
     document.body.style.overflow = "hidden";
 };
 oco.onclick = function () {
     olog.style.display = "none";
     oinner.style.display = "none";
     document.body.style.overflow = "auto";
 };



  // 内容获取方面
  var obut = document.getElementById("obut_");
  var oHuoQu = document.getElementById("log_op_text");
  var oHuoQu2 = document.getElementById("log_op_textarea");
  //文章里面写
  // var ofabiao = document.getElementById("p1_span1");
  // var oshijian = document.getElementById("p1_span2");
  // var oneirong = document.getElementById("p2_nr");
  var odiv = document.getElementsByClassName("inner")[0];
  // console.log(odiv);
  //正则表达式
  var ozz = /./;
  obut.onclick = function () {
      var ofz = document.createElement("div");
      ofz.className = "fz_";
      odiv.appendChild(ofz);
      ob1.style.display = "block";
      ob2.style.display = "none";
      oul.style.display = "none";
      //正则判断看看弹框输入的是否是空的 
      if (ozz.test(oHuoQu.value) && ozz.test(oHuoQu2.value)) {
          //创建日期对象取其年月日时分
          var oDate = new Date();
          var otime = oDate.toLocaleDateString() + oDate.toLocaleTimeString();
          //文章里面写
          // ofabiao.innerHTML=oHuoQu.value;
          // // console.log(oHuoQu.value)
          // oneirong.innerHTML=oHuoQu2.value;
          // console.log(oHuoQu2.innerHTML)
          //自动生成文章内容
          ofz.innerHTML = "<div class='fz_'>" +
              "<p class='p1'>" +
              "<span id='p1_span1'>" + oHuoQu.value + "</span>" +
              "<span id='p1_span2'>" + otime + "</span>" +
              "</p>" +
              "<p class='p2' id='p2_nr'>" +
              oHuoQu2.value +
              "</p>" +
              "</div>";
          oHuoQu.value = "";
          oHuoQu2.value = "";
          // oshijian.innerHTML = otime;
          olog.style.display = "none";
          oinner.style.display = "none";
          document.body.style.overflow = "auto";
      } else {
          //判断有空的情况下返回  一个新的弹框
          alert("请看清题目！！！");
          oHuoQu.value = "";
          oHuoQu2.value = "";
          olog.style.display = "block";
          oinner.style.display = "block";
          document.body.style.overflow = "hidden";
      }

  }