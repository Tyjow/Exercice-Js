var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#000";
ctx.fillRect(90, 90, 175, 175);

ctx.fillStyle = "rgba(23, 145, 167, 0.5)";
ctx.fillRect(40, 25, 175, 175);

var canvas  = document.getElementById('canvas-snd');
var ctx = canvas.getContext('2d');
ctx.moveTo(100,100);
ctx.lineTo(250,100);
ctx.stroke();

var c = document.getElementById('canvas-trd');
var ctx = c.getContext('2d');
ctx.fillStyle = 'purple';
ctx.strokeStyle = 'purple';
ctx.beginPath(); //Tete
ctx.arc(175,150,90,0,2*Math.PI);
ctx.stroke();

ctx.beginPath(); // Bouche
ctx.arc(175, 150, 80, 0, Math.PI);
ctx.fill();

ctx.beginPath(); // oeil gauche
ctx.arc(140, 135, 35, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
ctx.stroke();

ctx.beginPath(); // oeil droit
ctx.arc(210, 135, 35, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
ctx.stroke();