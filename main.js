
var today = new Date();
var time = today.getHours();
var i;

if (time > 17 || time < 6){//if time is between 5pm and 6am
  for(i=0; i<3; i++){
document.getElementsByClassName("reasons")[i].style.fontSize = "25px";
document.getElementsByClassName("reasons")[i].style.backgroundColor = "#D8D8D8";
document.getElementsByClassName("reasons")[i].style.color = "#E61A36";
document.getElementsByClassName("reasons")[i].style.fontFamily= "Impact,Charcoal,sans-serif";
  }
}
// else default web page style
console.log("current time is :"+time);
