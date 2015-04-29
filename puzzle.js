$(document).ready(function() {
    
    $(".canvas").draggable();
  });

	var src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
/* create canvases */
var draw1 = SVG('canvas1').viewbox(0,0,20,20);
var draw2 = SVG('canvas2').viewbox(0,20,20,20);
var draw3 = SVG('canvas3').viewbox(0,40,20,20);
var draw4 = SVG('canvas4').viewbox(0,60,20,20);
var draw5 = SVG('canvas5').viewbox(20,0,20,20);
var draw6 = SVG('canvas6').viewbox(20,20,20,20);
var draw7 = SVG('canvas7').viewbox(20,40,20,20);
var draw8 = SVG('canvas8').viewbox(20,60,20,20);
var draw9 = SVG('canvas9').viewbox(40,0,20,20);
var draw10 = SVG('canvas10').viewbox(40,20,20,20);
var draw11 = SVG('canvas11').viewbox(40,40,20,20);
var draw12 = SVG('canvas12').viewbox(40,60,20,20);
var draw13 = SVG('canvas13').viewbox(60,0,20,20);
var draw14 = SVG('canvas14').viewbox(60,20,20,20);
var draw15 = SVG('canvas15').viewbox(60,40,20,20);
var draw16 = SVG('canvas16').viewbox(60,60,20,20);
/* draw image */
var image = draw1.image(src).size(80, 80);

    

/* clone image to other canvases */
draw2.add(image.clone());
draw3.add(image.clone());
draw4.add(image.clone());
draw5.add(image.clone());
draw6.add(image.clone());
draw7.add(image.clone());
draw8.add(image.clone());
draw9.add(image.clone());
draw10.add(image.clone());
draw11.add(image.clone());
draw12.add(image.clone());
draw13.add(image.clone());
draw14.add(image.clone());
draw15.add(image.clone());
draw16.add(image.clone());
