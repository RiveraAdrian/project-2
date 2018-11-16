var today = new Date();
var time = today.getHours();
var i;

if (time > 17 || time < 6){//if time is between 5pm and 6am
  for(i=0; i<3; i++){
document.getElementsByClassName("reasons")[i].style.fontSize = "25px";
document.getElementsByClassName("reasons")[i].style.backgroundColor = "#8B0000";
document.getElementsByClassName("reasons")[i].style.color = "white";
  }
}
// else default web page style
console.log("current time is :"+time);
