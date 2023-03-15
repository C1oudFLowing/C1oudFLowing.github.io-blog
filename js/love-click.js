/* 爱心特效 */

!function (e, t, a) {
    function r() {
      for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
      requestAnimationFrame(r)
    }
  
    function n() {
      var t = "function" == typeof e.onclick && e.onclick;
      e.onclick = function (e) {
        t && t(), o(e)
      }
    }
  
    function o(e) {
      var a = t.createElement("div");
      a.className = "heart", s.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color: c()
      }), t.body.appendChild(a)
    }
  
    function i(e) {
      var a = t.createElement("style");
      a.type = "text/css";
      try {
        a.appendChild(t.createTextNode(e))
      } catch (t) {
        a.styleSheet.cssText = e
      }
      t.getElementsByTagName("head")[0].appendChild(a)
    }
  
    function c() {
      return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    }
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
      setTimeout(e, 1e3 / 60)
    }, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()
  }(window, document);
  
  /* 文字效果 */
  function text(e){
    // 点击事件触发生生元素等一系列动作的初始状态
    var bombFlag = true;
    // body节点
    var elBody = document.getElementsByTagName("body")[0];
    // 初始化文字数组下标
    var a_idx = 0;
    elBody.onclick = function(e) {
    if(bombFlag){
     // 坐标
     var ev = e,
     x = ev.clientX,
        y = ev.clientY;
      // 随机产生文字颜色
     var color1 = Math.floor((Math.random()*255));
     var color2 = Math.floor((Math.random()*255));
     var color3 = Math.floor((Math.random()*255));
     // 初始化定时器
      var _timer = null;
      // 文字数组
      var a = new Array("乐观", "❤" ,"积极", "向上", "自由", "正能量","(*^▽^*)", "元气满满", "开心" ,"快乐", "善良", "可爱", "暴富", "暴瘦","❤");
      // 创建节点
      var elSpan = document.createElement("span");
      // 随机节点内容
      a_idx = (a_idx + 1) % a.length;
      // 添加内容到节点
      elSpan.innerHTML = a[a_idx];
      // 初始节点化样式
      elSpan.style.zIndex = 999;
      elSpan.style.position = "fixed";
      elSpan.style.top = y -20 + "px",
      elSpan.style.left = x -10 + "px";
      elSpan.style.color = 'rgb('+color1+','+color2+','+color3+')';
      elSpan.style.fontWeight = "bold";
      elSpan.className = "floatSpan";
      // 将元素追加到body中
      elBody.appendChild(elSpan);
      // 获取追加后的节点
      var el = document.getElementsByClassName("floatSpan")[0];
      // 初始化需要渐变的变量值
      // top值
      var cur_y = y - 20;
      // 透明度
      var cur_opacity = 1;
      // 字体大小
      var cur_fontSize = 14;
      // 创建定时器
      _timer = setInterval(function(){
       // 渐变变量
       cur_y += -10;
       cur_opacity -= 0.1;
       cur_fontSize += 1;
       // 渐变变量赋值（因为有单位的关系 所以不能直接加减 通过中间变量来赋值）
       el.style.top = cur_y + "px";
       el.style.opacity = cur_opacity;
       el.style.fontSize = cur_fontSize + "px";
      },50);
      // 时间到了之后清空定时器 清除刚才添加的元素 并且恢复点击触发事件
      setTimeout(function(){
       clearInterval(_timer);
       elBody.removeChild(el);
       bombFlag = true;
      },500);
    }
    // 暂停点击触发事件
      bombFlag = false;
    };
   };