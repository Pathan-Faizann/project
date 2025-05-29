document.addEventListener("DOMContentLoaded", function () {
let option  = document.querySelectorAll(".option img");
let userbox = document.querySelector(".user img");
let chosen = '';
let stop = document.querySelector("#think");
let user = document.querySelector("#userbox1");
let compu= document.querySelector(".comp");
let submit = document.querySelector(".sub");
let compbox = document.querySelector(".comp img");
let pointU = document.querySelector(".pointU");
let pointC = document.querySelector(".pointC");
let options = ["stone.jpg","paper.jpeg","kechi.jpeg"];
let Upoints=0;
let Cpoints=0;
let vid = document.querySelector("#vid");
let stone = document.querySelector(".stone");
option.forEach((opt)=>{
    opt.addEventListener("click",()=>{
    chosen = opt.getAttribute("src");
    userbox.setAttribute("src",chosen); 
    user.classList.remove("newuser");
    compu.classList.remove("newcomp"); 
   
    });
});
option.forEach((opt)=>{
    opt.addEventListener("mouseover",()=>{
        stop.style.visibility='visible';
    });
});

function playAudio(){
    let audio= new Audio("winner1.mp3")
    audio.play();
}
function playlose(){
    let audio= new Audio("lose.mp3")
    audio.play();
}



submit.addEventListener("click",()=>{
    let random= Math.floor(Math.random()*options.length);
    let randomimg = options[random];
    compbox.setAttribute("src",randomimg);
    let userside = userbox.getAttribute("src");
    let compside = compbox.getAttribute("src");
    stop.style.visibility='hidden';
    if(!chosen){
        alert ("Please select your move first!");
    }
    if(userside===compside ){
        setTimeout(()=>{
            alert ("Tie move");

        },0.7);
        
    }
    else if((userside==="stone.jpg"&&compside==="kechi.jpeg")||
    (userside==="paper.jpeg"&&compside==="stone.jpg")||
    (userside==="kechi.jpeg"&&compside==="paper.jpeg")){
        Upoints++;
        user.classList.add("newuser");
        pointU.textContent=`Your points : ${Upoints}`;
        }
        else{
            Cpoints++;
            compu.classList.add("newcomp");
            pointC.textContent=`Computer Points : ${Cpoints}`;
        }
        if(Upoints===3){
        let result =document.querySelector(".result");
        let p = document.querySelector(".res");
        p.style.visibility="visible";
        result.style.visibility="visible";
        p.textContent="🎉You Won🎉";
        playAudio();
        submit.style.visibility="hidden";
        

        }
        else if(Cpoints===3){
            let result =document.querySelector(".loser");
            let p = document.querySelector(".loser p");
            p.style.visibility="visible";
            result.style.visibility="visible";
            vid.style.visibility="hidden";
            result.style.backgroundColor="##003049";
            p.textContent="You Lose";
            playlose();
            submit.style.visibility="hidden";
            

        };
       
});




});