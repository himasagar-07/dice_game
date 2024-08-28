var randomDice1=Math.floor(Math.random()*6)+1;
var randomImg1="dice"+randomDice1+".png";
var imgSource1="images/" + randomImg1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSource1);

var randomDice2=Math.floor(Math.random()*6)+1;
var randomImg2="dice"+randomDice2+".png";
var imgSource2="images/" +randomImg2;

var image2=document.querySelectorAll("img")[1].setAttribute("src",imgSource2);



if (randomDice1>randomDice2){
    document.querySelector("h1").innerHTML="💥 Player 1 Wins";
}
else if (randomDice1<randomDice2){
    document.querySelector("h1").innerHTML="Player 2 Wins 💥";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}