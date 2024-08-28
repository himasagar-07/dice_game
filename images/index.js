var randomDice1Number=Math.floor(Math.random()*6)+1;
var randomDice1Img="dice"+ randomDice1Number +".png";
var ImgSource="images/"+ randomDice1Img;
document.querySelectorAll("img")[0].setAttribute("src",ImgSource);