var images = [
	'BACKGROUNDS/bg1.png',
	'BACKGROUNDS/bg2.png',
	'BACKGROUNDS/bg3.png',
	'BACKGROUNDS/bg4.png',
	'BACKGROUNDS/bg5.png',
	'BACKGROUNDS/bg6.png',
	'BACKGROUNDS/bg7.png',
	'BACKGROUNDS/bg8.png',
	'BACKGROUNDS/bg9.png',
	'BACKGROUNDS/bg10.png'
];
var img = document.getElementById("img");
function imgDisp(num){
	var num = Math.floor(Math.random() * 10);
	img.style.backgroundImage = 'url("' + images[num] +'")';
	img.style.backgroundRepeat = "no-repeat";
}
imgDisp();
