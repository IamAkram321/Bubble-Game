var timer = 60;
var score=0;
var hitrandom=0;

function increaseScore() {
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    hitrandom = Math.floor(Math.random() *10);
    document.querySelector("#hitvalue").textContent = hitrandom;
}
function makeBubble() {
var m = " ";
for (var i = 1; i <=180;i++){
    var ran = Math.floor(Math.random()*10);
    m += `<div class="bubble">${ran}</div>`;
}
document.querySelector(".pannelbottom").innerHTML = m;
}
function runTimer() {
    var timerID = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#time").textContent = timer;
    }
    else{
        clearInterval(timerID);
        document.querySelector("#pbtm").innerHTML = `<h2>Game Over!</h`;
    }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrandom){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();