

let scorePlayer1;
let award1;
var total1=0;
let total2 = 0;
let win = document.getElementById("win")
let roll1 = document.getElementById("rollPlayer1")
let tot1 = document.getElementById("total1")
let tot2 = document.getElementById("total2")
let sco1 =document.getElementById("scor1");
let sco2 =document.getElementById("scor2");
let roll2 = document.getElementById("rollPlayer2")
const stopGame = document.getElementById("hold");  

roll1.addEventListener("click", player1);
roll2.addEventListener("click", player2);


hold.addEventListener("click", stopPlayer);

 

function player1() {
  
    win.innerHTML = 'ROLL AGAIN';
    scorePlayer1 =  Math.floor(Math.random() * 6) + 1;
    sco1.innerHTML =`Player1 score is is ${scorePlayer1}`;
    console.log(scorePlayer1);
   
    total1 += scorePlayer1;
    award1 = total1;
    //player2();
    console.log(`award1 is ${award1}`);
   tot1.innerHTML = `Player1 total is ${total1}`;


   if(scorePlayer1 < 2 && total1 < 2){
    scorePlayer1 = 0;
    total1 = 0;
    win.innerHTML = 'YOU LOOSE';
    roll1.style.visibility =" hidden";
   
    return award1;
   }
   

}


function player2() {
    
    win.innerHTML = 'ROLL AGAIN';
    scorePlayer1 =  Math.floor(Math.random() * 6) + 1;
    sco2.innerHTML =`Player2 score is ${scorePlayer1}`;
    console.log(scorePlayer1);
   
    total2 += scorePlayer1;
    console.log(total2);
   tot2.innerHTML = `Player2 total is ${total2}`;


   if(scorePlayer1 < 2 && total2 < 2){
    scorePlayer1 = 0;
    total2 = 0;
    win.innerHTML = 'YOU LOOSE';
    
   }
 var award2 =award1;
 
   console.log(`total1 is ${award2}`)
   console.log(`total2 is ${total2}`)
  
   if(award2 > total2){
   win.innerHTML = 'Player 1 win';
}
    
else
{
    win.innerHTML = 'Player 2 win';
    
}

}


function stopPlayer(){
    win.innerHTML  = 'STOP ';
    scorePlayer1 = 0;
    total1 = 0;
    total2 = 0;
  
}



