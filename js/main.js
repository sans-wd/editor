function change_div() {
  var kvadrat = document.getElementById("kvadrat");

  var w = document.getElementById("width").value;
  var h = document.getElementById("height").value;
  var bg = document.getElementById("bg").value;
  var bgImg = document.getElementById("bgImg").value;

  var position = document.getElementById("position").value;
  var top = document.getElementById("top").value;
  var left = document.getElementById("left").value;
  var bord = document.getElementById("bord").value;
  var bordradius = document.getElementById("bordradius").value;
  var divtext = document.getElementById("divtext").value;
  var fontsize = document.getElementById("fontsize").value;
  var font_color = document.getElementById("font_color").value;
  var box_shad = document.getElementById("box_shad").value;
  var outline = document.getElementById("outline").value;

  kvadrat.style.width = w;
  kvadrat.style.height = h;
  kvadrat.style.background = bg;
  kvadrat.style.backgroundImage = "url(" + bgImg + ")";
  kvadrat.style.border = bord;
  kvadrat.style.borderRadius = bordradius;
  kvadrat.innerHTML = divtext;
  kvadrat.style.fontSize = fontsize;
  kvadrat.style.color = font_color;
  kvadrat.style.boxShadow = box_shad;
  kvadrat.style.outline = outline;

  kvadrat.style.position = position;
  kvadrat.style.top = top;
  kvadrat.style.left = left;
  kvadrat.style.transition = "0.5s";
}
