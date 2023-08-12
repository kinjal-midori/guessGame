'use strict';

let rand=Math.trunc(Math.random()*20+1);

let score=20
let highScore=0;
document.querySelector(".check").addEventListener('click',function(){
    const num=Number(document.querySelector(".form-control").value);  
    // document.querySelector(".head1").textContent="😊 Let's go!!!!"
    if(!num){
        document.querySelector(".head1").textContent="Not a Number !!!! 😥"
    }else if(num===rand){
        document.querySelector(".head1").textContent="😊 Let's go !!!!";
        document.querySelector('body').style.backgroundColor="#078200";
        document.querySelector(".answer").value=rand;
        if(score > highScore){
            highScore=score;
            document.querySelector(".hiScore").textContent=highScore;
        }
    }else if(score !== 1){
        if(num > rand){
            document.querySelector(".head1").textContent="It's Bigger !!!! ⏫"
            document.querySelector(".score").textContent= --score;
        }else if(num < rand){
            document.querySelector(".head1").textContent="It's Smaller !!!! ⏬"
            document.querySelector(".score").textContent= --score;
        }
    }else{
        document.querySelector(".head1").textContent="You Loss !!! 💔"
        document.querySelector(".score").textContent= 0;
    }
});

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector('body').style.backgroundColor="#212121";
    document.querySelector(".head1").textContent="Let's Start the Game 😎";
    document.querySelector(".answer").value="?";
    document.querySelector(".form-control").value="";
    score=20;
    rand=Math.trunc(Math.random()*20+1);
    document.querySelector(".score").textContent= score;
})
