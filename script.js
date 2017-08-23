var timer = 1500;

var h = Math.floor(timer / 60);

var m = timer % 60;

document.getElementById("clock").innerHTML = h + ':' + m+'0';

var el = document.getElementById('begin').addEventListener("click", beginClock);
var la = document.getElementById('end').addEventListener("click", stopping);
var yo = document.getElementById('over').addEventListener("click", resetting);
var su = document.getElementById('rest').addEventListener("click", breakTime);
var se = document.getElementById('plus').addEventListener("click", addTime);
var de = document.getElementById('minus').addEventListener("click", subtractTime);

function starting() {

  timer--;
  h = Math.floor(timer / 60);
  var m = timer % 60;
  console.log(timer);
  if (m < 10) {
    m = "0" + m;
  }

  document.getElementById("clock").innerHTML = h + ':' + m;

  if (timer < 0) {
    document.getElementById("clock").innerHTML = "0:00";
  }
};

function beginClock() {
  BTime = setInterval(starting, 1000);
}

function stopping() {

  clearInterval(BTime);


};

function resetting() {

  timer = 1500;
  h = Math.floor(timer / 60);
  var m = timer % 60;
  if (m < 10) {
    m = "0" + m;
  }
  document.getElementById("clock").innerHTML = h + ':' + m;
}

function breakTime(){
timer = 300;
document.getElementById("clock").innerHTML = 5+ ':' +'00';
}

function addTime(){
//document.getElementById("clock").innerHTML = h + ':' + m;
 document.getElementById("clock").innerHTML = (h=h+1)+ ':' + (m+'0');
timer = timer + 61;

}

function subtractTime(){

document.getElementById("clock").innerHTML = (h= h - 1)+ ':' + m+'0';
timer = timer - 60;
}
