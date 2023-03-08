window.onload = choosePic;
var myPix = new Array("palm.png","779206.png","1056946.png");

function choosePic() {
 var randomNum = Math.floor(Math.random() * myPix.length);
 document.getElementById("treeImage").src = myPix[randomNum];
}