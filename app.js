let gamSeq=[];
let userSeq=[];
let score=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h3=document.querySelector("h3");
let hiScore=0;

h3.innerHTML="Hi-Score: "+hiScore;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started!")
        started=true;
        levelUp();
    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gamSeq.push(randomColor);
    gameFlash(randomBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gamSeq[idx]){
        if(userSeq.length==gamSeq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML= `Game Over! Your score was <b>${level} <br> Press any Key to Restart.`
        if(level>hiScore){
            hiScore=level;
        }
        console.log(""+hiScore);
        h3.innerHTML="Hi-Score: "+hiScore;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },175)
        reset();
    }
}
function btnPress(){
    let btn =this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gamSeq=[];
    userSeq=[];
    level=0;
}